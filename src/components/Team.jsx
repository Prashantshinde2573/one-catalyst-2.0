import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  const members = [
    {
      name: 'Anurag Tripathi',
      role: 'Founder & CEO',
      image: '/assets/portrait_anurag.jpg',
      linkedin: 'https://www.linkedin.com/in/anuragtripathi1610/',
    },
    {
      name: 'Cherian Mathan',
      role: 'Co-Founder, Strategic Partnerships',
      image: '/assets/portrait_cherian.jpg',
      linkedin: 'https://www.linkedin.com/in/cherian-mathan-20554059/',
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        {/* Header & Sub-header */}
        <div className="team-header">
          <h2 className="section-heading-serif">Meet the Team</h2>
          <p className="section-subheading-serif">
            A diverse team and 50+ channel partners getting things done
          </p>
        </div>

        {/* 2 Team Cards */}
        <div className="team-cards-grid">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              className="team-card-styled"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="team-photo-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                  loading="lazy"
                />
              </div>

              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-badge-btn"
                aria-label={`${member.name} LinkedIn Profile`}
              >
                in
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
