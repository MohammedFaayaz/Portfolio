import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const categories = ["All", "Frontend", "Backend", "IoT", "AI/ML"];

const projectData = [
  {
    title: "Nisha Fashion",
    desc: "My first frontend project using HTML, CSS, and JavaScript. A simple fashion website.",
    link: "https://github.com/MohammedFaayaz/Nishafashion_website",
    type: "Frontend",
  },
  {
    title: "Alumni Networking Portal",
    desc: "Bootstrap + JS portal for alumni connection, admin panel, events, and mentorship.",
    link: "https://github.com/MohammedFaayaz/Alumni_Networking",
    type: "Frontend",
  },
  {
    title: "SHEcosystem",
    desc: "Hackathon project to empower women through mentorship and funding access.",
    link: "https://github.com/MohammedFaayaz/SHEcosystem",
    type: "Frontend",
  },
  { title: "MERNPad", desc: "A backend-focused MERN project for note-making, built as part of a study project to strengthen skills in API development, and MongoDB integration.", link: "https://github.com/MohammedFaayaz/MERNPad", type: "Backend", },
{
  title: "ArcChat",
  desc: "A real-time chat application built with the MERN stack  and Socket.IO.",
  link: "https://github.com/MohammedFaayaz/ArcChat",
  type: "Backend"
},
  
  {
    title: "Soil Texture Analysis",
    desc: "IoT + ML based analysis using sensors and OpenCV for smart agriculture.",
    link: "https://lnkd.in/gEthr_nx",
    type: "IoT",
  },
  {
    title: "VeriFi – AI KYC with Blockchain",
    desc: "Decentralized KYC system with liveness detection and fraud prevention.",
    link: "#",
    type: "AI/ML",
  },
  {
    title: "Learn-a-Thon Project",
    desc: "Full-fledged React site built after Learn-a-Thon. Reusable components & hooks.",
    link: "https://github.com/MohammedFaayaz/Learn-a-thon",
    type: "Frontend",
  },
  {
    title: "Sound Sensor Monitoring",
    desc: "Raspberry Pi + Python-based system for detecting anomalies in environments.",
    link: "#",
    type: "IoT",
  },
];

export default function Projects({ darkMode }) {
  const [selectedTab, setSelectedTab] = useState("All");

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const cardBg = darkMode ? "bg-[#1e293b]" : "bg-gray-100";

  const filteredProjects =
    selectedTab === "All"
      ? projectData
      : projectData.filter((p) => p.type === selectedTab);

  return (
    <section
      id="projects"
      className={`w-full py-20 px-6 md:px-20 ${bgColor} ${textColor}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">🚀 My Projects</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedTab(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedTab === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-400 text-gray-600 hover:bg-blue-100"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className={`rounded-xl shadow-lg p-6 ${cardBg} flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm opacity-80 mb-4">{project.desc}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 transition mt-auto"
            >
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
