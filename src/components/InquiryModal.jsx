import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InquiryModal({ isOpen, initialTab = 'contact', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [submitted, setSubmitted] = useState(false);

  // Sync tab when prop changes
  React.useEffect(() => {
    setActiveTab(initialTab);
    setSubmitted(false);
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-box"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>

          {!submitted ? (
            <>
              {/* Tab Navigation */}
              <div className="modal-tabs">
                <button
                  type="button"
                  className={`modal-tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}
                >
                  Direct Consultation
                </button>
                <button
                  type="button"
                  className={`modal-tab-btn ${activeTab === 'partner' ? 'active' : ''}`}
                  onClick={() => setActiveTab('partner')}
                >
                  Become a Channel Partner
                </button>
              </div>

              {activeTab === 'contact' ? (
                /* Contact Form */
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>Full Name / Principal *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Devendra Singh / Apex Group"
                    />
                  </div>

                  <div className="form-field-row">
                    <div className="form-field">
                      <label>Confidential Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="principal@domain.com"
                      />
                    </div>
                    <div className="form-field">
                      <label>Direct Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98000 00000"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Mandate Focus *</label>
                    <select required defaultValue="">
                      <option value="" disabled>Select focus area...</option>
                      <option value="Fundraise & Capital">Fundraise & Capital</option>
                      <option value="Real Estate Opportunities">Real Estate Opportunities</option>
                      <option value="Government & Regulatory">Government & Regulatory Matters</option>
                      <option value="Strategic Partnerships">Strategic Partnerships & Access</option>
                      <option value="Crisis Management & Legal">Crisis Management & Legal</option>
                      <option value="Special Situations">Special Situations / Discretionary</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Brief Nature of Situation</label>
                    <textarea
                      rows={3}
                      placeholder="Outline key requirements and expected timeline..."
                    />
                  </div>

                  <button type="submit" className="btn-primary-dark" style={{ width: '100%' }}>
                    Initiate Confidential Engagement
                  </button>
                </form>
              ) : (
                /* Channel Partner Form */
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>Partner / Firm Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Cherian Advisory / Rahul Sharma"
                    />
                  </div>

                  <div className="form-field-row">
                    <div className="form-field">
                      <label>Official Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@partner.in"
                      />
                    </div>
                    <div className="form-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99000 00000"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Primary Domain Network *</label>
                    <select required defaultValue="">
                      <option value="" disabled>Select domain expertise...</option>
                      <option value="Capital Markets & Debt">Capital Markets & Debt Sourcing</option>
                      <option value="Real Estate Deal Making">Real Estate & Land Transactions</option>
                      <option value="Policy & Public Affairs">Policy & Government Relations</option>
                      <option value="Distressed Restructuring">Distressed Asset Restructuring</option>
                      <option value="Family Office Network">Family Office Network</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>LinkedIn / Credential URL</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <button type="submit" className="btn-primary-dark" style={{ width: '100%' }}>
                    Submit Partner Application
                  </button>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdEcrfd-2jd3Me1r0cFzuCcT827cPXcQyfRVrgp08LwVlNw_w/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-outline"
                    style={{ width: '100%', display: 'block', textAlign: 'center', marginTop: '0.75rem' }}
                  >
                    Open Google Application Form ↗
                  </a>
                </form>
              )}
            </>
          ) : (
            /* Success Confirmation */
            <div className="modal-success-pane">
              <div className="success-check-circle">✓</div>
              <h3 className="section-heading-serif" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                Inquiry Received Securely
              </h3>
              <p className="section-subheading-serif" style={{ marginBottom: '1.75rem' }}>
                Thank you. A senior leader from One Catalyst will review your inquiry with utmost confidentiality and initiate direct contact within 24 hours.
              </p>
              <div style={{ background: '#FAF9F6', padding: '1rem', border: '1px solid #E5E3DC', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Direct Reach: <strong>+91-9619593599</strong> | <strong>contact@onecatalyst.in</strong>
              </div>
              <button
                type="button"
                className="btn-secondary-outline"
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
