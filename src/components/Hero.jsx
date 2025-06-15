// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaBolt } from "react-icons/fa";
import profile3D from "../assets/profile3D.png";
import StarfieldBackground from "./StarfieldBackground";

export default function Hero({ darkMode, setDarkMode }) {
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const secondaryText = darkMode ? "text-gray-300" : "text-gray-700";
  const buttonBg = darkMode ? "bg-white text-black" : "bg-black text-white";
  const borderColor = darkMode ? "border-white text-white" : "border-black text-black";

  return (
    <section className={`relative w-full h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${bgColor} ${textColor}`}>
      <StarfieldBackground />
      <div className="hero-matrix-overlay" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-3xl px-6 z-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
          Hi, I’m <span className="underline decoration-2 underline-offset-4">Mohammed Fayaz</span>
        </h1>

        <p className={`text-xl md:text-2xl mt-4 font-mono ${secondaryText}`}>
          <Typewriter
            words={[
              "Frontend Developer.",
              "UI/UX Designer.",
              "MERN Stack Developer.",
              "IoT Innovator.",
              "AI Enthusiast.",
              "Hackathon Specialist."
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition border ${buttonBg}`}
          >
            <FaBolt />
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/Mohammed_Fayaz_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition border ${borderColor}`}
          >
            <FaDownload />
            Resume
          </motion.a>
        </div>

        <div className="mt-12 flex justify-center">
          <motion.img
            src={profile3D}
            alt="Stark 3D"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="w-40 md:w-60 rounded-full border-4 shadow-lg"
          />
        </div>
      
      
      </motion.div>
    </section>
  );
}
