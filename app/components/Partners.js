"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const partners = [
  "/Anax.png",
  "/EMAAR.png",
  "/Imtiaz.webp",
  "/Ellington.png",
  "/Beyond.png",
  "/Azizi.webp",
  "/SobhaRealty.png",
  "/Leos.webp"
];

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll effect for both desktop and mobile
  useEffect(() => {
    if (!scrollRef.current) return;

    let scrollAmount = 0;
    const container = scrollRef.current;

    const scrollStep = () => {
      if (container.scrollWidth > container.clientWidth) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; // reset for infinite loop
        }
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollStep, 30); // adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-40 bg-black">
      <h2 className="text-center text-xl md:text-3xl font-semibold mb-18">
        Our Partnerships & Collaborations
      </h2>

      {/* Auto-scrolling row for both desktop and mobile */}
      <div
        ref={scrollRef}
        className={`flex md:gap-36 gap-6 overflow-hidden whitespace-nowrap w-full`}
        style={{ cursor: "grab" }}
      >
        {/* duplicate logos for smooth infinite scroll */}
        {[...partners, ...partners].map((logo, idx) => (
          <Image
            src={logo}
            key={idx}
            alt={`Partner ${idx + 1}`}
            width={isMobile ? 70 : 130}
            height={isMobile ? 30 : 60}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
