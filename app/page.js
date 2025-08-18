"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { use } from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="about">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}