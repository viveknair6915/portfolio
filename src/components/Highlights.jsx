import React from "react";
import { motion } from "framer-motion";

const highlightVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const highlightsVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.5 } }
};

const Highlights = () => (
  <motion.section
    id="highlights"
    variants={highlightsVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  className="w-full max-w-4xl mx-auto my-16 p-8 rounded-3xl relative overflow-hidden group highlights-morph"
  style={{
    background: 'rgba(34, 36, 58, 0.85)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '2px solid',
    borderImage: 'linear-gradient(120deg,#a58fff,#ffb86c,#8be9fd,#f1fa8c) 1',
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)'
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'scale(1.025)';
    e.currentTarget.style.boxShadow = '0 12px 48px 0 rgba(165,143,255,0.25), 0 2px 8px 0 rgba(255,184,108,0.12)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
  }}
>
  {/* Animated Orbs */}
  <div className="absolute top-[-60px] left-[20%] w-40 h-40 bg-gradient-to-br from-[#a58fff]/70 to-[#8be9fd]/60 rounded-full blur-3xl animate-pulse-slow z-0" />
  <div className="absolute bottom-[-50px] right-[10%] w-32 h-32 bg-gradient-to-tr from-[#ffb86c]/70 to-[#f1fa8c]/60 rounded-full blur-2xl animate-pulse-fast z-0" />
  <div className="absolute top-[50%] left-[-40px] w-24 h-24 bg-gradient-to-br from-[#ffb86c]/40 to-[#a58fff]/30 rounded-full blur-2xl animate-float z-0" />

    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={highlightVariants}
      className="text-3xl sm:text-4xl font-extrabold text-[#a58fff] mb-6 tracking-tight drop-shadow-lg"
    >
      Highlights
    </motion.h2>
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={highlightVariants}
      className="space-y-6 text-base sm:text-lg text-gray-200"
    >
      <li>
        <span className="font-bold text-[#ffb86c]">Achievements:</span> OSDC Codejam V4 Runner-Up (Jan 2024); Hack Genesis’24 Hackathon – Top-10 Finalist (Apr 2024); Solved 500+ problems on Leetcode
      </li>
      <li>
        <span className="font-bold text-[#8be9fd]">Positions:</span> TNP Coordinator, Jaypee Institute of Information Technology (Aug 2024 – May 2025); Treasurer, LDL - Light De Literacy (Jul 2024 – Present)
      </li>
      <li>
        <span className="font-bold text-[#f1fa8c]">Interests:</span> Lawn Tennis, Chess, Anchoring, Event Management
      </li>
    </motion.ul>
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#a58fff]/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#ffb86c]/20 rounded-full blur-2xl pointer-events-none" />
  </motion.section>
);

export default Highlights;
