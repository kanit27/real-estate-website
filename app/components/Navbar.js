"use client";
import React, { useEffect, useState } from "react";

// const navItems = [
//   { label: "Features", to: "features" },
//   { label: "Projects", to: "projects" },
//   { label: "About Us", to: "about" },
//   { label: "Contact Us", to: "contact" },
// ];

export default function Navbar() {
  const [showBg, setShowBg] = useState(false);
  // let scrollTimeout = null;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowBg(true);
  //     if (scrollTimeout) clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => setShowBg(false), 300);
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (scrollTimeout) clearTimeout(scrollTimeout);
  //   };
  // }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        showBg ? "bg-black bg-opacity-80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-center px-4 md:px-6">

          <img className="h-32 object-contain md:h-44" src="/SAVGlobal.png" alt="SAVGlobal Logo" />

        {/* <ul className="flex gap-4 md:gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <a
                href={`#${item.to}`}
                className="text-gray-200 hover:text-white font-medium transition text-sm md:text-base"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
}