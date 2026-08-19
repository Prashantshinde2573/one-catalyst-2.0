import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQs() {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      id: 'q1',
      question: 'What is One Catalyst?',
      answer:
        'One Catalyst works with India’s leading individuals and businesses on complex, high-stakes situations where access, relationships and execution matter',
    },
    {
      id: 'q2',
      question: 'What kind of problems do you solve?',
      answer:
        'We work on situations where the solution isn\'t obvious and the right path often depends on access, relationships, judgment and execution.\n\nThis can include fundraising, off-market opportunities, strategic partnerships, government tenders, regulatory matters, complex negotiations, business expansion, family office requirements, distressed opportunities and special situations',
    },
    {
      id: 'q3',
      question: 'Who do you work with?',
      answer:
        'We work with founders, promoters, investors, family offices, CXOs, corporates, institutions and individuals dealing with high-value or sensitive situations',
    },
    {
      id: 'q4',
      question: 'Do you work across industries?',
      answer:
        'Yes. We are not defined by a particular industry. Our work can span capital, real estate, healthcare, infrastructure, technology, government, sports, media and other sectors.\n\nThe common thread is the complexity of the problem, not the industry',
    },
    {
      id: 'q5',
      question: 'Can you help if we don\'t know exactly what we need?',
      answer:
        'Absolutely.\n\nSome of our most valuable engagements begin with: "We have a situation. We\'re not sure who can solve it."\n\nWe start by understanding the problem and determining whether we can meaningfully help',
    },
    {
      id: 'q6',
      question: 'Do you work on a success-fee basis?',
      answer:
        'Our commercial structure depends on the nature of the mandate. Depending on the situation, engagements may involve advisory fees, success-linked fees, retainers or a combination of these.',
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderFaqItem = (faq) => {
    const isOpen = !!openItems[faq.id];
    return (
      <div key={faq.id} className="faq-row-item">
        <button
          type="button"
          className="faq-row-header"
          onClick={() => toggleItem(faq.id)}
          aria-expanded={isOpen}
        >
          <span className="faq-q-text">{faq.question}</span>
          <span className={`faq-toggle-sign ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="faq-answer-pane"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {faq.answer.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="faqs-section" id="faqs">
      <div className="container">
        <div className="faqs-centered-container">
          <h2 className="faqs-main-title">FAQs</h2>

          {/* Single Centered Column FAQ List */}
          <div className="faqs-single-column-list">
            {faqs.map(renderFaqItem)}
          </div>
        </div>
      </div>
    </section>
  );
}
