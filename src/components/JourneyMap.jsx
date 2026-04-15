import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/JourneyMap.css';

const MOCK_JOURNEY = [
  {
    id: 'schooling',
    year: '2020',
    title: 'Secondary Education',
    institute: 'ZPHS Chitvel',
    line: 'Built discipline, curiosity, and a strong base for problem-solving.'
  },
  {
    id: 'diploma',
    year: '2020 - 2023',
    title: 'Diploma in Computer Engineering',
    institute: 'GPT Vempalli',
    line: 'Converted theory into practical coding and system-building experience.'
  },
  {
    id: 'btech',
    year: '2023 - 2026',
    title: 'B.Tech in CSE (AI and ML)',
    institute: 'VVITU Namburu',
    line: 'Now focused on shipping AI-assisted products with clean full-stack execution.'
  }
];

const JourneyMap = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.16 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } }
  };

  return (
    <section className="journey-section">
      <div className="journey-header">
        <p className="section-subtitle">Creative Progression</p>
        <h2 className="section-title">Journey</h2>
        <p className="journey-lead">
          Less noise, clear milestones, and a focused story of how I grew into an AI-oriented builder.
        </p>
      </div>

      <motion.div
        className="journey-timeline"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {MOCK_JOURNEY.map((node, index) => (
          <motion.article
            key={node.id}
            className={`journey-entry ${index % 2 === 0 ? 'entry-left' : 'entry-right'}`}
            variants={cardVariants}
          >
            <div className="journey-card">
              <div className="journey-topline">
                <span className="journey-step">0{index + 1}</span>
                <span className="journey-year">{node.year}</span>
              </div>
              <h3>{node.title}</h3>
              <p className="journey-institute">
                <FaMapMarkerAlt /> {node.institute}
              </p>
            </div>

            <div className="timeline-marker" aria-hidden="true">
              <span></span>
            </div>

            <p className="journey-note">{node.line}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default JourneyMap;
