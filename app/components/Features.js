"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  // Define your features here
  const features = [
    {
      title: "Luxury Residences",
      description:
        "Experience world-class luxury living with breathtaking views.",
      image:
        "https://prospergroup.com/wp-content/uploads/2025/03/Building-Exterior-View-Large-1.jpg",
    },
    {
      title: "Modern Interiors",
      description:
        "Elegant, spacious interiors designed for comfort and style.",
      image:
        "https://prospergroup.com/wp-content/uploads/2025/03/1040-s-miami-2-1.jpg",
    },
    {
      title: "Exclusive Amenities",
      description:
        "Access premium facilities including pool, spa, and rooftop lounge.",
      image:
        "https://prospergroup.com/wp-content/uploads/2025/03/Building-Exterior-View-Large-1.jpg",
    },
    {
      title: "Prime Location",
      description:
        "Conveniently located in the heart of the city with easy access.",
      image:
        "https://prospergroup.com/wp-content/uploads/2025/03/1040-s-miami-2-1.jpg",
    },
  ];

  useEffect(() => {
    const images = imageRef.current.querySelectorAll("img");
    const texts = textRefs.current;

    // Initial setup
    gsap.set(images, { opacity: 0, yPercent: 20, scale: 1 });
    gsap.set(images[0], { opacity: 1, yPercent: 0, scale: 1 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=" + features.length * 400, // adjust scroll length
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const total = features.length;
        const segment = 1 / (total - 1);
        let index = Math.round(self.progress / segment);
        index = Math.max(0, Math.min(index, total - 1));

        images.forEach((img, i) => {
          gsap.set(img, {
            opacity: i === index ? 1 : 0,
            yPercent: i === index ? 0 : -20,
            scale: 1, // No scale jump
          });
        });

        texts.forEach((t, i) => {
          gsap.set(t, {
            opacity: i === index ? 1 : 0.3,
            color: i === index ? "white" : "#9ca3af",
          });
        });
      },
    });
  }, [features]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black flex overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="absolute top-10 left-0 px-8 py-5 text-4xl font-bold text-white z-20">
        What Do We Do
      </h2>
      {/* Left Side - Images */}
      <div
        ref={imageRef}
        className="w-1/2 relative flex items-center justify-center h-screen"
      >
        {features.map((feature, i) => (
          <img
            key={i}
            className="absolute w-[90%] h-[70%] object-cover"
            src={feature.image}
            alt={feature.title}
          />
        ))}
      </div>

      {/* Right Side - Text */}
      <div className="w-1/2 flex flex-col justify-center pl-16 space-y-16 text-2xl font-semibold">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className="transition-all duration-300"
            style={{
              opacity: i === 0 ? 1 : 0.3,
              color: i === 0 ? "white" : "#9ca3af",
            }}
          >
            {feature.title}
            <p className="text-base font-normal">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
