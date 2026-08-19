import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      title: 'Facilitating capital',
      quote:
        'Honestly, I thought it would take months. It didn’t. A few of the right conversations, and the funding came through, quietly and efficiently. That is exactly how I wanted it',
      person: 'Devendra Singh',
      role: 'Managing Director, Real Estate Group',
    },
    {
      title: 'The right connection',
      quote:
        'I already knew what I wanted to do. I just didn’t know the right person to speak to. That introduction happened within a week, and it changed everything.”',
      person: 'Aarohi Drabu',
      role: 'Founder & CEO, GCC Company',
    },
    {
      title: 'Navigating a tough situation',
      quote:
        'It was complicated, and a lot of people needed to come together. I still don’t know how they managed it, but somehow everything fell into place. Quietly, professionally, and on time',
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

  // Format quotes cleanly
  const formatQuote = (q) => {
    let clean = q.trim();
    if (clean.startsWith('“') || clean.startsWith('"')) {
      clean = clean.substring(1);
    }
    if (clean.endsWith('”') || clean.endsWith('"')) {
      clean = clean.substring(0, clean.length - 1);
    }
    return `“${clean}”`;
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header (Preserved Exactly) */}
        <div className="testimonials-header">
          <h2 className="section-heading-serif">What we people say about us</h2>
        </div>
      </div>

      {/* Editorial Carousel Viewport */}
      <div className="editorial-carousel-viewport">
        <div className="editorial-carousel-container">
          <motion.div
            className="editorial-carousel-track"
            animate={{
              x: `calc(-${activeIdx} * (var(--card-width) + var(--card-gap)))`,
            }}
            transition={{
              duration: 0.55,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            {testimonials.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.person}
                  className={`editorial-card-wrapper ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <article className="editorial-testimonial-card">
                    <div className="editorial-card-top">
                      <p className="editorial-quote-text">
                        {formatQuote(item.quote)}
                      </p>
                    </div>

                    <div className="editorial-author-block">
                      <div className="editorial-author-name">{item.person}</div>
                      <div className="editorial-author-role">{item.role}</div>
                    </div>
                  </article>
                </div>
              );
            })}
          </motion.div>

          {/* Floating Subtle Navigation Arrows */}
          <button
            type="button"
            className="editorial-nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="editorial-nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="container">
        <div className="editorial-pagination-row">
          <div className="pagination-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`dot-indicator ${activeIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
