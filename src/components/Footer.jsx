import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-primary text-gray-200 py-6 flex flex-col items-center gap-3 mt-10">
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[18px] sm:text-[20px] w-full">
      <a href="mailto:viveknair6915@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
        <FaEnvelope className="inline mr-2 text-[#915EFF]" />
      </a>
      <a href="tel:+919328406968" target="_blank" rel="noopener noreferrer" title="Phone">
        <FaPhone className="inline mr-2 text-[#915EFF]" style={{ transform: 'scaleX(-1)' }} />
      </a>
      <a href="https://linkedin.com/in/vivek-nair-5073b2251" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FaLinkedin className="inline mr-2 text-[#915EFF]" />
      </a>
      <a href="https://github.com/viveknair6915" target="_blank" rel="noopener noreferrer" title="GitHub" className="footer-icon">
        <FaGithub className="inline mr-2 text-[#915EFF]" />
      </a>
    </div>
    <div className="text-xs mt-2 text-gray-400">&copy; {new Date().getFullYear()} Vivek V. Nair. All rights reserved.</div>
  </footer>
);

export default Footer;
