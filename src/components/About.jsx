import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <ParallaxTilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full service-card-animated p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </ParallaxTilt>
);

const aboutVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.5 } }
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-100 text-[17px] max-w-3xl leading-[30px]'
      >
        Aspiring Full‑Stack & Machine Learning Engineer with a passion for scalable systems and AI. I architect robust web apps, optimize algorithms, and thrive on creative problem-solving and teamwork. Adaptable and detail-oriented, I enjoy building impactful solutions and growing with every project.
      </motion.p>

      {/* Resume preview and download button blended with overview */}
      <div className="mt-8 w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 px-2 sm:px-0">
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center mb-4 md:mb-0">
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Resume Preview"
            className="rounded-lg shadow-lg border border-gray-700 bg-white"
            style={{ width: "100%", maxWidth: 220, height: 300 }}
            allowFullScreen
          >
            <p className="text-gray-500 text-center mt-4">Your browser does not support PDF preview.</p>
          </iframe>
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <p className="text-secondary text-[15px] sm:text-[16px] mb-2 text-center md:text-left">
            Download my resume for a summary of my experience, education, and key skills.
          </p>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a58fff] via-[#ffb86c] to-[#8be9fd] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[#a58fff77] text-[15px] sm:text-[16px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 112 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 115.707 8.293L8 10.586V2z"/><path d="M3 16a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z"/></svg>
            Download Resume (PDF)
          </a>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
