import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Home.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
}

const Home = () => {
  return (
    <motion.div 
      className='home-spatial'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="home-content">
        <motion.p variants={itemVariants} className="spatial-eyebrow">
          AI and ML Engineer | Full Stack Developer
        </motion.p>
        <motion.p variants={itemVariants} className="hero-intro">
          Hello, I am
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="spatial-title">
          Pandu Reddy <span>Mannuru</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-summary">
          I design and build practical digital products that blend machine intelligence with clean user experience.
          From model prototyping to production-ready frontends, I focus on solutions that solve real problems.
        </motion.p>
        
        <motion.div variants={itemVariants} className="spatial-actions">
          <motion.a
            href="https://drive.google.com/file/d/1faMy769m1bdRMaxY1A8Jpzxi3M3_PyUd/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className='spatial-resume-btn'
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Resume
          </motion.a>
          <motion.a
            href="#projects"
            className="spatial-outline-btn"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Projects
          </motion.a>
          <div className="spatial-socials">
            <motion.a
              href="https://www.linkedin.com/in/pandureddymannuru"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/pandureddymannuru"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-metrics">
          <motion.div whileHover={{ y: -4 }}>
            <span>4+</span>
            <p>Impactful projects shipped</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }}>
            <span>AI + Web</span>
            <p>Cross-domain implementation</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }}>
            <span>2026</span>
            <p>B.Tech graduation year</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="spatial-profile"
        variants={itemVariants}
        initial={{ filter: 'grayscale(100%)', opacity: 0, y: 14 }}
        animate={{ filter: 'grayscale(0%)', opacity: 1, y: [0, -8, 0] }}
        transition={{ duration: 1.8, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        whileHover={{ scale: 1.02, rotate: -0.4 }}
      >
        <div className="profile-mesh-glow"></div>
        <img 
          src="/PanduReddy.jpeg" 
          alt="Pandu Reddy portrait" 
          fetchPriority="high"
          loading="eager"
        />
      </motion.div>
    </motion.div>
  )
}

export default Home;