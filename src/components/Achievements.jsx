// src/components/Achievements.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import StarfieldBackground from "./StarfieldBackground";

const achievements = [
  {
    title: "🥇 First Prize – National Technology Day Hackathon 2025",
    description:
      "Developed a real-time machine condition monitoring system using sound decibel analysis. Organized by TCE in collaboration with Thiagarajar Mills Pvt. Ltd. Enabled predictive maintenance through audio anomaly detection, increasing industrial machine efficiency.",
    year: "2025",
  },
  {
    title: "🥇 First Place – Web Development Learn-a-Thon",
    description:
      "Won the Learn-a-Thon organized by IEI CSE Student Chapter, TCE, for creating an impressive full-stack web application. Built a responsive MERN stack site with authentication, routing, and modern UI/UX principles.",
    year: "2025",
  },
  {
    title: "🏅 Best Tool Demo – F'STIVAL by GLUGOT Association",
    description:
      "Recognized for delivering the Best Tool Demo using Flask during F'STIVAL organized by GLUGOT, TCE (2024–2025). Explained backend logic, routing, and integration with SQLite and REST APIs clearly to a large audience.",
    year: "2025",
  },
  {
    title: "🏆 Student’s Choice Award – IdeaFlow Hackathon",
    description:
      "Awarded Student's Choice for a standout project at the IdeaFlow Hackathon organized by the CSBS Department, TCE. Developed a Decentralized KYC system with liveness detection and fraud prevention.",
    year: "2025",
  },
  {
    title: "🏆 Hackz '24 Finalist – CEG Chennai",
    description:
      "Built SHEcosystem, a platform to support women entrepreneurs with mentorship and funding opportunities. Collaborated in a 24-hour sprint to implement user authentication, dashboards, and real-time support chat.",
    year: "2024",
  },
  {
    title: "📜 Presented Paper on AI App Success Prediction",
    description:
      "Delivered a conference talk on machine learning ensemble models to classify app success probability. Showcased metrics such as precision, recall, and accuracy across test sets using real-world datasets.",
    year: "2025",
  },
];


const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

export default function Achievements({ darkMode }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const cardBg = darkMode ? "bg-[#1e293b]" : "bg-gray-100";

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % achievements.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 6000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section
      id="achievements"
      className={`w-full py-20 px-6 md:px-20 ${bgColor} ${textColor}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        🎖️ Achievements
      </h2>

      <div className="relative w-full max-w-2xl h-[240px] mx-auto overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={achievements[index].title}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={`w-full h-full rounded-xl shadow-lg p-6 relative ${cardBg}`}
          >
            <h3 className="text-xl font-semibold mb-2">{achievements[index].title}</h3>
            <p className="text-sm opacity-80 mb-2">{achievements[index].description}</p>
            <span className="text-xs opacity-60">{achievements[index].year}</span>

            {/* Arrows inside card, bottom left and right */}
            <div className="absolute bottom-4 left-4">
              <button
                onClick={handlePrev}
                className="text-2xl text-blue-400 hover:text-blue-600 transition"
              >
                <IoIosArrowBack />
              </button>
            </div>
            <div className="absolute bottom-4 right-4">
              <button
                onClick={handleNext}
                className="text-2xl text-blue-400 hover:text-blue-600 transition"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
