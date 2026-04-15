import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Connect.css';

const Connect = () => {
    return (
        <motion.section 
          className="connect-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
            <h2 className="connect-heading">Get in Touch</h2>
            <p className="connect-text">
                Interested in working together or have any questions? Feel free to reach out!
            </p>
            <div className="connect-links">
            <a href="mailto:pandureddymannuru@gmail.com" className="connect-link email" aria-label="Email">
                <span className="icon-rect">
                    <FaEnvelope />
                </span>
            </a>
            <a href="https://www.linkedin.com/in/pandureddymannuru" target="_blank" rel="noopener noreferrer" className="connect-link linkedin" aria-label="LinkedIn">
                <span className="icon-rect">
                    <FaLinkedin />
                </span>
            </a>
            <a href="https://github.com/pandureddymannuru" target="_blank" rel="noopener noreferrer" className="connect-link github" aria-label="GitHub">
                <span className="icon-rect">
                    <FaGithub />
                </span>
            </a>

            </div>
        </motion.section>
    );
};

export default Connect;
