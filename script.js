/**
 * Shashank J — Portfolio Interactive Controller
 * High-Performance Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Scroll Progress Bar ─────────────────────────────────
  const scrollProgressBar = document.getElementById('scrollProgress');
  
  // ── 2. Navigation Bar & Scroll Spy ────────────────────────
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');

  // Mobile Hamburger Toggle
  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    // Close mobile nav on click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // Scroll Listener
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Update progress bar
    if (scrollProgressBar && height > 0) {
      const scrolled = (winScroll / height) * 100;
      scrollProgressBar.style.width = `${scrolled}%`;
    }

    // Navbar elevation on scroll
    if (navbar) {
      if (winScroll > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll Spy: highlight active nav item
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (winScroll >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // ── 3. Intersection Observer for Smooth Reveal Animations ──
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── 4. Animated Stat Counters in Hero ───────────────────────
  let hasAnimatedCounters = false;
  const statElements = document.querySelectorAll('.hero-stat-num');

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedCounters) {
        hasAnimatedCounters = true;
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsContainer = document.querySelector('.hero-stats-card');
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }

  function animateCounters() {
    statElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 1800; // ms
      const steps = 50;
      const stepTime = duration / steps;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = `${target}${suffix}`;
          clearInterval(timer);
        } else {
          counter.textContent = `${Math.ceil(current)}${suffix}`;
        }
      }, stepTime);
    });
  }

  // ── 5. Skills Progress Rings Animation ──────────────────────
  const skillRings = document.querySelectorAll('.ring-fill');
  const circumference = 2 * Math.PI * 50; // ~314.15px

  skillRings.forEach(ring => {
    ring.style.strokeDasharray = `${circumference}`;
    ring.style.strokeDashoffset = `${circumference}`;
  });

  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const ring = entry.target;
        const percent = +ring.getAttribute('data-percent') || 0;
        const offset = circumference - (percent / 100) * circumference;
        
        setTimeout(() => {
          ring.style.strokeDashoffset = `${offset}`;
        }, 150);

        observer.unobserve(ring);
      }
    });
  }, { threshold: 0.25 });

  skillRings.forEach(ring => skillsObserver.observe(ring));

  // ── 6. Modular Journey & Credentials Category Filtering ────
  const journeyTabs = document.querySelectorAll('.journey-tab-btn');
  const credCards = document.querySelectorAll('.cred-card');

  journeyTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      journeyTabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      credCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filter === 'all' || cardCategory === filter) {
          card.style.display = 'flex';
          card.style.flexDirection = 'column';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // ── 7. Interactive Credential Inspection Modal ─────────────
  const journeyModal = document.getElementById('journeyModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalType = document.getElementById('modalType');
  const modalIssuer = document.getElementById('modalIssuer');
  const modalDate = document.getElementById('modalDate');
  const modalDesc = document.getElementById('modalDesc');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  credCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title') || '';
      const issuer = card.getAttribute('data-issuer') || '';
      const date = card.getAttribute('data-date') || '';
      const type = card.getAttribute('data-type') || 'Certification';
      const desc = card.getAttribute('data-desc') || '';
      const img = card.getAttribute('data-img') || '';

      if (modalTitle) modalTitle.textContent = title;
      if (modalType) modalType.textContent = type;
      if (modalIssuer) modalIssuer.textContent = issuer;
      if (modalDate) modalDate.textContent = date;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalImage) {
        modalImage.src = img;
        modalImage.alt = title;
      }

      if (journeyModal) {
        journeyModal.classList.add('active');
        journeyModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  });

  function closeModal() {
    if (journeyModal) {
      journeyModal.classList.remove('active');
      journeyModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && journeyModal && journeyModal.classList.contains('active')) {
      closeModal();
    }
  });

  // ── 8. Contact Form Email Launch Handler ───────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contactName')?.value.trim() || '';
      const email = document.getElementById('contactEmail')?.value.trim() || '';
      const subject = document.getElementById('contactSubject')?.value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('contactMessage')?.value.trim() || '';

      const recipient = 'shashank.j8426@gmail.com';
      const fullSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
      const bodyContent = encodeURIComponent(
        `Hi Shashank,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via Portfolio Contact Form`
      );

      const mailtoLink = `mailto:${recipient}?subject=${fullSubject}&body=${bodyContent}`;
      
      window.location.href = mailtoLink;
    });
  }

});
