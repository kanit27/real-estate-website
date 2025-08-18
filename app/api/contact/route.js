import nodemailer from "nodemailer";
import clientPromise from "../../libs/mongodb";

export async function POST(req) {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    // Save to MongoDB
    const client = await clientPromise;
    const db = client.db(); // use default DB from URI
    await db.collection("contacts").insertOne({
      firstName,
      lastName,
      phone,
      email,
      message,
      createdAt: new Date(),
    });

    // Send emails as before
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Send email to company inbox
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `You received a message from:
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
    });

    // 2️⃣ Auto-reply to the user
    await transporter.sendMail({
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message ✅",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thanks for reaching out! We’ve received your message and will get back to you shortly.</p>
        <p><b>Your Message:</b></p>
        <blockquote>${message}</blockquote>
        <p>Best regards,<br/>Your Company Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email or saving to DB:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
