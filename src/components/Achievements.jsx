// src/components/Achievements.jsx
import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "🏆 Hackz '24 Finalist – CEG Chennai",
    description: "Built SHEcosystem, a platform to support women entrepreneurs with mentorship and funding opportunities.",
    year: "2024",
  },
  {
    title: "🚀 Hackodyssey '25 Participant – KLU",
    description: "Developed a full-stack AI-based KYC + Blockchain solution with deepfake detection.",
    year: "2025",
  },
  {
    title: "🎓 Co-Creator IBM Course Completion",
    description: "Completed IBM's Enterprise Design Thinking and Research Planning certification program.",
    year: "2024",
  },
  {
    title: "📜 Presented Paper on AI App Success Prediction",
    description: "Delivered a conference talk on machine learning ensemble models to classify app success probability.",
    year: "2025",
  },
];

export default function Achievements({ darkMode }) {
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const cardBg = darkMode ? "bg-[#1e293b]" : "bg-gray-100";

  return (
    <section id="achievements" className={`w-full py-20 px-6 md:px-20 ${bgColor} ${textColor}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">🎖️ Achievements</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-xl shadow-md p-6 ${cardBg}`}
          >
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm opacity-80 mb-2">{item.description}</p>
            <span className="text-xs opacity-60">{item.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
