import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar } from "./components";
import React, { Suspense, useState, useEffect } from "react";
const About = React.lazy(() => import("./components/About"));
const Experience = React.lazy(() => import("./components/Experience"));
const Tech = React.lazy(() => import("./components/Tech"));
const Works = React.lazy(() => import("./components/Works"));
const Highlights = React.lazy(() => import("./components/Highlights"));
const Contact = React.lazy(() => import("./components/Contact"));
const StarsCanvas = React.lazy(() => import("./components/canvas/Stars"));
import AuroraSpinner from "./components/AuroraSpinner";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import ParticlesBackground from "./components/ParticlesBackground";
import StepLine from "./components/StepLine";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        {/* Aurora Particles Background */}
        <ParticlesBackground numParticles={12} colorPalette={["#ffb86c","#ff79c6","#8be9fd","#50fa7b","#bd93f9"]} particleSize={[2,4]} speed={0.13} />
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Glassmorphic Card with Aurora Glow */}
          <div
            className="relative z-10 flex flex-col items-center justify-center px-8 py-10 min-w-[320px] max-w-[90vw] rounded-3xl border border-white/10 shadow-2xl"
            style={{
              background: "rgba(30, 24, 56, 0.82)",
              boxShadow: "0 8px 40px 0 #8be9fd33, 0 0 64px 0 #ffb86c22",
              backdropFilter: "blur(22px) saturate(170%)",
              WebkitBackdropFilter: "blur(22px) saturate(170%)"
            }}
            aria-label="Waking up the codebase loading screen"
          >
            {/* Logo or SVG */}
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="mb-4 animate-fade-in" aria-hidden="true">
              <defs>
                <radialGradient id="auroraLogo" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#ffb86c"/>
                  <stop offset="60%" stopColor="#8be9fd"/>
                  <stop offset="100%" stopColor="#bd93f9"/>
                </radialGradient>
              </defs>
              <circle cx="27" cy="27" r="25" fill="url(#auroraLogo)" opacity="0.16"/>
              <path d="M18 34L27 16L36 34" stroke="#ffb86c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="27" cy="29" r="2.5" fill="#8be9fd"/>
            </svg>
            {/* Animated Gradient Headline with Typewriter Dots */}
            <div className="mb-6 text-3xl md:text-4xl font-black font-mono bg-gradient-to-r from-[#ffb86c] via-[#ff79c6] to-[#8be9fd] bg-clip-text text-transparent animate-gradient">
              Waking up the <span className="text-[#ffb86c]">codebase</span>
              <span className="inline-block animate-blink ml-1">...</span>
            </div>
            {/* Animated Steps */}
            <div className="w-full max-w-xs mb-6 flex flex-col gap-2">
              <StepLine icon="$" text="npm install --workspace" color="#ffb86c" delay={0} />
              <StepLine icon=">" text="Deploying virtual workspace..." color="#8be9fd" delay={0.22} />
              <StepLine icon="✔" text="3D assets loaded" color="#50fa7b" delay={0.44} complete />
            </div>
            {/* Neon Aurora Spinner */}
            <div className="mb-4">
              <AuroraSpinner />
            </div>
            {/* Status Text */}
            <div className="text-xs text-gray-300 font-mono tracking-widest mt-2">
              <span className="text-[#bd93f9]">system:</span> <span className="text-[#ffb86c]">Initializing</span> <span className="text-[#8be9fd]">developer portal</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <ParticlesBackground />
        <ProgressBar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<AuroraSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<AuroraSpinner />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<AuroraSpinner />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<AuroraSpinner />}>
          <Works />
        </Suspense>
        <Suspense fallback={<AuroraSpinner />}>
          <Highlights />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<AuroraSpinner />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<AuroraSpinner />}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
