"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  const handleProjectsClick = () => {
    const section = document.getElementById("works");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // ✅ NEW: smooth scroll down on arrow click
  const handleAutoScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center
      text-white overflow-hidden px-6 pt-32"
    >
      <ParticlesHero />

      <div className="absolute inset-0 bg-black/40 z-1" />

      <div
        className="relative z-10 max-w-5xl mx-auto text-center"
        data-aos="zoom-in"
      >
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/s1.jpeg"
            alt="profile"
            className="w-44 h-44 rounded-full object-cover
            border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.6)]"
          />
        </div>

        {/* SMALL TITLE */}
        <div className="mt-8 inline-block px-5 py-2 rounded-full border border-cyan-400/40 bg-white/5 backdrop-blur-lg">
          <p className="text-sm tracking-[3px] uppercase text-cyan-300">
            IT Specialist
          </p>
        </div>

        {/* MAIN TITLE */}
        <h1 className="mt-8 text-3xl sm:text-2xl lg:text-5xl font-black leading-tight">
          Skilled <span className="text-cyan-300"> IT Specialist </span>
          <br />
          In Modern Technology Solutions
        </h1>

        {/* TYPEWRITER */}
        <div className="mt-8 text-lg sm:text-2xl font-medium text-gray-200">
          <span>I create powerful solutions in </span>

          <span className="text-cyan-300 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Networking",
                  "System Support",
                  "Web Development",
                  "Security Systems",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-8">
          Passionate IT Specialist with hands-on experience in networking,
          server maintenance, CCTV systems, access control, and modern web
          technologies. Focused on building reliable and professional digital
          solutions.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button
            onClick={handleProjectsClick}
            className="group px-10 py-4 rounded-full bg-cyan-400
            text-black font-bold hover:scale-105 transition-all duration-300
            flex items-center gap-3 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            TEAM I WORK
            <BsArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>

          {/* SOCIAL ICONS (mobile side-by-side fix) */}
          <div className="flex flex-row items-center justify-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              className="px-6 py-4 rounded-full border border-white/20
              bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="px-6 py-4 rounded-full border border-white/20
              bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* SCROLL ARROW (CLICKABLE + SMOOTH SCROLL) */}
        <div
          className="mt-20 flex justify-center cursor-pointer"
          onClick={handleAutoScroll}
        >
          <FaChevronDown className="text-cyan-300 text-3xl animate-bounce drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;