"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("✅ Message sent! Check your email.");
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full mb-4 md:py-20 pt-32 flex flex-col md:flex-row justify-center items-center md:gap-40 gap-10"
    >
      <div className="items-start md:ml-80 flex flex-col gap-6 w-full md:w-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-300 w-full md:w-96 text-lg md:text-xl">
          Discover Your Dream Property In Dubai
        </p>
        <a href="#">email.com</a>
        <a href="#">phone number</a>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-6 relative overflow-hidden px-4 md:px-0">
        <img
          src="https://prospergroup.com/wp-content/uploads/2025/05/Image_20250509_155914_779.jpeg"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 pb-10 pt-20 md:pt-40 w-full flex flex-col justify-center items-center gap-6 md:gap-10">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-full md:w-1/4 border-b-[1px] border-gray-200 p-2 text-white placeholder-gray-200 focus:outline-none bg-transparent"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-full md:w-1/4 border-b-[1px] border-gray-200 p-2 text-white placeholder-gray-200 focus:outline-none bg-transparent"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full md:w-1/2 border-b-[1px] border-gray-200 p-2 text-white placeholder-gray-200 focus:outline-none bg-transparent"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full md:w-1/2 border-b-[1px] border-gray-200 p-2 text-white placeholder-gray-200 focus:outline-none bg-transparent"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full md:w-1/2 border-[1px] border-gray-200 p-2 text-white placeholder-gray-200 focus:outline-none bg-transparent"
            required
            rows={5}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full md:w-1/2 p-2 rounded text-black cursor-pointer font-semibold transition ${
              loading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-white hover:bg-white"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </motion.form>
  );
}
