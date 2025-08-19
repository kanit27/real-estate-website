"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Townhouse",
    img: "/townhouse.jpg",
    desc: "Discover vibrant living in stylish Dubai townhomes.",
  },
  {
    title: "Apartment",
    img: "/apartment.jpeg",
    desc: "Modern apartments with breathtaking city views.",
  },
  {
    title: "Villas",
    img: "/villas.jpg",
    desc: "Spacious and luxurious villas for the ultimate lifestyle.",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToIndex = (idx) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[idx];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
        setCurrent(idx);
      }
    }
  };

  const handleScroll = (dir) => {
    let next = current + (dir === "right" ? 1 : -1);
    if (next < 0) next = 0;
    if (next > projects.length - 1) next = projects.length - 1;
    scrollToIndex(next);
  };

  return (
    <section className="md:py-40 py-32  bg-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 mb-16">
        <div className="w-full">
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-2">
            Find Your Dream Home in Dubai
          </h2>
          <p className="text-gray-400 text-center text-lg">
            Explore exclusive real estate opportunities in Dubai’s most
            sought-after locations.
          </p>
        </div>
      </div>

      {/* Desktop Grid */}
      {!isMobile && (
        <div className="grid grid-cols-3 gap-6 px-6 md:px-40 md:pt-20">
          {projects.map((project, idx) => (
            <div key={idx} className="relative group overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                  height={300}
                className="w-full h-[400px] object-cover opacity-55 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg md:text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Carousel with arrows */}
      {isMobile && (
        <div className="relative px-6">
          {/* Arrows */}
          <div className="flex justify-end items-center gap-4 mb-4">
            <button
              onClick={() => handleScroll("left")}
              disabled={current === 0}
              className="text-white px-2.5 py-2 rounded-full border border-white transition disabled:opacity-60"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={current === projects.length - 1}
              className="text-white px-2.5 py-2 rounded-full border border-white transition disabled:opacity-60"
              aria-label="Scroll right"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="w-[85vw] flex-shrink-0 relative rounded-lg overflow-hidden"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover opacity-60 rounded-lg"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
