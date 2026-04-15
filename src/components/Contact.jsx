import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLScR0hPNvcTY5bUv0XgDzJx2PwXHiilNcuJnYTDS_fN1nMJkig/formResponse',
      {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      }
    );
    setSubmitted(true);
    form.reset();
  };

  return (
    <motion.section 
      className="contact-spatial"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
    >
      <div className="spatial-section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p className="spatial-eyebrow">Contact</p>
        <h2 className="spatial-section-title">Let us Build Something Useful</h2>
      </div>
      <p className="contact-spatial-desc">
        I am open to internships, entry-level roles, and collaborative project opportunities in AI, ML, and full stack development.
      </p>

      <motion.div
        className="contact-direct-links"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.a
          href="mailto:pandureddymannuru@gmail.com"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -2, scale: 1.02 }}
        >
          <FaEnvelope /> Email
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/pandureddymannuru"
          target="_blank"
          rel="noopener noreferrer"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -2, scale: 1.02 }}
        >
          <FaLinkedin /> LinkedIn
        </motion.a>
        <motion.a
          href="https://github.com/pandureddymannuru"
          target="_blank"
          rel="noopener noreferrer"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -2, scale: 1.02 }}
        >
          <FaGithub /> GitHub
        </motion.a>
      </motion.div>

      <div className="form-container">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              key="thank-you"
              className="thank-you"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I will get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form 
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="email"
                name="entry.481705659"
                placeholder="Your email address"
                required
              />
              <textarea
                name="entry.1750904755"
                placeholder="Your message"
                required
                rows={6}
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Contact;