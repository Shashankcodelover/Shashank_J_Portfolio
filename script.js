/* ═══════════════════════════════════════════════════════════
   SHASHANK J — PORTFOLIO JAVASCRIPT v2
   Scroll Observers · Overlapping Carousels · Counters · Form
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL EFFECT ───────────────────────────── */
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  /* ── MOBILE HAMBURGER ───────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* ── SMOOTH SCROLL ──────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── INTERSECTION OBSERVER — REVEAL ON SCROLL ───────── */
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip, .reveal-drop, .reveal-zoom'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ── STAGGERED REVEALS ──────────────────────────────── */
  const staggerGroups = document.querySelectorAll('[data-stagger-group]');

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('[data-stagger-item]');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('visible');
          }, index * 100);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  staggerGroups.forEach(group => staggerObserver.observe(group));

  /* ── SKILL BAR ANIMATION ────────────────────────────── */
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const rings = entry.target.querySelectorAll('.ring-fill-circle');
      const vals = entry.target.querySelectorAll('.ring-val');

      if (entry.isIntersecting) {
        rings.forEach((ring, index) => {
          const targetPercent = parseInt(ring.getAttribute('data-percent'));
          const circumference = 326.72;
          const offset = circumference - (targetPercent / 100) * circumference;
          setTimeout(() => {
            ring.style.strokeDashoffset = offset;
          }, index * 60);
        });

        vals.forEach((val, index) => {
          const target = parseInt(val.getAttribute('data-target'));
          if (val.textContent === '0' || val.textContent === '') {
            setTimeout(() => {
              countUp(val, 0, target, 1500);
            }, index * 60);
          }
        });
      } else {
        rings.forEach(ring => {
          ring.style.strokeDashoffset = '326.72';
        });
        vals.forEach(val => {
          val.textContent = '0';
        });
      }
    });
  }, { threshold: 0.1 });

  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }

  /* ── STAT COUNTER ANIMATION ─────────────────────────── */
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-number, .hero-stat-num');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          countUp(counter, 0, target, 1500, suffix);
        });
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    statObserver.observe(statsBar);
  }

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    statObserver.observe(heroStats);
  }

  /* ── COUNT UP HELPER ────────────────────────────────── */
  function countUp(element, start, end, duration, suffix = '') {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(start + (end - start) * eased);
      element.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = end + suffix;
      }
    };
    requestAnimationFrame(step);
  }

  /* ── OVERLAPPING CARD CAROUSEL LOGIC ─────────────────── */
  function setupCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) return;

    const cards = carousel.querySelectorAll('.carousel-card');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const btnPrev = carousel.querySelector('.carousel-btn.prev-btn');
    const btnNext = carousel.querySelector('.carousel-btn.next-btn');

    if (cards.length === 0) return;

    let currentIndex = 0;

    // Build Dots dynamically
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          goToIndex(index);
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateCarousel() {
      cards.forEach((card, index) => {
        card.className = 'carousel-card'; // reset classes

        if (index === currentIndex) {
          card.classList.add('active');
        } else if (index === (currentIndex + 1) % cards.length) {
          card.classList.add('next');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
          card.classList.add('prev');
        } else {
          card.classList.add('hidden-card');
        }
      });

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    }

    function goToIndex(index) {
      currentIndex = index;
      updateCarousel();
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
      });
    }

    // Card click selection (clicking a next or prev card brings it forward)
    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        if (index !== currentIndex) {
          goToIndex(index);
        }
      });
    });

    updateCarousel();
  }

  // Initialize both carousels
  setupCarousel('#certifications');
  setupCarousel('#achievements');

  /* ── PROJECT OUTCOMES & TECH PILLS ANIMATION ────────── */
  const projectCards = document.querySelectorAll('.project-card');

  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const outcomes = entry.target.querySelectorAll('.outcome-box.deal');
        outcomes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.add('visible');
          }, 200 + index * 120);
        });

        const pills = entry.target.querySelectorAll('.tech-pill.rubber');
        pills.forEach((pill, index) => {
          setTimeout(() => {
            pill.classList.add('visible');
          }, 400 + index * 80);
        });

        projectObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  projectCards.forEach(card => projectObserver.observe(card));

  /* ── EDUCATION TYPEWRITER EFFECT ───────────────────── */
  const educationSection = document.querySelector('#education');
  const eduObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.edu-typewriter');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 200);
        });
        eduObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (educationSection) {
    eduObserver.observe(educationSection);
  }

  /* ── INVOLVEMENT BULLETS STAGGER ───────────────────── */
  const involvementCards = document.querySelectorAll('.involvement-card');
  const invObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bullets = entry.target.querySelectorAll('li.stagger');
        bullets.forEach((li, index) => {
          setTimeout(() => {
            li.classList.add('visible');
          }, 200 + index * 100);
        });
        invObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  involvementCards.forEach(card => invObserver.observe(card));

  /* ── CONTACT FORM -> MAILTO ──────────────────────────── */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !subject || !message) {
        showFormFeedback('Please fill in all fields.', 'error');
        return;
      }

      const body = `From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
      const mailtoLink = `mailto:shashank.j8426@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      window.location.href = mailtoLink;
      showFormFeedback('Opening your email client...', 'success');

      setTimeout(() => {
        contactForm.reset();
      }, 1500);
    });
  }

  function showFormFeedback(msg, type) {
    let feedback = document.querySelector('.form-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'form-feedback';
      feedback.style.cssText = `
        padding: 10px 14px;
        border-radius: 8px;
        margin-top: 12px;
        font-size: 0.9rem;
        text-align: center;
        transition: opacity 0.3s ease;
      `;
      contactForm.appendChild(feedback);
    }

    feedback.textContent = msg;
    if (type === 'error') {
      feedback.style.background = 'rgba(224, 122, 95, 0.1)';
      feedback.style.color = '#e07a5f';
    } else {
      feedback.style.background = 'rgba(45, 106, 79, 0.1)';
      feedback.style.color = '#2d6a4f';
    }
    feedback.style.opacity = '1';

    setTimeout(() => {
      feedback.style.opacity = '0';
    }, 3000);
  }
  /* ── SCROLL PROGRESS BAR ──────────────────────── */
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        scrollProgress.style.width = ((scrollTop / docHeight) * 100) + '%';
      }
    });
  }

  /* ── PROJECT CARD ENTRANCE ANIMATION ────────────── */
  const projectsWrapper = document.querySelector('.projects-scroll-wrapper');

  function handleProjectsScroll() {
    if (!projectsWrapper || projectCards.length === 0) return;
    if (window.innerWidth <= 575) {
      projectCards.forEach(card => {
        card.style.transform = '';
        card.style.opacity = '';
        card.classList.remove('active-js');
      });
      return;
    }

    const rect = projectsWrapper.getBoundingClientRect();
    const scrolled = -rect.top;
    const scrollableRange = rect.height - window.innerHeight;
    
    if (scrollableRange <= 0) return;

    let progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    const cardProgress = progress * (projectCards.length - 1);

    projectCards.forEach((card, i) => {
      const relativeProgress = cardProgress - i;
      applyCardStyles(card, relativeProgress);
    });
  }

  /* ── CERTIFICATIONS CARD ENTRANCE ANIMATION ──────── */
  const certsWrapper = document.querySelector('.certs-scroll-wrapper');
  const certCards = document.querySelectorAll('.certs-stack-container .sticky-card');

  function handleCertsScroll() {
    if (!certsWrapper || certCards.length === 0) return;
    if (window.innerWidth <= 575) {
      certCards.forEach(card => {
        card.style.transform = '';
        card.style.opacity = '';
        card.classList.remove('active-js');
      });
      return;
    }

    const rect = certsWrapper.getBoundingClientRect();
    const scrolled = -rect.top;
    const scrollableRange = rect.height - window.innerHeight;

    if (scrollableRange <= 0) return;

    let progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    const cardProgress = progress * (certCards.length - 1);

    certCards.forEach((card, i) => {
      const relativeProgress = cardProgress - i;
      applyCardStyles(card, relativeProgress);
    });
  }

  /* ── ACHIEVEMENTS CARD ENTRANCE ANIMATION ────────── */
  const achieveWrapper = document.querySelector('.achieve-scroll-wrapper');
  const achieveCards = document.querySelectorAll('.achieve-stack-container .sticky-card');

  function handleAchieveScroll() {
    if (!achieveWrapper || achieveCards.length === 0) return;
    if (window.innerWidth <= 575) {
      achieveCards.forEach(card => {
        card.style.transform = '';
        card.style.opacity = '';
        card.classList.remove('active-js');
      });
      return;
    }

    const rect = achieveWrapper.getBoundingClientRect();
    const scrolled = -rect.top;
    const scrollableRange = rect.height - window.innerHeight;

    if (scrollableRange <= 0) return;

    let progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    const cardProgress = progress * (achieveCards.length - 1);

    achieveCards.forEach((card, i) => {
      const relativeProgress = cardProgress - i;
      applyCardStyles(card, relativeProgress);
    });
  }

  /* Helper function to compute smooth 3D overlapping translations */
  function applyCardStyles(card, relativeProgress) {
    if (relativeProgress < -1) {
      card.style.transform = 'translateX(120%) scale(0.95)';
      card.style.opacity = '0';
      card.classList.remove('active-js');
    } else if (relativeProgress >= -1 && relativeProgress < 0) {
      const percentIn = 1 + relativeProgress;
      const ease = 1 - Math.pow(1 - percentIn, 3); // ease-out cubic
      const translateX = (1 - ease) * 120;
      const scale = 0.95 + ease * 0.05;
      card.style.transform = `translateX(${translateX}%) scale(${scale})`;
      card.style.opacity = '1'; // Fully opaque to prevent ghosting
      card.classList.add('active-js');
    } else if (relativeProgress >= 0 && relativeProgress < 1) {
      const percentOut = relativeProgress;
      const translateX = -percentOut * 12;
      const scale = 1 - percentOut * 0.04;
      const opacity = 1 - percentOut * 0.45;
      card.style.transform = `translateX(${translateX}%) scale(${scale})`;
      card.style.opacity = opacity;
      card.classList.remove('active-js');
    } else {
      card.style.transform = 'translateX(-12%) scale(0.96)';
      card.style.opacity = '0.55';
      card.classList.remove('active-js');
    }
  }

  window.addEventListener('scroll', () => {
    handleProjectsScroll();
    handleCertsScroll();
    handleAchieveScroll();
  }, { passive: true });

  window.addEventListener('resize', () => {
    handleProjectsScroll();
    handleCertsScroll();
    handleAchieveScroll();
  });

  // Initial call
  handleProjectsScroll();
  handleCertsScroll();
  handleAchieveScroll();



  /* ── FLOATING HERO PARTICLES ───────────────────── */
  const heroSection = document.getElementById('landing');
  if (heroSection) {
    function spawnParticle() {
      const particle = document.createElement('div');
      particle.classList.add('hero-particle');
      const size = Math.random() * 6 + 3;
      const colors = ['var(--accent-lighter)', 'var(--coral-light)', 'var(--gold-light)'];
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${60 + Math.random() * 30}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay: ${Math.random() * 2}s;
        animation-duration: ${4 + Math.random() * 4}s;
      `;
      heroSection.appendChild(particle);
      setTimeout(() => particle.remove(), 8000);
    }
    // Spawn particles periodically
    setInterval(spawnParticle, 800);
    // Initial burst
    for (let i = 0; i < 6; i++) setTimeout(spawnParticle, i * 200);
  }

});
