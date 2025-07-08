import React from "react";
import { motion } from "framer-motion";

const StepLine = ({ icon, text, color, delay = 0, complete = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.44, type: "spring", stiffness: 60 }}
    className={`font-mono text-xs flex items-center gap-2 px-4 py-2 rounded-md shadow-inner bg-[#23243a]/70 ${complete ? "ring-2 ring-[#50fa7b]/40" : ""}`}
    aria-label={text}
  >
    <span
      className="inline-block text-lg font-bold"
      style={{ color: color || "#bd93f9", textShadow: complete ? `0 0 6px #50fa7b88` : `0 0 6px ${color || "#bd93f9"}55` }}
      aria-hidden="true"
    >
      {icon}
    </span>
    <span className={complete ? "font-semibold text-[#50fa7b]" : ""}>{text}</span>
    {complete && (
      <span className="ml-auto animate-pulse text-[#50fa7b] font-bold">●</span>
    )}
  </motion.div>
);

export default StepLine;
