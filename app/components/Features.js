"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const featureRefs = useRef([]);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use images from public folder
  const features = useMemo(
    () => [
      {
        title: "Luxury Residences",
        description:
          "Experience world-class luxury living with breathtaking views.",
        image: "/luxury-residency.jpg",
      },
      {
        title: "Modern Interiors",
        description: "Elegant, spacious interiors designed for comfort and style.",
        image: "/modern-interiors.jpg",
      },
      {
        title: "Exclusive Amenities",
        description:
          "Access premium facilities including pool, spa, and rooftop lounge.",
        image: "/exclusive-amenities.jpg",
      },
      {
        title: "Prime Location",
        description:
          "Conveniently located in the heart of the city with easy access.",
        image: "/prime-location.jpg",
      },
    ],
    []
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isMobile) {
      // Mobile animations
      featureRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    } else {
      // Desktop animations
      const images = imageRef.current.querySelectorAll("span"); // Next/Image renders a span wrapper
      const texts = textRefs.current;

      gsap.set(images, { opacity: 0, yPercent: 20 });
      gsap.set(images[0], { opacity: 1, yPercent: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=" + features.length * 400,
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
    }
  }, [mounted, isMobile, features]);

  if (!mounted) return <section className="w-full h-screen bg-black"></section>;

  // Mobile layout
  if (isMobile) {
    return (
      <section className="flex flex-col bg-black px-4 py-16">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={(el) => (featureRefs.current[i] = el)}
            className="flex flex-col items-center mb-16"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-lg mb-4"
              priority={i === 0}
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-center">{feature.description}</p>
          </div>
        ))}
      </section>
    );
  }

  // Desktop layout
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black flex overflow-hidden"
    >
      <div
        ref={imageRef}
        className="w-1/2 relative flex items-center justify-center h-screen"
      >
        {features.map((feature, i) => (
          <span key={i} className="absolute w-[90%] h-[70%]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              sizes="(max-width: 768px) 90vw, 60vw"
              className="object-cover"
              priority={i === 0}
            />
          </span>
        ))}
      </div>

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
