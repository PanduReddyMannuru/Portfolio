import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/Header.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Connect' }
]

const Header = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id))
      let currentActive = 'home'
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop
          if (window.scrollY >= sectionTop - 150) {
            currentActive = section.getAttribute('id')
          }
        }
      })
      
      setActiveSection(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="site-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="nav-content">
        <motion.button
          className="brand-button"
          onClick={() => scrollToSection('home')}
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="brand-mark">PM</span>
          <span className="brand-label">Pandu Reddy</span>
        </motion.button>
        <ul>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index + 0.2, duration: 0.35 }}
            >
              <motion.button
                onClick={() => scrollToSection(link.id)}
                className={activeSection === link.id ? 'active' : ''}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                {activeSection === link.id && (
                  <div className="active-bg" />
                )}
                <span className="nav-label">{link.label}</span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
        <motion.a
          className="status-pill"
          href="mailto:pandureddymannuru@gmail.com"
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Available for work
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Header;