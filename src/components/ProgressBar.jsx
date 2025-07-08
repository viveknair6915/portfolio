import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScroll(docHeight > 0 ? (scrolled / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-glow"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
