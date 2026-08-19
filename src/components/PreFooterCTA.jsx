import React from 'react';
import { motion } from 'framer-motion';

export default function PreFooterCTA({ onOpenModal }) {
  return (
    <section className="prefooter-section" id="begin-conversation">
      <div className="container">
        <div className="prefooter-grid">
          {/* Left: Architectural Visual */}
          <motion.div
            className="prefooter-image-frame"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/assets/architectural_steps.jpg"
              alt="Architectural perspective"
              className="prefooter-image"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Exact Header and CTA */}
          <motion.div
            className="prefooter-content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="prefooter-title">
              We are always looking for interesting, high-stakes problems worth solving
            </h2>

            <button
              type="button"
              className="btn-primary-dark"
              onClick={() => onOpenModal('contact')}
            >
              Begin a conversation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
