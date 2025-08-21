import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        loop
        muted
        preload="auto"
        autoPlay
        type="video/mp4"
      />
      <div className="absolute bottom-40 right-60 bg-opacity-60  rounded-lg">
        {/* <p className="w-full text-base md:text-lg text-center text-gray-200 mt-2">
          Real Estate Solutions for Modern Living
        </p> */}
        <h1 className="text-3xl w-full  md:text-8xl drop-shadow-lg">
          The Future of  
          </h1>
          <h1 className="text-white pl-48  md:text-8xl  text-end">Real Estate 
           <span className="text-3xl italic text-end text-neutral-300"> in Dubai</span>
          </h1>
      </div>
    </section>
  );
}