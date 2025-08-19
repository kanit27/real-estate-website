"use client";
import React, { useEffect, useRef, useState } from "react";


const partners = [
  "https://i.1.creatium.io/disk2/d5/4e/28/bff8024c1e833620d12ce05556393b2dee/674x536q8/pdf24_reader_jkyrumjsbu_photoroom_1_1.png",
  "https://beyonddevelopments.ae/assets/logos/beyond_logo_white.png",
  "https://i0.wp.com/hallmarkpro.net/wp-content/uploads/2024/06/developer_EQ2pHhC5ee-1.webp?fit=860%2C484&ssl=1",
  "https://www.claydonhouse.ae/img/project/homepage/n/ellington.png",
  "https://ramprealestate.ae/wp-content/uploads/2024/01/EMAAR-1.png",
  "https://cdn.sanity.io/images/6c2m9rts/production/5c2ad6f1d355854a20d6927115086d52aaed3a9d-800x215.webp?w=800&h=800&fm=webp&q=85&fit=clip&crop=center&auto=format",
  "https://luxurylifestyleawards.com/wp-content/uploads/2021/02/54030891-0-Sobha-logo-07.png",
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
            <img
              src={logo}
              key={idx}
              alt={`Partner ${idx + 1}`}
              width={120}
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
            <img
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
