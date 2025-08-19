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
  "/SobhaRealty.png"
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

  // Auto-scroll effect for mobile
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

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
  }, [isMobile]);

  return (
    <section className="py-40 bg-black">
      <h2 className="text-center text-xl md:text-3xl font-semibold mb-18">
        Our Partnerships & Collaborations
      </h2>

      {/* Desktop view: show all logos */}
      {!isMobile && (
        <div className="flex justify-center gap-24 px-10">
          {partners.map((logo, idx) => (
            <Image
              src={logo}
              key={idx}
              alt={`Partner ${idx + 1}`}
              width={130}
              height={60}
              className="object-contain "
            />
          ))}
        </div>
      )}

      {/* Mobile view: auto-scrolling row */}
      {isMobile && (
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-hidden whitespace-nowrap"
        >
          {/* duplicate logos for smooth infinite scroll */}
          {[...partners, ...partners].map((logo, idx) => (
            <Image
              src={logo}
              key={idx}
              alt={`Partner ${idx + 1}`}
              width={70}
              height={30}
              className="object-contain"
            />
          ))}
        </div>
      )}
    </section>
  );
}
