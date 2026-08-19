import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns-grid">
          {/* Col 1: One-Line Serif Logo */}
          <div className="footer-col-brand">
            <a href="#" className="brand-logo-single" aria-label="One Catalyst">
              <span className="brand-logo-text">One Catalyst</span>
            </a>
          </div>

          {/* Col 2: Built in India */}
          <div className="footer-col-middle">
            <div>Built in India 🇮🇳</div>
            <div>Built for how India moves</div>
          </div>

          {/* Col 3: Contact Us */}
          <div className="footer-col-contact">
            <div>Contact us</div>
            <a href="mailto:contact@onecatalyst.in">contact@onecatalyst.in</a>
            <a href="tel:+919619593599">+91-9619593599</a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-row">
          © 2026 One Catalyst
        </div>
      </div>
    </footer>
  );
}
