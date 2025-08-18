import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
      />
      <div className="absolute bottom-10 left-10  bg-opacity-60 p-6 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Find Your Dream Home Today
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          Real Estate Solutions for Modern Living
        </p>
      </div>
    </section>
  );
}