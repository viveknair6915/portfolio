import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import ParticlesBackground from "./ParticlesBackground";

const heroVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.5 } }
};

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [vivekText, setVivekText] = useState("");
  const vivekFull = "Vivek Nair";

  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;
    const onScroll = () => {
      lastScroll = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScroll(lastScroll < 10);
          setParallaxOffset(lastScroll * 0.06); // Lower multiplier for less work
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    let direction = 1; // 1: typing, -1: erasing
    let interval;
    function type() {
      setVivekText(vivekFull.slice(0, i));
      if (direction === 1) {
        if (i < vivekFull.length) {
          i++;
        } else {
          direction = -1;
          setTimeout(type, 1800); // Pause longer at full name
          return;
        }
      } else {
        if (i > 0) {
          i--;
        } else {
          direction = 1;
          setTimeout(type, 1400); // Pause longer at empty
          return;
        }
      }
      interval = setTimeout(type, 160); // Slower typing/erasing
    }
    type();
    return () => clearTimeout(interval);
  }, []);

  return (
    <motion.section
      className={`relative w-full h-screen xs:min-h-[80vh] flex items-center justify-center overflow-hidden`}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Parallax BG image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg.gif')",
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.13s cubic-bezier(.4,1.4,.6,1)',
          willChange: 'transform'
        }}
      />
      {/* Aurora-like animated particles background */}
      <ParticlesBackground />
      {/* Animated aurora/gradient waves overlay */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1440 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aurora1" x1="0" y1="0" x2="1440" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8be9fd"/>
              <stop offset="0.5" stopColor="#a58fff"/>
              <stop offset="1" stopColor="#ffb86c"/>
            </linearGradient>
          </defs>
          <path fill="url(#aurora1)" fillOpacity="0.22">
            <animate attributeName="d" dur="12s" repeatCount="indefinite"
              values="M0,400 Q360,300 720,400 T1440,400 V520 H0Z;
                      M0,420 Q360,350 720,420 T1440,410 V520 H0Z;
                      M0,400 Q360,300 720,400 T1440,400 V520 H0Z" />
          </path>
        </svg>
        <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1440 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aurora2" x1="0" y1="0" x2="1440" y2="520" gradientUnits="userSpaceOnUse">
              <stop stopColor="#50fa7b"/>
              <stop offset="0.5" stopColor="#a58fff"/>
              <stop offset="1" stopColor="#ff79c6"/>
            </linearGradient>
          </defs>
          <path fill="url(#aurora2)" fillOpacity="0.13">
            <animate attributeName="d" dur="14s" repeatCount="indefinite"
              values="M0,430 Q480,380 960,440 T1440,430 V520 H0Z;
                      M0,450 Q480,420 960,460 T1440,440 V520 H0Z;
                      M0,430 Q480,380 960,440 T1440,430 V520 H0Z" />
          </path>
        </svg>
      </div>
      {/* Minimal gradient overlay at bottom for readability */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] z-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Centered text over image with animated effects */}
      <div className="relative z-30 w-full flex flex-col items-center sm:items-start justify-start text-center sm:text-left px-2 xs:px-4 sm:pl-8 md:pl-16 lg:pl-32 h-full pt-14 xs:pt-20 sm:pt-32 md:pt-36 min-h-[320px] max-w-[100vw] max-w-3xl">
        <motion.h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 animate-gradient min-w-[180px] max-w-full"
          style={{textShadow: '0 2px 12px #ff990055, 0 1px 4px #ffb86c77'}}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 60 }}
        >
          <span className="animated-gradient-text animate-gradient bg-gradient-to-r from-[#ffb86c] via-[#ff9900] to-[#ff5e13] bg-clip-text text-transparent">Hi, I'm </span>
          <span className="inline-block font-extrabold text-[#ff9900]" style={{textShadow: '0 1.5px 6px #ffb86c99'}}>
            <span>{vivekText}</span>
            <span className="inline-block w-2 h-7 align-middle bg-[#ff9900] animate-blink ml-1" style={{verticalAlign: 'middle'}}></span>
          </span>
        </motion.h1>
        <motion.p
          className="font-semibold max-w-2xl mb-4 animated-gradient-text animate-gradient bg-gradient-to-r from-[#ffb86c] via-[#ff9900] to-[#ff5e13] bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl"
          style={{textShadow: '0 2px 16px #ff990099'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 60 }}
        >
          I craft robust web applications by day and train parallelized chess engines by night—always eager to solve real-world challenges with code.
        </motion.p>
        <motion.a
          href="#contact"
          aria-label="Contact Me"
          tabIndex={0}
          className="mt-2 sm:mt-4 px-7 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-[#ffb86c] via-[#ff9900] to-[#ff5e13] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffb86c] inline-block text-center"
          initial={{ opacity: 0, y: 28, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.7, type: 'spring', stiffness: 400, damping: 18 }}
        >
          Contact Me
        </motion.a>
      </div>

      {/* Scroll indicator */}
      {typeof window !== 'undefined' && showScroll && (
        <div className='absolute sm:bottom-10 xs:bottom-16 bottom-28 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 liquid-mouse'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      )}
    </motion.section>
  );
};

export default Hero;
