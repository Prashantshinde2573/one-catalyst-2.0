import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeSolve from './components/WhatWeSolve';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQs from './components/FAQs';
import PreFooterCTA from './components/PreFooterCTA';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    initialTab: 'contact',
  });

  const handleOpenModal = (tab = 'contact') => {
    setModalState({
      isOpen: true,
      initialTab: tab,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="site-wrapper">
      {/* Header */}
      <Header onOpenModal={handleOpenModal} />

      <main>
        {/* Section 1: Hero */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Section 2: What do we solve? */}
        <WhatWeSolve onOpenModal={handleOpenModal} />

        {/* Section 3: What people say about us */}
        <Testimonials />

        {/* Section 4: Meet the Team */}
        <Team />

        {/* Section 5: FAQs */}
        <FAQs />

        {/* Section 6: Begin a conversation */}
        <PreFooterCTA onOpenModal={handleOpenModal} />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Interactive Modal */}
      <InquiryModal
        isOpen={modalState.isOpen}
        initialTab={modalState.initialTab}
        onClose={handleCloseModal}
      />
    </div>
  );
}
