/* ═══════════════════════════════════════════════════════
   SHASHANK J — PORTFOLIO v3.0 SCRIPT
   Premium Dark Theme · Vanilla JavaScript
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. SCROLL PROGRESS BAR ──────────────────────────
  const scrollProgress = document.getElementById('scrollProgress');
  
  // ── 2. NAVBAR ───────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  // ── 3. HAMBURGER MENU ──────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // ── SCROLL EVENTS ──────────────────────────────────
  window.addEventListener('scroll', () => {
    // Progress bar
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollProgress && height > 0) {
      scrollProgress.style.width = (winScroll / height) * 100 + '%';
    }

    // Navbar scrolled state
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }

    // Active link tracking
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
  });

  // ── 4. SCROLL REVEAL ───────────────────────────────
  const revealEls = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  // ── 5. STAGGER ANIMATIONS ─────────────────────────
  const staggerGroups = document.querySelectorAll('[data-stagger-group]');
  const staggerObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-stagger-item]').forEach((item, i) => {
          setTimeout(() => item.classList.add('visible'), i * 100);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  staggerGroups.forEach(g => staggerObs.observe(g));

  // ── 6. HERO COUNTER ANIMATION ─────────────────────
  let countersAnimated = false;
  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    document.querySelectorAll('.hero-stat-num').forEach(counter => {
      const target = +counter.dataset.target;
      const suffix = counter.dataset.suffix || '';
      const duration = 2000;
      const inc = target / (duration / 16);
      let cur = 0;
      const update = () => {
        cur += inc;
        if (cur < target) {
          counter.textContent = Math.ceil(cur) + suffix;
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + suffix;
        }
      };
      update();
    });
  }

  // Observe hero stats for counter animation
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const heroObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          heroObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    heroObs.observe(heroStats);
  }

  // ── 7. SKILL RING ANIMATION ───────────────────────
  const circumference = 2 * Math.PI * 52; // ~326.73
  document.querySelectorAll('.ring-fill-circle').forEach(c => {
    c.style.strokeDasharray = circumference;
    c.style.strokeDashoffset = circumference;
  });

  const ringItems = document.querySelectorAll('.ring-item');
  const ringObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circle = entry.target.querySelector('.ring-fill-circle');
        const valEl = entry.target.querySelector('.ring-val');
        if (circle) {
          const pct = +circle.dataset.percent || 0;
          const offset = circumference - (pct / 100) * circumference;
          setTimeout(() => {
            circle.style.transition = 'stroke-dashoffset 1.5s ease-out';
            circle.style.strokeDashoffset = offset;
          }, 200);
          // Animate number
          if (valEl) {
            const target = +valEl.dataset.target || pct;
            const dur = 1500;
            const inc = target / (dur / 16);
            let cur = 0;
            const update = () => {
              cur += inc;
              if (cur < target) {
                valEl.textContent = Math.ceil(cur) + '%';
                requestAnimationFrame(update);
              } else {
                valEl.textContent = target + '%';
              }
            };
            setTimeout(update, 200);
          }
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  ringItems.forEach(item => ringObs.observe(item));

  // ── 8. CONTACT FORM ───────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || '';
      const email = document.getElementById('contactEmail')?.value || '';
      const subject = document.getElementById('contactSubject')?.value || '';
      const message = document.getElementById('contactMessage')?.value || '';
      const mailto = 'mailto:shashank.j8426@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      window.location.href = mailto;
    });
  }

  // ── 9. CERTIFICATE FILTERING ──────────────────────
  const certBtns = document.querySelectorAll('.cert-cat-btn');
  const certCards = document.querySelectorAll('.cert-card');

  certBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      certCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        }, 250);
      });
    });
  });

  // ── 10. CERTIFICATE MODAL ─────────────────────────
  const certModal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalCertImg');
  const modalTitle = document.getElementById('modalCertTitle');
  const modalIssuer = document.getElementById('modalCertIssuer');
  const modalDate = document.getElementById('modalCertDate');
  const modalType = document.getElementById('modalCertType');
  const modalDesc = document.getElementById('modalCertDesc');
  const modalClose = document.querySelector('.cert-modal-close');
  const modalOverlay = document.querySelector('.cert-modal-overlay');

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      if (modalImg) modalImg.src = card.dataset.img || '';
      if (modalTitle) modalTitle.textContent = card.dataset.title || '';
      if (modalIssuer) modalIssuer.textContent = card.dataset.issuer || '';
      if (modalDate) modalDate.textContent = card.dataset.date || '';
      if (modalType) modalType.textContent = card.dataset.type || '';
      if (modalDesc) modalDesc.textContent = card.dataset.desc || '';
      if (certModal) {
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ── 11. STAGGER LIST ITEMS ────────────────────────
  document.querySelectorAll('.involvement-right ul').forEach(list => {
    const listObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('li.stagger').forEach((li, i) => {
            setTimeout(() => li.classList.add('visible'), i * 100);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    listObs.observe(list);
  });

});
