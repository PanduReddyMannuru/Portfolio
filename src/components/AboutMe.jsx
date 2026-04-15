import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutMe.css';

const focusAreas = [
  {
    title: 'Product Thinking',
    description: 'I frame technical work around user outcomes, clarity, and long-term maintainability.',
    value: 'User-first delivery'
  },
  {
    title: 'AI + Engineering Blend',
    description: 'I connect model experimentation with full stack implementation to ship useful applications.',
    value: 'Practical intelligence'
  },
  {
    title: 'Execution Rhythm',
    description: 'I prefer iterative builds, measurable improvements, and reliable project communication.',
    value: 'Consistent progress'
  }
];

const capabilityColumns = [
  {
    title: 'Engineering',
    items: ['React and modern frontend architecture', 'Node.js APIs and integration workflows', 'SQL and NoSQL data modeling basics']
  },
  {
    title: 'Machine Learning',
    items: ['Feature preparation and model experimentation', 'NLP-oriented classification projects', 'Model-to-interface integration for end users']
  },
  {
    title: 'Workflow',
    items: ['Version control with Git and collaborative branching', 'Clear project documentation and handoff clarity', 'Rapid prototyping with production awareness']
  }
];

const workingPrinciples = [
  'Build with a clear outcome before choosing tools.',
  'Keep interfaces simple, even when the logic is complex.',
  'Use feedback loops early to prevent expensive rework.'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
};

const AboutMe = () => (
  <motion.div 
    className="aboutme-spatial"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="spatial-section-header">
      <motion.p variants={cardVariants} className="spatial-eyebrow">Profile</motion.p>
      <motion.h2 variants={cardVariants} className="spatial-section-title">About Me</motion.h2>
      <motion.p variants={cardVariants} className="spatial-about-lead">
        I am an engineer who enjoys translating complex ideas into reliable, user-focused products.
        My work sits at the intersection of AI experimentation and production-grade web development.
      </motion.p>
    </div>

    <div className="about-layout-grid">
      <motion.article variants={cardVariants} className="about-story-card" whileHover={{ y: -4 }}>
        <h3>Professional Snapshot</h3>
        <p>
          I like building digital products where data intelligence and user experience support each other.
          My strongest work comes from translating technical complexity into interfaces that are easy to use and easy to trust.
        </p>
        <p>
          I am currently focused on internships and early-career opportunities where I can contribute to AI-enabled products,
          learn fast from real teams, and deliver production-minded solutions.
        </p>
      </motion.article>

      <motion.div variants={cardVariants} className="about-focus-grid">
        {focusAreas.map((area) => (
          <motion.article
            key={area.title}
            className="about-focus-card"
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <h4>{area.title}</h4>
            <p>{area.description}</p>
            <span>{area.value}</span>
          </motion.article>
        ))}
      </motion.div>

      <motion.section variants={cardVariants} className="about-capability-panel" whileHover={{ y: -4 }}>
        <h3>Capability Overview</h3>
        <div className="capability-columns">
          {capabilityColumns.map((column) => (
            <div key={column.title} className="capability-column">
              <h4>{column.title}</h4>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={cardVariants} className="about-principles-panel" whileHover={{ y: -4 }}>
        <h3>How I Work</h3>
        <ul>
          {workingPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </motion.section>
    </div>
  </motion.div>
);

export default AboutMe;
