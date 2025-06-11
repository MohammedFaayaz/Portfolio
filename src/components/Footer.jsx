import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const hoverColor = darkMode ? "hover:text-gray-300" : "hover:text-gray-600";

  return (
    <footer className={`w-full py-6 px-4 md:px-20 border-t ${bgColor} ${textColor}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Stark. All rights reserved.</p>

        <div className="flex gap-4 text-lg">
          <a
             href="https://www.linkedin.com/in/mohammed-fayaz-6a371628b/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverColor} transition`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MohammedFaayaz"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverColor} transition`}
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverColor} transition`}
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:fayaz96607@gmail.com"
            className={`${hoverColor} transition`}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
