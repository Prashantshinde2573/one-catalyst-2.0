import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenModal }) {
  const subpointers = [
    'High Stakes Problems',
    'Pan-India Network',
    'Multi-Domain Expertise',
    'End-to-End Execution',
  ];

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            Solving critical<br className="hero-desktop-br" /> problems for <span className="hero-nowrap">India’s&nbsp;1%</span>
          </h1>

          {/* 4 Sub-pointers */}
          <div className="hero-subpointers">
            {subpointers.map((item) => (
              <div key={item} className="subpointer-item">
                <span className="subpointer-icon" aria-hidden="true">❖</span>
                <span className="subpointer-text">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-primary-dark"
              onClick={() => onOpenModal('contact')}
            >
              Contact Us
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEcrfd-2jd3Me1r0cFzuCcT827cPXcQyfRVrgp08LwVlNw_w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-outline"
            >
              Become a channel Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
