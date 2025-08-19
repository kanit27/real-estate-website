"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-black flex flex-col md:my-10 px-4 md:px-20 md:py-48 py-32 overflow-hidden"
    >
      <img src="/aboutus.jpg" alt="About Us" className="absolute inset-0 w-full h-full bg-center object-cover opacity-50" />

      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center text-white mb-10">
        About Us
      </h2>
      <div className="relative z-10 text-white text-center text-base md:text-xl md:px-60">
        <h1 className="mb-4">
          At SAV global, real estate is more than just property — it's about
          vision, value, and trusted relationships.
        </h1>
        <h1 className="mb-4">
          Founded by Ali abbas Virani, we’ve built strong partnerships with some
          of Dubai’s leading developers and agencies to offer exclusive
          investment opportunities and premium properties. Our focus is on
          transparency, quality, and delivering long-term value to clients
          around the world.
        </h1>
        <h1 className="mb-4 ">
          Whether you're buying, investing, or exploring the market, we’re here
          to guide you — with integrity and expertise.
        </h1>
      </div>
    </section>
  );
};

export default AboutUs;
