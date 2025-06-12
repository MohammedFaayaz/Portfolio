// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import profile3D from "../assets/profile3D.png";

export default function About({ darkMode }) {
  const textColor = darkMode ? "text-white" : "text-black";
  const subText = darkMode ? "text-gray-300" : "text-gray-700";
  const borderColor = darkMode ? "border-white text-white" : "border-black text-black";
  const bgColor = darkMode ? "bg-black" : "bg-white";

  return (
    <section
      id="about"
      className={`w-full py-20 px-6 md:px-20 transition-colors duration-500 ${bgColor} ${textColor}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Avatar or Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={profile3D}
            alt="Mohammed Fayaz Avatar"
            className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border-4 shadow-lg"
          />
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          <p className={`leading-relaxed ${subText}`}>
            I'm <strong>Mohammed Fayaz</strong>, a passionate <strong>Full-Stack Developer</strong> currently pursuing my Bachelor's in <strong>Computer Science and Engineering</strong> at Thiagarajar College of Engineering.
            I thrive on solving real-world problems through technology, often participating in <strong>hackathons</strong> to turn ideas into impactful solutions.
            I'm deeply interested in <strong>IoT</strong>, <strong>Artificial Intelligence</strong>, and <strong>Machine Learning</strong>, and I've also worked on projects that bridge hardware and software.
            My true love lies in crafting beautiful, responsive, and futuristic websites — especially with <strong>React</strong> and single-page architectures.
          </p>

          <p className={`leading-relaxed ${subText}`}>
            I've had the privilege of being recognized with several awards, including the <strong>First Prize in a National Hackathon</strong> and <strong>Student's Choice Award</strong> for innovative product design.
            Beyond coding, I enjoy mentoring peers, demoing tools like Flask, and constantly exploring new technologies through self-driven mini-projects.
            I believe in learning by doing — whether it’s building real-time dashboards, contributing to open source, or presenting research on AI-based predictions.
          </p>

      

          <h3 className="text-xl font-semibold mt-4">🌱 Personal Values</h3>
          <p className={`leading-relaxed ${subText}`}>
            I believe in continuous learning, ethical technology, and the power of community-driven innovation. My goal is not just to code, but to create meaningful change through software.
          </p>

          <h3 className="text-xl font-semibold mt-4">🌍 Vision</h3>
          <p className={`leading-relaxed ${subText}`}>
            To become a tech leader who designs solutions at the intersection of sustainability, inclusion, and automation — while inspiring others to do the same.
          </p>

          <h3 className="text-xl font-semibold mt-4">💬 Personal Quote</h3>
          <p className={`italic font-medium ${subText}`}>
            "Stay consistent, keep coding, and let’s build something epic! 💙"
          </p>

          <div>
            <h3 className="text-xl font-semibold mt-6">💻 Tech Stack</h3>
            <ul className={`grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 ${subText}`}>
              <li>• Python</li>
              <li>• C</li>
              <li>• Java</li>
              <li>• HTML, CSS, JavaScript</li>
              <li>• React</li>
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• Firebase</li>
              <li>• MongoDB</li>
              <li>• MySQL</li>
              <li>• VS Code</li>
            </ul>
          </div>

          <a
            href="/Fayaz_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-6 px-6 py-3 border rounded-full hover:scale-105 transition ${borderColor}`}
          >
            <FaDownload />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
