import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css'
import Header from './components/Header'
import Home from './components/Home.jsx'

// Lazy load sections below the fold
const AboutMe = lazy(() => import('./components/AboutMe.jsx'));
const JourneyMap = lazy(() => import('./components/JourneyMap.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const App = () => {
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      className="main-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <div className="ambient-bg" aria-hidden="true">
        <span className="ambient-orb orb-one"></span>
        <span className="ambient-orb orb-two"></span>
        <span className="ambient-grid"></span>
      </div>
      <Header />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <motion.section
          id="home"
          className="page-section section-home"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
        >
          <Home />
        </motion.section>
        
        <Suspense fallback={
          <div className="loading-fallback">
            <div className="spinner"></div>
          </div>
        }>
          <motion.section
            id="about"
            className="page-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
          >
            <AboutMe />
          </motion.section>
          
          <motion.section
            id="journey"
            className="page-section section-journey"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
          >
            <JourneyMap />
          </motion.section>

          <motion.section
            id="projects"
            className="page-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
          >
            <Projects />
          </motion.section>
          <motion.section
            id="contact"
            className="page-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
          >
            <Contact />
          </motion.section>
        </Suspense>
      </motion.main>
      <footer>
        <p>© {currentYear} Pandu Reddy Mannuru. Designed and built with React.</p>
      </footer>
      <SpeedInsights />
    </motion.div>
  )
}

export default App

