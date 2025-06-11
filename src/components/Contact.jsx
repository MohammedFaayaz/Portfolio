import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const inputBg = darkMode ? "bg-[#1e1e1e] text-white" : "bg-gray-100 text-black";
  const borderColor = darkMode ? "border-white" : "border-black";

  return (
    <section
      id="contact"
      className={`w-full min-h-screen px-6 py-20 md:px-20 transition-colors duration-500 ${bgColor} ${textColor}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">📬 Contact Me</h2>

      <div className="max-w-3xl mx-auto">
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className={`p-3 rounded-lg border ${inputBg} ${borderColor} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className={`p-3 rounded-lg border ${inputBg} ${borderColor} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Type your message..."
              className={`p-3 rounded-lg border ${inputBg} ${borderColor} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-black-600 text-white rounded-lg font-semibold hover:bg-black-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons at Bottom */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.linkedin.com/in/mohammed-fayaz-6a371628b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MohammedFaayaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:fayaz96607@gmail.com"
            className="text-2xl hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
