import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => (
  <section className="w-full flex flex-col items-center my-12">
    <h2 className="text-2xl font-bold mb-4 text-white">Download My Resume</h2>
    <div className="w-full flex justify-center mb-4">
      <iframe
        src="/resume.pdf"
        title="Resume Preview"
        className="rounded-lg shadow-lg border border-gray-700"
        style={{ width: "100%", maxWidth: 350, height: 220 }}
      />
    </div>
    <p className="text-secondary mb-4 max-w-xl text-center">
      My resume summarizes my experience in full-stack web development, machine learning, and software engineering, as well as my education, skills, and major projects.
    </p>
    <a
      href="/resume.pdf"
      download
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a58fff] via-[#ffb86c] to-[#8be9fd] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#a58fff77]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaDownload className="text-xl" />
      Download Resume (PDF)
    </a>
  </section>
);

export default ResumeDownload;
