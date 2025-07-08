import React from "react";

const AuroraSpinner = () => (
  <div
    className="relative w-14 h-14 flex items-center justify-center"
    aria-label="Loading spinner"
    role="status"
  >
    {/* Neon aurora ring */}
    <svg
      className="absolute animate-spin-slow"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      style={{ filter: "drop-shadow(0 0 16px #ffb86c88) drop-shadow(0 0 24px #8be9fd55)" }}
    >
      <defs>
        <linearGradient id="auroraSpin" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffb86c" />
          <stop offset="0.45" stopColor="#ff79c6" />
          <stop offset="0.7" stopColor="#8be9fd" />
          <stop offset="1" stopColor="#50fa7b" />
        </linearGradient>
      </defs>
      <circle
        cx="28"
        cy="28"
        r="22"
        stroke="url(#auroraSpin)"
        strokeWidth="6"
        strokeDasharray="110 44"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
    {/* Center glow dot */}
    <span className="block w-4 h-4 rounded-full bg-[#ffb86c] opacity-70 animate-pulse" style={{boxShadow:'0 0 18px 8px #ffb86c66, 0 0 40px 2px #8be9fd33'}} />
  </div>
);

export default AuroraSpinner;
