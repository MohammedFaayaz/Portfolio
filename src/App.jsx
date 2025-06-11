// src/App.jsx
import React, { useState } from "react";
import "./App.css";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className={`${bgColor} ${textColor} transition-colors duration-500`}>
          {/* Navbar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Components */}
          <div id="home">
            <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div id="about">
            <About darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div id="projects">
            <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div id="achievements">
            <Achievements darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div id="contact">
            <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      )}
    </>
  );
}
