import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const projects = [
  {
    image: "/images/pro1.jpeg",
    title: "5G Modem Infrastructure",
    category: "Networking & Hardware",
  },
  {
    image: "/images/pro2.jpeg",
    title: "Enterprise Server Room Setup",
    category: "Server Maintenance",
  },
  {
    image: "/images/pro3.jpeg",
    title: "Access Control Management",
    category: "Security & Biometric",
  },
  {
    image: "/images/pro4.jpeg",
    title: "CCTV Monitoring System",
    category: "Security System",
  },
];

const Projects = () => {
  return (
    <div className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TITLE */}
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-cyan-300 text-sm">
            Recent Work
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
            A Small Selection Of
            <span className="text-cyan-300"> Recent Projects</span>
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-3xl
              border border-white/10 bg-white/5 backdrop-blur-xl
              hover:-translate-y-3 transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt="project"
                  className="w-full h-80 object-cover
                  group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-cyan-300 text-sm tracking-[3px] uppercase">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-xl sm:text-2xl font-bold text-white">
                      {project.title}
                    </h2>
                  </div>

                  {/* ✅ PERFECT ROUND ICON */}
                  <div
                    className="w-14 aspect-square rounded-full bg-cyan-400
                    flex items-center justify-center shrink-0
                    shadow-[0_0_20px_rgba(34,211,238,0.6)]
                    transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.9)]"
                  >
                    <BsArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;