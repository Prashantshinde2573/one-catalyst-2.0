import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      title: 'Facilitating capital',
      quote:
        "Honestly, I thought it would take months. It didn't. A few of the right conversations, and the funding came through, quietly and efficiently. That is exactly how I wanted it",
      person: 'Devendra Singh',
      role: 'Managing Director, Real Estate Group',
    },
    {
      title: 'The right connection',
      quote:
        'I already knew what I wanted to do. I just didn\'t know the right person to speak to. That introduction happened within a week, and it changed everything.”',
      person: 'Aarohi Drabu',
      role: 'Founder & CEO, GCC Company',
    },
    {
      title: 'Navigating a tough situation',
      quote:
        "It was complicated, and a lot of people needed to come together. I still don't know how they managed it, but somehow everything fell into place. Quietly, professionally, and on time",
      person: 'Nikhil Harihar',
      role: 'Chief of Staff, Technology Startup',
    },
    {
      title: 'Finding the right deal',
      quote:
        'They stayed with me through the entire process, finding the land, connecting me with the right builder, and getting the deal done. I never felt like I was handling it alone',
      person: 'Ashok Cherian',
      role: 'Founder & Investor',
    },
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="section-heading-serif">What we people say about us</h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="testimonials-grid desktop-only-grid">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.title}
              className="testimonial-card-frame"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="quote-mark-icon" aria-hidden="true">“</div>
              <h3 className="testimonial-heading">{item.title}</h3>
              <p className="testimonial-body">{item.quote}</p>
              <div className="testimonial-author-box">
                <div className="author-fullname">{item.person}</div>
                <div className="author-title">{item.role}</div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile Swipeable Slider View */}
        <div className="testimonials-mobile-slider mobile-only-slider">
          <div className="slider-card-container">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeIdx}
                className="testimonial-card-frame mobile-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="quote-mark-icon" aria-hidden="true">“</div>
                <h3 className="testimonial-heading">{testimonials[activeIdx].title}</h3>
                <p className="testimonial-body">{testimonials[activeIdx].quote}</p>
                <div className="testimonial-author-box">
                  <div className="author-fullname">{testimonials[activeIdx].person}</div>
                  <div className="author-title">{testimonials[activeIdx].role}</div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls on Mobile */}
          <div className="slider-controls-mobile">
            <button
              type="button"
              className="mobile-nav-arrow"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="pagination-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dot-indicator ${activeIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="mobile-nav-arrow"
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
