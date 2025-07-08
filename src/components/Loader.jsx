import { Html, useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        pointerEvents: 'auto',
      }}
    >
      {/* Animated aurora/gradient background */}
      <div className="absolute inset-0 w-full h-full animate-gradient bg-gradient-to-br from-[#23243a] via-[#ffb86c] to-[#ff5e13] z-0" style={{filter:'blur(2.5px)', opacity:0.98, animationDuration:'4s'}} />
      {/* Animated floating aurora particles */}
      <ParticlesBackground numParticles={24} particleSize={[5,12]} speed={0.09} />
      {/* Loader content */}
      <AnimatePresence>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="loader-shimmer mb-3 text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-white" style={{letterSpacing:'0.15em', textShadow:'0 4px 24px #ff9900cc, 0 1.5px 6px #ffb86c99'}}>Loading…</span>
          <motion.div
            className="blob-loader"
            animate={{ scale: [1, 1.09, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="glow-ring"></div>
          </motion.div>
          <p
            style={{
              fontSize: 14,
              color: "#F1F1F1",
              fontWeight: 800,
              marginTop: 40,
              letterSpacing: '0.1em',
              textShadow: '0 2px 16px #ff990099',
            }}
          >
            {progress.toFixed(2)}%
          </p>
        </motion.div>
      </AnimatePresence>
    </Html>
  );
};

export default CanvasLoader;
