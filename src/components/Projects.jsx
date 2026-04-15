import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const ACTUAL_PROJECTS = [
  {
    id: 1,
    title: "Rail Madad Grievance System",
    description: "An advanced platform addressing railway passenger grievances in real-time, streamlining the complaint resolution process.",
    tags: ["React", "Express", "Node.js"],
    github: "https://github.com/pandureddymannuru/Rail-Madad-Grievance-System",
    impact: "Real-time complaint flow and transparent issue tracking"
  },
  {
    id: 2,
    title: "Fake News Detector",
    description: "A machine learning pipeline designed to parse truth from fiction, utilizing NLP models to detect deceptive online narratives.",
    tags: ["Python", "Machine Learning", "NLP", "Flask"],
    github: "https://github.com/pandureddymannuru/Fake-news-detector",
    impact: "Automated text classification for misinformation screening"
  },
  {
    id: 3,
    title: "Digital Literacy Platform",
    description: "An accessible educational application built to bridge the digital divide for rural communities through interactive modules and TTS.",
    tags: ["Flutter", "Dart", "Firebase", "TTS"],
    github: "https://github.com/pandureddymannuru/digital_literacy",
    impact: "Accessibility-first learning flow for underserved users"
  },
  {
    id: 4,
    title: "Alumni Intelligent Platform",
    description: "A sophisticated networking architecture connecting alumni with current students using intelligent matching algorithms.",
    tags: ["JavaScript", "React", "NodeJS"],
    github: "https://github.com/pandureddymannuru/alumni-student-intelligent-platform",
    impact: "Improved mentor discovery through smart profile matching"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } }
};

const Projects = () => (
  <motion.div 
    className="projects-spatial"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="spatial-section-header">
      <motion.p variants={itemVariants} className="spatial-eyebrow">Selected Work</motion.p>
      <motion.h2 variants={itemVariants} className="spatial-section-title">Projects</motion.h2>
      <motion.p variants={itemVariants} className="spatial-projects-lead">
        A collection of product and AI projects focused on practical outcomes, usability, and scalable architecture.
      </motion.p>
    </div>

    <div className="spatial-projects-list">
      {ACTUAL_PROJECTS.map((project, index) => (
        <motion.div 
          key={project.id} 
          className="spatial-project-row"
          variants={itemVariants}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
        >
          <div className="spatial-project-header">
            <span className="spatial-project-index">0{index + 1}</span>
            <h3 className="spatial-project-title">{project.title}</h3>
          </div>
          
          <div className="spatial-project-details">
            <p className="spatial-project-desc">{project.description}</p>
            <div className="spatial-project-tags">
              {project.tags.map(tag => (
                <motion.span key={tag} className="spatial-tag-bubble" whileHover={{ y: -2 }}>
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="spatial-project-footer">
            <p>{project.impact}</p>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="spatial-project-link"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub /> View Repository
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Projects;
