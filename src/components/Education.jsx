// src/components/Education.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Education({ darkMode }) {
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const cardBg = darkMode ? "from-gray-800 to-gray-900" : "from-white to-gray-100";
  const borderGradient = darkMode
    ? "border-gradient-to-r from-white/20 to-blue-400"
    : "border-gradient-to-r from-black/20 to-blue-600";

  const eduDetails = [
    {
      id: 1,
      title: "12th Grade",
      institution: "Kalyani Matric Hr Sec School, Sakkudi, Madurai",
      year: "Completed in 2023",
      result: "91.8%",
    },
    {
      id: 2,
      title: "Bachelor's in Computer Science & Engineering",
      institution: "Thiagarajar College of Engineering",
      year: "2023 – 2027 (Present)",
      result: "CGPA: 8.40*",
    },
  ];

  return (
    <section id="education" className={`py-20 px-6 md:px-20 transition-all duration-500 ${bgColor}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white-500">🎓 Education</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {eduDetails.map((edu, index) => (
          <Tilt
            key={edu.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareColor={darkMode ? "#ffffff20" : "#00000020"}
            glarePosition="bottom"
            className="rounded-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`p-6 border-2 ${borderGradient} rounded-xl bg-gradient-to-br ${cardBg} shadow-lg transition-all duration-300`}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
              <p className={`font-medium ${textColor}`}>{edu.institution}</p>
              <p className="text-sm text-blue-400 mt-1 italic">{edu.year}</p>
              <p className="mt-2 font-bold text-gray-500">{edu.result}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
