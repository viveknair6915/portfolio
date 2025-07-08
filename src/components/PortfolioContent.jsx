import React from "react";

const PortfolioContent = () => (
  <section className="max-w-4xl mx-auto px-4 py-12 text-gray-100">
    {/* Header */}
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-2">Vivek V. Nair</h1>
      <h2 className="text-xl font-semibold mb-1">Full‑Stack Developer & Machine Learning Enthusiast</h2>
      <p className="text-gray-300 italic">Building scalable web apps by day, training parallelized chess engines by night.</p>
    </header>

    {/* About Me */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">About Me</h3>
      <p className="mb-2">Aspiring developer with a strong background in full-stack engineering and machine learning. I thrive on architecting robust web applications and building intelligent systems that solve real-world problems.</p>
      <p className="mb-2">Detail-oriented and adaptable, I enjoy collaborating across diverse teams, learning new technologies rapidly, and delivering impactful solutions with creativity and precision.</p>
    </section>

    {/* Contact */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Contact</h3>
      <ul className="list-none space-y-1">
        <li><strong>Email:</strong> viveknair6915@gmail.com</li>
        <li><strong>Phone:</strong> +91 93284 06968</li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/vivek-nair-5073b2251" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">linkedin.com/in/vivek-nair-5073b2251</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/viveknair6915" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">github.com/viveknair6915</a></li>
      </ul>
    </section>

    {/* Education */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Education</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>B.Tech (CSE)</strong>, Jaypee Institute of Information Technology (2022–2026)<br /><span className="text-gray-400">Pursuing Computer Science & Engineering, focused on AI, ML, and scalable systems.</span></li>
        <li><strong>XII</strong>, Fiitjee Junior College<br /><span className="text-gray-400">Science stream with distinction.</span></li>
        <li><strong>X</strong>, Essar International School<br /><span className="text-gray-400">Graduated with honors.</span></li>
      </ul>
    </section>

    {/* Experience */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Experience</h3>
      <div className="mb-4">
        <strong>Machine Learning Intern</strong>, Infosys — <span className="italic">(Feb 2025 – Apr 2025)</span>
        <ul className="list-disc ml-8">
          <li>Built a YOLO-based object detection model with comprehensive EDA on the COCO2017 dataset and robust preprocessing.</li>
          <li>Trained and fine-tuned YOLO, delivering a production-ready app using Streamlit.</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong>Machine Learning Intern</strong>, Jaypee Institute of Information Technology — Noida <span className="italic">(Jun 2024 – Jul 2024)</span>
        <ul className="list-disc ml-8">
          <li>Developed a system to convert videos and PowerPoint presentations into concise text summaries using supervised and unsupervised learning.</li>
          <li>Applied large language models to automate and enhance text summarization workflows.</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong>Kribhco Web Developer Intern</strong> — <span className="italic">(Jun 2025 – Present)</span>
        <ul className="list-disc ml-8">
          <li>Developed Laravel/MySQL modules for KRES, serving 500+ users.</li>
          <li>Built CMIS for 1,000+ contractors, integrating 5 compliance workflows.</li>
          <li>Automated CI/CD with Azure DevOps for zero-downtime deployments.</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong>HPC & Deep Learning Intern</strong>, Jaypee Institute of Information Technology — <span className="italic">(Jun 2025 – Present)</span>
        <ul className="list-disc ml-8">
          <li>Built a sequential & OpenMP chess engine achieving 35% speedup.</li>
          <li>Designed benchmarking tools and visualized results with Python/Matplotlib.</li>
        </ul>
      </div>
    </section>

    {/* Projects */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Projects</h3>
      <div className="mb-4">
        <strong>Rhythmic-Realm</strong> (MERN, Redis, Socket.IO)
        <ul className="list-disc ml-8">
          <li>Music-collaboration platform with real-time chat and private rooms.</li>
          <li>Scaled to 200+ concurrent users using Redis pub/sub for messaging.</li>
        </ul>
        <span className="italic">Source Code: <a href="https://github.com/viveknair6915/Rhytmic-Realm" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">github.com/viveknair6915/Rhytmic-Realm</a></span>
      </div>
      <div className="mb-4">
        <strong>YOLO-Object-Detection-App</strong> (Python, NumPy, OpenCV, PyTorch, Matplotlib, Ultralytics YOLO)
        <ul className="list-disc ml-8">
          <li>Real-time object detection app using YOLO and Streamlit.</li>
          <li>Recognizes objects from images, videos, and webcam feeds.</li>
        </ul>
        <span className="italic">Source Code: <a href="https://github.com/viveknair6915/YOLO-Object-Detection-App" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">github.com/viveknair6915/YOLO-Object-Detection-App</a></span>
      </div>
      <div className="mb-4">
        <strong>DengueScope</strong> (Python, Pandas, Plotly, Express, TFT, TCN, CatBoost, LSTM)
        <ul className="list-disc ml-8">
          <li>Predicts dengue outbreaks using multi-source geospatial and social data.</li>
          <li>Uses an ensemble of CatBoost, LSTM, TCN, and TFT models.</li>
        </ul>
        <span className="italic">Source Code: <a href="https://github.com/viveknair6915/DengueScope" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">github.com/viveknair6915/DengueScope</a></span>
      </div>
      <div className="mb-4">
        <strong>Video Summarization System</strong> (Python, Streamlit, Whisper, Llama, Haystack)
        <ul className="list-disc ml-8">
          <li>Summarizes video and PPT content using transcription and LLMs.</li>
          <li>Web interface for user uploads and summaries.</li>
        </ul>
        <span className="italic">Source Code: <span className="underline">Add GitHub link</span></span>
      </div>
      <div className="mb-4">
        <strong>DocFinder-Pro</strong> (React, Node.js, Express, MongoDB, Redux Toolkit)
        <ul className="list-disc ml-8">
          <li>Healthcare platform to browse doctors, manage profiles, and book appointments.</li>
          <li>Integrated notifications and Redux Toolkit for state management.</li>
        </ul>
        <span className="italic">Source Code: <span className="underline">Add GitHub link</span></span>
      </div>
      <div className="mb-4">
        <strong>IdeaNest</strong> (React, Node.js, MongoDB, JWT)
        <ul className="list-disc ml-8">
          <li>Connects innovators and investors with secure role-based access.</li>
          <li>Real-time notifications and user profiles.</li>
        </ul>
        <span className="italic">Source Code: <a href="https://github.com/viveknair6915/IdeaNest" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">github.com/viveknair6915/IdeaNest</a></span>
      </div>
    </section>

    {/* Technical Skills */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Technical Skills</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Languages:</strong> C, C++, Python, JavaScript, PHP, SQL, HTML, CSS</li>
        <li><strong>Libraries:</strong> OpenCV, NumPy, Pandas, Plotly, Scikit-learn, Ultralytics, React, Socket.io</li>
        <li><strong>Frameworks:</strong> Express.js, Flask, Tailwind, Bootstrap</li>
        <li><strong>Web Dev Tools:</strong> Git, Npm, MySQL, Firebase, VS Code</li>
        <li><strong>Relevant Coursework:</strong> Machine Learning, NLP, Web Development</li>
      </ul>
    </section>

    {/* Positions of Responsibility */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Positions of Responsibility</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>TNP Coordinator</strong>, Jaypee Institute of Information Technology (Aug 2024 – May 2025)</li>
        <li><strong>Treasurer</strong>, LDL - Light De Literacy (Jul 2024 – Present)</li>
      </ul>
    </section>

    {/* Achievements */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Achievements</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>OSDC Codejam V4 Runner-Up (Jan 2024)</li>
        <li>Hack Genesis’24 Hackathon – Top-10 Finalist (Apr 2024)</li>
        <li>Solved 500+ problems on Leetcode</li>
      </ul>
    </section>

    {/* Interests */}
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-2">Interests</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Lawn Tennis</li>
        <li>Chess</li>
        <li>Anchoring</li>
        <li>Event Management</li>
      </ul>
    </section>
  </section>
);

export default PortfolioContent;
