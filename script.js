/**
 * One Catalyst — Interactive Client Scripts
 * Pure vanilla JavaScript with accessibility, smooth interactions, and modal workflows.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta-group button');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenuToggle.classList.toggle('active');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // 2. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    const icon = item.querySelector('.faq-icon');

    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isCurrentlyActive = item.classList.contains('active');

        // Optional: Close all other open items for clean accordion effect
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            const otherPanel = otherItem.querySelector('.faq-panel');
            const otherIcon = otherItem.querySelector('.faq-icon');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.hidden = true;
            if (otherIcon) otherIcon.textContent = '+';
          }
        });

        // Toggle current item
        if (isCurrentlyActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
          panel.hidden = true;
          if (icon) icon.textContent = '+';
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          panel.hidden = false;
          if (icon) icon.textContent = '−';
        }
      });
    }
  });

  // 3. Modal Dialog Workflows (Consultation & Channel Partner)
  const modal = document.getElementById('inquiryModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const tabBtnContact = document.getElementById('tabBtnContact');
  const tabBtnPartner = document.getElementById('tabBtnPartner');
  const paneContact = document.getElementById('paneContact');
  const panePartner = document.getElementById('panePartner');
  const successMessage = document.getElementById('successMessage');
  const successDismissBtn = document.getElementById('successDismissBtn');
  const contactForm = document.getElementById('contactForm');
  const partnerForm = document.getElementById('partnerForm');
  const modalTriggers = document.querySelectorAll('[data-modal-target="modal"]');

  function openModal(initialTab = 'contact') {
    if (!modal) return;
    
    // Reset forms & panes
    if (successMessage) successMessage.hidden = true;
    if (paneContact) paneContact.style.display = '';
    if (panePartner) panePartner.style.display = '';

    // Switch to target tab
    switchTab(initialTab);

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function switchTab(tabKey) {
    if (successMessage) successMessage.hidden = true;

    if (tabKey === 'partner') {
      tabBtnPartner?.classList.add('active');
      tabBtnPartner?.setAttribute('aria-selected', 'true');
      tabBtnContact?.classList.remove('active');
      tabBtnContact?.setAttribute('aria-selected', 'false');

      panePartner?.classList.add('active');
      paneContact?.classList.remove('active');
    } else {
      tabBtnContact?.classList.add('active');
      tabBtnContact?.setAttribute('aria-selected', 'true');
      tabBtnPartner?.classList.remove('active');
      tabBtnPartner?.setAttribute('aria-selected', 'false');

      paneContact?.classList.add('active');
      panePartner?.classList.remove('active');
    }
  }

  // Trigger bindings
  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-modal-tab') || 'contact';
      openModal(targetTab);
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  successDismissBtn?.addEventListener('click', closeModal);

  // Close on backdrop click
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });

  // Tab switching clicks
  tabBtnContact?.addEventListener('click', () => switchTab('contact'));
  tabBtnPartner?.addEventListener('click', () => switchTab('partner'));

  // 4. Form Submissions Simulation
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Emulate high-speed confidential submission
      if (paneContact) paneContact.classList.remove('active');
      if (panePartner) panePartner.classList.remove('active');
      if (successMessage) successMessage.hidden = false;
      showToast('Consultation request dispatched securely.');
      contactForm.reset();
    });
  }

  if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (paneContact) paneContact.classList.remove('active');
      if (panePartner) panePartner.classList.remove('active');
      if (successMessage) successMessage.hidden = false;
      showToast('Channel partner application received.');
      partnerForm.reset();
    });
  }

  // 5. Toast Notification System
  const toast = document.getElementById('siteToast');
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 6. Interactive Chip Selection Effect
  const chips = document.querySelectorAll('.chip-item');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const chipText = chip.textContent.trim();
      // Fill the category in the modal when clicking a chip
      const mandateSelect = document.getElementById('contactMandate');
      if (mandateSelect) {
        // Try matching select options
        let matched = false;
        for (let i = 0; i < mandateSelect.options.length; i++) {
          if (mandateSelect.options[i].text.toLowerCase().includes(chipText.toLowerCase().substring(0, 5))) {
            mandateSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) {
          mandateSelect.value = "Special Situations / Unspecified";
        }
      }
      openModal('contact');
    });
  });

  // 7. Header Elevation on Scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
      if (header) header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.04)';
    } else {
      header?.classList.remove('scrolled');
      if (header) header.style.boxShadow = 'none';
    }
  }, { passive: true });
});
