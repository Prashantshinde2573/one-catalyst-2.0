import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      image: '/assets/client_devendra.jpg',
      initials: 'DS',
    },
    {
      title: 'The right connection',
      quote:
        "I already knew what I wanted to do. I just didn't know the right person to speak to. That introduction happened within a week, and it changed everything.",
      person: 'Aarohi Drabu',
      role: 'Founder & CEO, GCC Company',
      image: null,
      initials: 'AD',
    },
    {
      title: 'Navigating a tough situation',
      quote:
        "It was complicated, and a lot of people needed to come together. I still don't know how they managed it, but somehow everything fell into place. Quietly, professionally, and on time",
      person: 'Nikhil Harihar',
      role: 'Chief of Staff, Technology Startup',
      image: null,
      initials: 'NH',
    },
    {
      title: 'Finding the right deal',
      quote:
        "They stayed with me through the entire process, finding the land, connecting me with the right builder, and getting the deal done. I never felt like I was handling it alone",
      person: 'Ashok Cherian',
      role: 'Founder & Investor',
      image: null,
      initials: 'AC',
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
        {/* Section Header — Exactly Preserved */}
        <div className="testimonials-header">
          <h2 className="section-heading-serif">What we people say about us</h2>
        </div>
      </div>

      {/* Centered Carousel Track Container */}
      <div className="centered-carousel-wrapper">
        {/* Left Navigation Arrow */}
        <button
          type="button"
          className="carousel-control-btn btn-prev"
          onClick={handlePrev}
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Navigation Arrow */}
        <button
          type="button"
          className="carousel-control-btn btn-next"
          onClick={handleNext}
          aria-label="Next Testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <div className="centered-carousel-viewport">
          <motion.div
            className="centered-carousel-track"
            animate={{
              x: `calc(50% - (${activeIdx} * (var(--card-width) + var(--card-gap)) + (var(--card-width) / 2)))`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {testimonials.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.person}
                  className={`centered-card-slide ${isActive ? 'is-active' : 'is-inactive'}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <article className="split-testimonial-card">
                    {/* Left Column: Dedicated Client Image / Visual Area */}
                    <div className="card-visual-pane">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.person}
                          className="client-portrait-img"
                        />
                      ) : (
                        <div className="client-portrait-placeholder">
                          <div className="placeholder-pattern" />
                          <span className="placeholder-monogram">{item.initials}</span>
                          <span className="placeholder-brandmark">❖ ONE CATALYST</span>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Structured Editorial Content */}
                    <div className="card-content-pane">
                      <div className="card-content-top">
                        {/* 1. Main Testimonial Title */}
                        <h3 className="card-testimonial-title">{item.title}</h3>

                        {/* 2. Review / Testimonial Text */}
                        <p className="card-testimonial-quote">
                          “{item.quote.replace(/^“|”$/g, '')}”
                        </p>
                      </div>

                      {/* 3 & 4. Client Information */}
                      <div className="card-author-block">
                        <div className="card-author-name">{item.person}</div>
                        <div className="card-author-role">{item.role}</div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="container">
        <div className="carousel-dots-row">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot ${activeIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
