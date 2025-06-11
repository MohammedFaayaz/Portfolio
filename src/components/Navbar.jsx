// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navBg = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-md ${navBg} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Name */}
        <div
          onClick={() => scrollTo("home")}
          className="font-bold text-xl cursor-pointer"
        >
          ⚡ StarkDev
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
            <button onClick={() => scrollTo("about")} className="hover:text-blue-500 transition">About</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-blue-500 transition">Projects</button>
          <button onClick={() => scrollTo("achievements")} className="hover:text-blue-500 transition">Achievements</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-blue-500 transition">Contact</button>

          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="text-xl hover:text-yellow-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={handleToggle} className="mr-4 text-xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-4 space-y-3 font-medium ${textColor} ${navBg}`}>

          <button onClick={() => scrollTo("about")} className="block w-full text-left">About</button>
          <button onClick={() => scrollTo("projects")} className="block w-full text-left">Projects</button>
          <button onClick={() => scrollTo("achievements")} className="block w-full text-left">Achievements</button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left">Contact</button>
        </div>
      )}
    </nav>
  );
}
