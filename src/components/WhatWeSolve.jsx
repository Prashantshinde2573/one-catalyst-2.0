import React from 'react';
import {
  TrendingUp,
  Gem,
  Building2,
  BarChart3,
  Handshake,
  Crown,
  Landmark,
  Network,
  GitPullRequest,
  ShieldAlert,
  Maximize2,
  Layers,
  AlertTriangle,
  Scale,
  Megaphone,
  Compass,
  GitMerge,
  Heart,
  Users2,
  Sparkles,
  Target,
} from 'lucide-react';

export default function WhatWeSolve({ onOpenModal }) {
  // Exactly 21 cards distributed across 3 horizontal continuous marquee rows with semantic outline icons & soft pastel backgrounds
  const row1 = [
    { name: 'Fundraise', icon: TrendingUp, bg: '#E4F5E9' },
    { name: 'Wealth Management', icon: Gem, bg: '#EDE8F8' },
    { name: 'Real Estate Opportunities', icon: Building2, bg: '#E3F2FD' },
    { name: 'Market Intelligence', icon: BarChart3, bg: '#FEF7D6' },
    { name: 'Off Market Deals', icon: Handshake, bg: '#FDE8EF' },
    { name: 'Access to Decision Makers', icon: Crown, bg: '#EDE8F8' },
    { name: 'Govt Tenders', icon: Landmark, bg: '#E4F5E9' },
  ];

  const row2 = [
    { name: 'Private Networks', icon: Network, bg: '#E3F2FD' },
    { name: 'Strategic Partnerships', icon: GitPullRequest, bg: '#FEF7D6' },
    { name: 'Crisis Management', icon: ShieldAlert, bg: '#FDE8EF' },
    { name: 'Business Expansion', icon: Maximize2, bg: '#E4F5E9' },
    { name: 'Cross-Sector Collaboration', icon: Layers, bg: '#EDE8F8' },
    { name: 'Distressed Opportunities', icon: AlertTriangle, bg: '#FEF7D6' },
    { name: 'Legal Matters', icon: Scale, bg: '#E3F2FD' },
  ];

  const row3 = [
    { name: 'Public affairs', icon: Megaphone, bg: '#FDE8EF' },
    { name: 'Regulatory Navigation', icon: Compass, bg: '#E4F5E9' },
    { name: 'Joint Ventures', icon: GitMerge, bg: '#EDE8F8' },
    { name: 'NGO & Social Impact', icon: Heart, bg: '#FDE8EF' },
    { name: 'Family Offices', icon: Users2, bg: '#E3F2FD' },
    { name: 'Media & Reputation', icon: Sparkles, bg: '#FEF7D6' },
    { name: 'Special Situations', icon: Target, bg: '#EDE8F8' },
  ];

  const renderCard = (item, keyPrefix, idx) => {
    const IconComponent = item.icon;
    return (
      <div
        key={`${keyPrefix}-${idx}`}
        className="solve-category-card"
        onClick={() => onOpenModal('contact')}
      >
        <div className="card-icon-box" style={{ backgroundColor: item.bg }}>
          <IconComponent className="card-icon-svg" size={22} strokeWidth={1.75} />
        </div>
        <span className="card-label-text">{item.name}</span>
      </div>
    );
  };

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

      {/* 3 Horizontal Rows Infinite Continuous Marquee */}
      <div className="flying-chips-container" aria-label="What we solve marquee">
        {/* Row 1: LEFT → RIGHT */}
        <div className="marquee-lane">
          <div className="marquee-track track-ltr">
            {row1.map((item, idx) => renderCard(item, 'r1-a', idx))}
            {row1.map((item, idx) => renderCard(item, 'r1-b', idx))}
          </div>
        </div>

        {/* Row 2: RIGHT → LEFT */}
        <div className="marquee-lane">
          <div className="marquee-track track-rtl">
            {row2.map((item, idx) => renderCard(item, 'r2-a', idx))}
            {row2.map((item, idx) => renderCard(item, 'r2-b', idx))}
          </div>
        </div>

        {/* Row 3: LEFT → RIGHT */}
        <div className="marquee-lane">
          <div className="marquee-track track-ltr">
            {row3.map((item, idx) => renderCard(item, 'r3-a', idx))}
            {row3.map((item, idx) => renderCard(item, 'r3-b', idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
