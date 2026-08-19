import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'What We Solve', href: '#what-we-solve' },
    { label: 'What People Say', href: '#testimonials' },
    { label: 'Meet the Team', href: '#team' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* One-Line Serif Brand Logo */}
          <a href="#" className="brand-logo-single" aria-label="One Catalyst Home">
            <span className="brand-logo-text">One Catalyst</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-item">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button & Mobile Toggle */}
          <div className="header-cta-wrapper">
            <button
              type="button"
              className="btn-header-cta desktop-only"
              onClick={() => onOpenModal('contact')}
            >
              Begin a conversation
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="menu-bar bar-1" />
              <span className="menu-bar bar-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mobile-drawer-content"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <nav className="mobile-nav-list">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="mobile-nav-item"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mobile-drawer-footer">
                <button
                  type="button"
                  className="btn-primary-dark full-width"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal('contact');
                  }}
                >
                  Begin a conversation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
