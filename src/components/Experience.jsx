// src/components/Experience.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaRobot, FaUniversity, FaTools } from "react-icons/fa";
import StarfieldBackground from "./StarfieldBackground";

export default function Experience({ darkMode }) {
  const textColor = darkMode ? "text-white" : "text-black";
  const subText = darkMode ? "text-gray-300" : "text-gray-600";
  const bgColor = darkMode ? "bg-black" : "bg-white";

  const experiences = [
    {
      id: 1,
      title: "App Development Intern",
      company: "Maho Jase IT",
      date: "July 4 – July 26, 2024",
      description: "Completed a Flutter internship. Developed a camera app integrating UI/UX with Flutter capabilities.",
      icon: <FaBriefcase />,
    },
    {
      id: 2,
      title: "AI/ML Intern",
      company: "Meghnar Technologies",
      date: "June 2 – Present",
      description: "Working on real-time AI/ML models, applying ML algorithms, optimizing performance, and data analysis.",
      icon: <FaRobot />,
    },
    /*{
      id: 3,
      title: "Research Intern",
      company: "IIT",
      date: "May 2024 – June 2024",
      description: "Research internship in AI. Worked on vision-based automation projects involving deep learning.",
      icon: <FaUniversity />,
    },
    {
      id: 4,
      title: "Tech Intern",
      company: "Caterpillar",
      date: "April 2024 – May 2024",
      description: "Gained exposure to IoT systems and telemetry data collection. Built monitoring dashboards.",
      icon: <FaTools />,
    },*/
  ];

  const refs = experiences.map(() => useInView({ threshold: 0.5 }));

  return (
    <section
      id="experience"
      className={`relative w-full py-20 px-6 md:px-20 transition-colors duration-500 ${bgColor} ${textColor}`}
    >
        
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">🕓 Experience </h2>

      <div className="w-full relative border-l-4 border-blue-500 pl-6 space-y-24">
        {experiences.map((exp, index) => {
          const [ref, inView] = refs[index];

          return (
            <motion.div
              key={exp.id}
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-10"
            >
              <div className="absolute -left-6 top-1 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shadow-lg">
                {exp.icon}
              </div>

              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-md font-medium text-gray-500">{exp.company}</p>
              <p className="text-sm italic mb-2">{exp.date}</p>
              <p className={`text-base leading-relaxed ${subText}`}>{exp.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
