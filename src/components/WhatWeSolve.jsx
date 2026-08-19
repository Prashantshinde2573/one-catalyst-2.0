import React from 'react';

export default function WhatWeSolve({ onOpenModal }) {
  // Exactly the 21 provided chips distributed across 3 horizontal continuous marquee rows
  const row1 = [
    'Fundraise',
    'Wealth Management',
    'Real Estate Opportunities',
    'Market Intelligence',
    'Off Market Deals',
    'Access to Decision Makers',
    'Govt Tenders',
  ];

  const row2 = [
    'Private Networks',
    'Strategic Partnerships',
    'Crisis Management',
    'Business Expansion',
    'Cross-Sector Collaboration',
    'Distressed Opportunities',
    'Legal Matters',
  ];

  const row3 = [
    'Public affairs',
    'Regulatory Navigation',
    'Joint Ventures',
    'NGO & Social Impact',
    'Family Offices',
    'Media & Reputation',
    'Special Situations',
  ];

  return (
    <section className="solve-section" id="what-we-solve">
      <div className="container">
        {/* Header & Sub-header */}
        <div className="solve-header">
          <h2 className="section-heading-serif">What do we solve?</h2>
          <p className="section-subheading-serif">
            From capital to complex transactions, government, legal matters and strategic opportunities, we help you navigate it all
          </p>
        </div>
      </div>

      {/* Exactly 3 Horizontal Rows Infinite Marquee */}
      <div className="flying-chips-container" aria-label="What we solve marquee">
        {/* Row 1: LEFT → RIGHT */}
        <div className="marquee-lane">
          <div className="marquee-track track-ltr">
            {row1.map((chip, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="flying-chip"
                onClick={() => onOpenModal('contact')}
              >
                <span>{chip}</span>
              </div>
            ))}
            {/* Seamless duplicate */}
            {row1.map((chip, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="flying-chip"
                onClick={() => onOpenModal('contact')}
              >
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: RIGHT → LEFT */}
        <div className="marquee-lane">
          <div className="marquee-track track-rtl">
            {row2.map((chip, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="flying-chip"
                onClick={() => onOpenModal('contact')}
              >
                <span>{chip}</span>
              </div>
            ))}
            {/* Seamless duplicate */}
            {row2.map((chip, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="flying-chip"
                onClick={() => onOpenModal('contact')}
              >
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: LEFT → RIGHT */}
        <div className="marquee-lane">
          <div className="marquee-track track-ltr">
            {row3.map((chip, idx) => (
              <div
                key={`r3-a-${idx}`}
                className="flying-chip"
                onClick={() => onOpenModal('contact')}
              >
                <span>{chip}</span>
              </div>
            ))}
            {/* Seamless duplicate */}
            {row3.map((chip, idx) => (
              <div
                key={`r3-b-${idx}`}
                className="flying-chip"
                onClick={() => onOpenModal('contact')}
              >
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
