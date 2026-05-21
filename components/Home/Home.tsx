"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="overflow-hidden bg-[#050816]
      scroll-smooth"
    >
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="works">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;