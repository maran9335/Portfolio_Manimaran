"use client";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {

  // 🚀 TOAST STATE
  const [toast, setToast] = useState(false);

  // 🚀 POPUP FUNCTION
  const handleProjectsClick = () => {
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  return (
    <div className="relative h-screen flex items-center justify-center  
    text-white overflow-hidden flex-col">

      <ParticlesHero />

      {/* 🔥 TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-pulse">
          <div className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-4 rounded-xl shadow-2xl w-70">
            
            <h3 className="font-bold text-sm">Notice</h3>

            <p className="text-xs mt-1">
              No projects have been uploaded yet. Sorry for the inconvenience.
            </p>

          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center">

        {/* PROFILE IMAGE */}
        <img
          src="images/s1.jpeg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#1a1a81aa] object-cover w-37.5 h-37.5 shadow-lg"
          data-aos="fade-up"
        />

        {/* TITLE */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
        mt-6 text-center font-bold tracking-wider"
        >
          Experienced IT Specialist,
          <br /> system support,
          <span className="text-cyan-200">and innovative solutions.</span>
        </h1>

        {/* TYPEWRITER */}
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi! I'm Manimaran - A Passionate
          <span className="text-cyan-200 font-bold ml-2">
            <Typewriter
              options={{
                strings: [
                  "Technical Support",
                  "Network Support",
                  "Hardware & Software",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h2>

        {/* BUTTON */}
        <button
          onClick={handleProjectsClick}
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all
        duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center gap-2"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default Hero;