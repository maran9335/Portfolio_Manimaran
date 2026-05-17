"use client";
import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [status, setStatus] = useState("");
  const [hasDownloaded, setHasDownloaded] = useState(false);

  // 🚀 TOAST STATE
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "info",
  });

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // 🚀 SHOW TOAST FUNCTION
  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setToast({ show: true, message, type });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "info" });
    }, 3000);
  };

  // 🚀 DOWNLOAD HANDLER
  const handleDownload = () => {
    if (hasDownloaded) {
      showToast(
        "You already downloaded your CV. Downloading again...",
        "info"
      );
    }

    setStatus("downloading");

    const link = document.createElement("a");
    link.href = "/Manimarancv.pdf";
    link.download = "My_CV.pdf";
    link.click();

    setHasDownloaded(true);

    setTimeout(() => {
      setStatus("done");
      showToast("CV downloaded successfully!", "success");

      setTimeout(() => setStatus(""), 2000);
    }, 1000);
  };

  return (
    <>
      {/* 🚀 TOAST UI */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-9999 animate-slide-in">
          <div
            className={`px-5 py-4 rounded-xl shadow-lg text-white w-70
            ${
              toast.type === "success"
                ? "bg-linear-to-r from-green-500 to-emerald-600"
                : toast.type === "error"
                ? "bg-linear-to-r from-red-500 to-pink-600"
                : "bg-linear-to-r from-blue-500 to-indigo-600"
            }`}
          >
            <h3 className="font-bold text-sm">
              {toast.type === "success"
                ? "Success"
                : toast.type === "error"
                ? "Error"
                : "Notice"}
            </h3>

            <p className="text-xs mt-1">{toast.message}</p>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <div
        className={`transition-all ${
          navBg ? "bg-[#0e0e2c] shadow-md" : "fixed"
        } duration-200 h-[12vh] z-50 fixed w-full`}
      >
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
          
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaLaptop className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
              MANIMARAN
            </h1>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center space-x-5.5">
            {Navlinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex items-center space-x-4">

            {/* CV BUTTON */}
            <button
              onClick={handleDownload}
              className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 
              hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
            >
              <BiDownload className="w-5 h-5" />

              <span>
                {status === "downloading"
                  ? "Downloading..."
                  : status === "done"
                  ? "Downloaded ✓"
                  : "Download CV"}
              </span>
            </button>

            {/* BURGER */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;