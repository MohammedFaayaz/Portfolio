// src/components/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const projectData = [
  {
    title: "Nisha Fashion",
    desc: `My first frontend project during the 1st year vacation using HTML, CSS, and JavaScript. 
It was a simple fashion website showcasing product cards and styling techniques. 
This marked the beginning of my journey into the world of web development.`,
    link: "https://github.com",
  },
  {
    title: "Alumni Networking Portal",
    desc: `Created for a college tech event with my team "Wissen Seekers", using Bootstrap and JavaScript. 
The platform enables alumni to register, connect, and share job or mentorship opportunities. 
It also includes admin and user dashboards, login systems, and event pages.`,
    link: "https://lnkd.in/gtjP6Q8B",
  },
  {
    title: "SHEcosystem",
    desc: `A web app built to empower women entrepreneurs through mentorship programs and funding support. 
We focused on social impact and user-friendly design for easy access to resources. 
It was designed as part of a hackathon challenge to support inclusivity.`,
    link: "https://lnkd.in/g7nCVehB",
  },
  {
    title: "Soil Texture Analysis",
    desc: `An IoT and ML-based solution to analyze soil texture using sensors and image processing. 
Helps farmers identify soil quality and get crop recommendations to improve yield. 
Built using Python, OpenCV, and sensor integration techniques.`,
    link: "https://lnkd.in/gEthr_nx",
  },
  {
    title: "VeriFi – AI KYC with Blockchain",
    desc: `An AI-powered decentralized KYC system for secure identity verification and onboarding. 
Incorporates liveness detection and deepfake prevention to avoid fraud. 
Blockchain integration ensures that user identities are tamper-proof and transparent.`,
    link: "#",
  },
  {
    title: "Learn-a-Thon Project",
    desc: `Developed a full-fledged React website after completing a week-long Learn-a-Thon. 
It was a hands-on experience building reusable components, hooks, and dynamic routing. 
This project helped me solidify my understanding of the React ecosystem.`,
    link: "https://lnkd.in/gUVt9TDY",
  },
  {
    title: "Sound Sensor Monitoring",
    desc: `A real-time sound monitoring system built using Raspberry Pi and Python. 
Used decibel levels and FFT analysis to detect anomalies in machine environments. 
Useful for industrial machine fault detection and smart automation setups.`,
    link: "#",
  },
];


export default function Projects({ darkMode }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const cardBg = darkMode ? "bg-[#1e293b]" : "bg-gray-100";

  const project = projectData[index];

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projectData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section id="projects" className={`w-full py-20 px-6 md:px-20 ${bgColor} ${textColor}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">🚀 My Projects</h2>

      {/* Project Slide */}
      <div className="relative w-full max-w-2xl mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={project.title}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`rounded-xl shadow-lg p-6 text-left ${cardBg}`}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm opacity-80 mb-4">{project.desc}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white-400 hover:text-blue-600 transition"
            >
              View Project <FaExternalLinkAlt />
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            className="text-2xl text-white-400 hover:text-white-600 transition"
          >
            <IoIosArrowBack />
          </button>

          <button
            onClick={handleNext}
            className="text-2xl text-white-400 hover:text-white-600 transition"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}
