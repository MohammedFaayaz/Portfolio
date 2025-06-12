// src/components/Service.jsx
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaLaptopCode, FaServer, FaPlug } from "react-icons/fa";

export default function Service({ darkMode }) {
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const cardBg = darkMode ? "bg-gray-800" : "bg-gray-100";
  const btnStyle = darkMode
    ? "bg-white-600 hover:bg-blue-500 text-white"
    : "bg-white-500 hover:bg-blue-600 text-white";
  const borderStyle = darkMode
    ? "border border-gray-700"
    : "border border-gray-200";

  const services = [
    {
      id: 1,
      title: "Frontend Website Development",
      icon: <FaLaptopCode />,
      description:
        "Creating responsive websites using HTML, CSS, JS or React. Multipage or single-page mobile-first layouts included.",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      icon: <FaServer />,
      description:
        "Full stack applications using MongoDB, Express, React, and Node.js. High performance, secure, and beautifully designed.",
    },
    {
      id: 3,
      title: "API Integration Services",
      icon: <FaPlug />,
      description:
        "Integrating modern REST or third-party APIs into your apps using best practices with real-time capabilities.",
    },
  ];

  return (
    <section id="services" className={`py-20 px-6 md:px-20 ${bgColor} transition-all duration-500`}>
     <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-black"}`}>
  🧰 My Services
</h2>

      <div className="flex flex-col gap-10">
        {services.map((service, index) => (
          <Tilt
            key={service.id}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={false}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`p-6 rounded-xl ${cardBg} ${borderStyle} shadow-md hover:shadow-xl transition duration-300`}
            >
              <div className="text-3xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{service.title}</h3>
              <p className={`text-sm mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-black-700"}`}>
                {service.description}
              </p>
              <a href="#contact">
                <button
                  className={`px-4 py-2 rounded-full font-medium ${btnStyle} transition duration-300`}
                >
                  More Info 
                </button>
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
