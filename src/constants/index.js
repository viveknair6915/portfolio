import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  chess,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full‑Stack Engineer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "HPC & Deep Learning Intern",
    icon: creator,
  },
  {
    title: "Web Developer Intern",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Infosys",
    icon: web,
    iconBg: "#383E56",
    date: "Feb 2025 – Apr 2025",
    points: [
      "Built a YOLO-based object detection model with comprehensive EDA on the COCO2017 dataset and robust preprocessing.",
      "Trained and fine-tuned YOLO, delivering a production-ready app using Streamlit.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Jaypee Institute of Information Technology",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jun 2024 – Jul 2024",
    points: [
      "Developed a system to convert videos and PowerPoint presentations into concise text summaries using supervised and unsupervised learning.",
      "Applied large language models to automate and enhance text summarization workflows.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Kribhco",
    icon: creator,
    iconBg: "#383E56",
    date: "Jun 2025 – Present",
    points: [
      "Developed Laravel/MySQL modules for KRES, serving 500+ users.",
      "Built CMIS for 1,000+ contractors, integrating 5 compliance workflows.",
      "Automated CI/CD with Azure DevOps for zero-downtime deployments.",
    ],
  },
  {
    title: "HPC & Deep Learning Intern",
    company_name: "Jaypee Institute of Information Technology",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jun 2025 – Present",
    points: [
      "Built a sequential & OpenMP chess engine achieving 35% speedup.",
      "Designed benchmarking tools and visualized results with Python/Matplotlib.",
    ],
  },
];

const projects = [
  {
    name: "Rhythmic-Realm",
    description:
      "Music-collaboration platform with real-time chat and private rooms. Scaled to 200+ concurrent users, Redis pub/sub for messaging.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Redis", color: "green-text-gradient" },
      { name: "Socket.IO", color: "pink-text-gradient" },
    ],
    image: carrent, // Replace with a relevant image asset if available
    source_code_link: "https://github.com/viveknair6915/Rhytmic-Realm",
    demo_link: "", // Add demo link if available
  },
  {
    name: "YOLO-Object-Detection-App",
    description:
      "Real-time object detection app using YOLO and Streamlit. Recognizes objects from images, videos, and webcam feeds.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NumPy", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
      { name: "PyTorch", color: "yellow-text-gradient" },
      { name: "Matplotlib", color: "purple-text-gradient" },
      { name: "Ultralytics YOLO", color: "red-text-gradient" },
    ],
    image: jobit, // Replace with a relevant image asset if available
    source_code_link: "https://github.com/viveknair6915/YOLO-Object-Detection-App",
  },
  {
    name: "DengueScope",
    description:
      "Predicts dengue outbreaks using multi-source geospatial and social data. Uses an ensemble of CatBoost, LSTM, TCN, and TFT models.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Plotly", color: "pink-text-gradient" },
      { name: "Express", color: "yellow-text-gradient" },
      { name: "TFT", color: "purple-text-gradient" },
      { name: "TCN", color: "red-text-gradient" },
      { name: "CatBoost", color: "orange-text-gradient" },
      { name: "LSTM", color: "teal-text-gradient" },
    ],
    image: tripguide, // Replace with a relevant image asset if available
    source_code_link: "https://github.com/viveknair6915/DengueScope"
  },
  {
    name: "IdeaNest",
    description:
      "Platform matching innovators & investors with secure auth. Integrated role‑based permissions & real‑time notifications.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "JWT", color: "yellow-text-gradient" }
    ],
    image: meta, // Replace with a relevant image asset if available
    source_code_link: "https://github.com/viveknair6915/IdeaNest"
  },
  {
    name: "Chess Engine Benchmark Suite",
    description:
      "Built a sequential & OpenMP chess engine achieving 35% speedup. Designed benchmarking tools and visualized results with Python/Matplotlib.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "OpenMP", color: "pink-text-gradient" },
      { name: "Matplotlib", color: "yellow-text-gradient" }
    ],
    image: chess, // Unique chess image for this project
    source_code_link: "https://github.com/viveknair6915/Chess-Engine-Benchmark"
  }
];

export { services, technologies, experiences, projects };
