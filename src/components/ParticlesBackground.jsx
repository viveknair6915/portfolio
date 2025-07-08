import React, { useEffect, useRef } from "react";

// A simple animated particles canvas background (not heavy on performance)
const auroraPalette = [
  'rgba(255,184,108,0.44)', // orange
  'rgba(255,153,0,0.42)',   // orange bold
  'rgba(165,143,255,0.38)', // purple
  'rgba(139,233,253,0.32)', // cyan
  'rgba(255,89,198,0.36)',  // pink
];

const ParticlesBackground = ({ numParticles = 12, colorPalette = auroraPalette, particleSize = [1.5, 3], speed = 0.13 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: particleSize[0] + Math.random() * (particleSize[1] - particleSize[0]),
      dx: (Math.random() - 0.5) * speed,
      dy: (Math.random() - 0.5) * speed,
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)]
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
      }
    }
    function update() {
      for (let p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
    }
    function animate() {
      draw();
      update();
      requestAnimationFrame(animate);
    }
    animate();
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        willChange: "transform"
      }}
    />
  );
};

export default ParticlesBackground;
