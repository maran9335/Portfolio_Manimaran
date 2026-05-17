"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  // 🚀 FORM STATE (VALIDATION)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // 🚀 TOAST STATE
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });

  // 🚀 SHOW TOAST
  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "error"
  ) => {
    setToast({ show: true, message, type });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "error" });
    }, 3000);
  };

  // 🚀 INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 VALIDATION + SEND EMAIL
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // ❌ VALIDATION CHECK
    if (!name || !email || !phone || !message) {
      showToast("Please fill all fields before sending message!", "error");
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_60h8x0x",
        "template_3jly346",
        form.current,
        "fhB5NaMaufC0iLNMl"
      )
      .then(() => {
        showToast("Message sent successfully!", "success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        form.current?.reset();
      })
      .catch(() => {
        showToast("Failed to send message. Try again!", "error");
      });
  };

  return (
    <div className="pt-16 pb-16 relative">

      {/* 🚀 TOAST UI */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-9999 animate-slide-in">
          <div
            className={`px-5 py-4 rounded-xl shadow-lg text-white w-70
            ${
              toast.type === "success"
                ? "bg-linear-to-r from-green-500 to-emerald-600"
                : "bg-linear-to-r from-red-500 to-pink-600"
            }`}
          >
            <h3 className="font-bold text-sm">
              {toast.type === "success" ? "Success" : "Error"}
            </h3>
            <p className="text-xs mt-1">{toast.message}</p>
          </div>
        </div>
      )}

      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE (UNCHANGED) */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Get in touch to discuss your next <br />
            IT project or technical solution.
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Contact me today and let’s work together on your goals.
          </p>

          <div className="flex items-center space-x-3 mb-4 mt-6">
            <BiPhone className="w-9 h-9 text-cyan-300" />
            <p className="text-gray-400 font-bold text-xl">
              +971 528812913,<br /> +91 8667781927
            </p>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <BiEnvelope className="w-9 h-9 text-cyan-300" />
            <p className="text-gray-400 font-bold text-xl">
              maran9335@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <BiMap className="w-9 h-9 text-cyan-300" />
            <p className="text-gray-400 font-bold text-xl">
              Ramanathapuram,<br /> TamilNadu,<br /> India
            </p>
          </div>

          {/* SOCIAL unchanged */}
        </div>

        {/* RIGHT FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md w-full h-40"
          />

          <button
            type="submit"
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 text-white rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;