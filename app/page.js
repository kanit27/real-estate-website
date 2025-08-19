"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Features from "./components/Features";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}