/**
 * Shashank J — Portfolio Interactive Controller
 * Modular Journey Explorer & Verified Data Store
 */

// ── Complete Data Store with 100% Matched Authentic Notion & Repo Assets ──
const journeyCredentials = [
  // ── Category 1: Full-Stack Development (Mimo Core) ──
  {
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Development',
    title: 'Full-Stack Development Professional Certification',
    issuer: 'Mimo (Accredited Platform)',
    founder: 'Johannes Berger (Co-Founder & CEO, Mimo)',
    date: 'June 12, 2026',
    id: 'Credential ID: MIMO-FS-2026',
    type: 'Professional Certification',
    desc: 'Comprehensive full-stack engineering curriculum validation. Covered full MERN architecture (MongoDB, Express.js, React.js, Node.js), client-side state lifecycles, RESTful API design, database indexing, user authentication tokens (JWT), and end-to-end cloud deployment pipelines.',
    img: 'certificates/cert-mimo-fullstack.jpg'
  },
  {
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Development',
    title: 'Frontend Development & Responsive Architecture',
    issuer: 'Mimo (Accredited Platform)',
    founder: 'Johannes Berger (Co-Founder & CEO, Mimo)',
    date: 'June 12, 2026',
    id: 'Credential ID: MIMO-FE-2026',
    type: 'Frontend Engineering',
    desc: 'Validated mastery of modern client-facing web architecture: DOM manipulation, modern CSS flexbox & grid design systems, asynchronous JavaScript event loops, responsive layout engineering, and web accessibility standards.',
    img: 'certificates/cert-mimo-frontend.jpg'
  },
  {
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Development',
    title: 'Backend Development & Server Architecture',
    issuer: 'Mimo (Accredited Platform)',
    founder: 'Johannes Berger (Co-Founder & CEO, Mimo)',
    date: 'June 12, 2026',
    id: 'Credential ID: MIMO-BE-2026',
    type: 'Backend Engineering',
    desc: 'Validated server-side architecture configurations, Node.js runtime fundamentals, Express routing middleware pipelines, request security handling, rate limiting, and structured relational & document database integrations.',
    img: 'certificates/cert-mimo-backend.jpg'
  },
  {
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Development',
    title: 'React.js Component Architecture & Hooks',
    issuer: 'Mimo (Accredited Platform)',
    founder: 'Johannes Berger (Co-Founder & CEO, Mimo)',
    date: 'June 12, 2026',
    id: 'Credential ID: MIMO-REACT-2026',
    type: 'Modern UI Frameworks',
    desc: 'Advanced React Hooks (useState, useEffect, useMemo, useCallback), unidirectional state management, client-side SPA routing, virtual DOM optimization, custom hooks, and modular UI component composition.',
    img: 'certificates/cert-mimo-react.jpg'
  },
  {
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Development',
    title: 'SQL Relational Database Querying & Schema Design',
    issuer: 'Mimo (Accredited Platform)',
    founder: 'Johannes Berger (Co-Founder & CEO, Mimo)',
    date: 'June 12, 2026',
    id: 'Credential ID: MIMO-SQL-2026',
    type: 'Database Systems',
    desc: 'Relational database querying, multi-table complex JOIN operations, aggregation functions, subqueries, schema constraints, ACID transaction management, and indexing strategies for high-throughput reads.',
    img: 'certificates/cert-mimo-sql.jpg'
  },
  {
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Development',
    title: 'Python Programming & Software Fundamentals',
    issuer: 'Mimo (Accredited Platform)',
    founder: 'Johannes Berger (Co-Founder & CEO, Mimo)',
    date: 'June 12, 2026',
    id: 'Credential ID: MIMO-PY-2026',
    type: 'Core Programming',
    desc: 'Object-oriented programming in Python, algorithm implementation, script-based data transformations, file I/O streams, automation workflows, and backend service integration patterns.',
    img: 'certificates/cert-mimo-python.jpg'
  },

  // ── Category 2: AI, Generative AI & Agentic Systems ──
  {
    category: 'ai',
    categoryLabel: 'AI & Generative AI Systems',
    title: 'BCG X — Generative AI Job Simulation',
    issuer: 'BCG X (via Forage Platform)',
    founder: 'BCG X Data Science & AI Engineering Leadership',
    date: 'July 25, 2026',
    id: 'Verified Simulation Deliverables',
    type: 'Corporate AI Simulation',
    desc: 'Engineered an AI-powered financial analysis chatbot. Conducted automated financial document parsing (10-K filings), created structured data extraction pipelines, and benchmarked chatbot financial reasoning accuracy for corporate clients.',
    img: 'achievements/sim-bcgx-genai.jpg'
  },
  {
    category: 'ai',
    categoryLabel: 'AI & Generative AI Systems',
    title: 'What Is Generative AI? (NASBA Accredited CPE)',
    issuer: 'LinkedIn Learning',
    founder: 'National Association of State Boards of Accountancy (NASBA)',
    date: 'July 25, 2026',
    id: 'NASBA CPE Credits: 2.00 | Field: Information Technology',
    type: 'AI Credential (Accredited)',
    desc: 'Formal certification covering core Generative AI architectures, foundation models, LLM application development, prompt engineering methodologies, neural language models, and practical integration of AI agents into software engineering workflows.',
    img: 'certificates/cert-linkedin-genai.jpg'
  },
  {
    category: 'ai',
    categoryLabel: 'AI & Generative AI Systems',
    title: 'Google Cloud Agentic AI Day Challenge',
    issuer: 'Google Cloud (powered by Hack2skill)',
    founder: 'Google Cloud India & Hack2skill Team',
    date: 'July 2026',
    id: 'Certificate ID: 2025H2S06AID-114351',
    type: 'Agentic AI Challenge',
    desc: 'Designed and submitted multi-agent autonomous system architectures addressing enterprise operational friction utilizing Vertex AI orchestration patterns and Google Cloud principles.',
    img: 'certificates/hack-google-agentic.jpg'
  },
  {
    category: 'ai',
    categoryLabel: 'AI & Generative AI Systems',
    title: 'ViCoDathon 2026 — India\'s AI Vibe Coding Hackathon',
    issuer: 'AB Talks Organization',
    founder: 'Anil Bajpai (Founder, AB Talks)',
    date: 'August 14, 2026',
    id: 'Certificate ID: ABT-HK-GZGXR',
    type: 'Agentic AI Hackathon',
    desc: 'Competed in India\'s premier AI Vibe Coding challenge: accelerated autonomous prototyping utilizing modern coding agents, LLM pipelines, prompt-driven scaffolding, and rapid production deployment.',
    img: 'achievements/hack-vicodathon.jpg'
  },
  {
    category: 'ai',
    categoryLabel: 'AI & Generative AI Systems',
    title: 'Machine Learning Workshop — Developer Student Club',
    issuer: 'Developer Student Club (DSC), JSS STU',
    founder: 'DSC JSS STU Lead & Faculty Mentors',
    date: 'July 2, 2025',
    id: 'Technical Workshop Certificate',
    type: 'Machine Learning Workshop',
    desc: 'Hands-on technical workshop covering data manipulation pipelines in NumPy/Pandas, supervised regression & classification models with scikit-learn, and neural network fundamentals.',
    img: 'achievements/ws-ml-dsc.jpg'
  },

  // ── Category 3: Corporate Job Simulations ──
  {
    category: 'jobs',
    categoryLabel: 'Corporate Job Simulations',
    title: 'Deloitte Australia — Data Analytics & Forensic Tech',
    issuer: 'Deloitte Australia (via Forage Platform)',
    founder: 'Deloitte Forensic Technology Leadership Team',
    date: 'June 30, 2026',
    id: 'Verified Forensic Analytics Deliverables',
    type: 'Corporate Analytics Simulation',
    desc: 'Completed real-world corporate forensic analytics tasks: investigative transaction log inspection, anomaly detection in corporate financial streams, data preparation pipelines, and executive summary dashboard creation for senior forensic partners.',
    img: 'achievements/sim-deloitte-analytics.jpg'
  },

  // ── Category 4: National Hackathons & Competitions ──
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'Technotsav 2026 — Cybersecurity Track Competitor',
    issuer: 'Dept. of CSE (AI&ML) + IEEE CIS, VVCE Mysuru',
    founder: 'IEEE Computational Intelligence Society & VVCE Faculty',
    date: 'April 15–16, 2026',
    id: '24-Hour National Hackathon Competitor',
    type: 'National Hackathon',
    desc: 'Competed in the Cybersecurity domain track during an intensive 24-hour sprint. Architected real-time vulnerability detection telemetry and cryptographic integrity mechanisms under strict time constraints.',
    img: 'achievements/hack-technotsav.jpg'
  },
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'HACK-OLYMPIC 2026 — Organizing Team Volunteer & Operations',
    issuer: 'JSS STU + Artsy Technologies',
    founder: 'Dept. of CSE, JSS STU & Artsy Technologies Leadership',
    date: 'April 4–5, 2026',
    id: 'Certificate of Appreciation — JSS Mahavidyapeetha',
    type: 'Hackathon Leadership & Operations',
    desc: 'Core organizing team volunteer for a premier 24-hour national hackathon hosting 200+ engineering participants. Managed round logistics, technical infrastructure readiness, mentor scheduling, and jury coordination.',
    img: 'certificates/hack-olympic.jpg'
  },
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'Vibe with India 2.0 National Hackathon',
    issuer: 'HackWithIndia via DevNovate Platform',
    founder: 'Aviral Bhardwaj (Founder, HackWithIndia)',
    date: 'March 20, 2026',
    id: 'National Hackathon Participant',
    type: 'National Hackathon',
    desc: 'Competed in developing social-impact engineering solutions tackling regional infrastructure optimization, distributed resource tracking, and high-reliability data services.',
    img: 'certificates/hack-vibe-india.jpg'
  },
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'HackOS-ONE 2026 — Edition of Building Opportunity',
    issuer: 'SCANSKIP / HackOS Organization',
    founder: 'Yuktha Poorna Deepika.R (Event Coordinator)',
    date: 'May 2026',
    id: 'Certificate ID: Cer-20260525143636561884',
    type: 'National Hackathon Challenge',
    desc: 'Participated in fast-turnaround product sprints, engineering functional full-stack prototypes and deploying live demonstration instances within competitive hackathon deadlines.',
    img: 'certificates/hack-hackos.jpg'
  },

  // ── Category 5: Workshops & Open Source Programs ──
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: 'Commit31 — Month-Long Open-Source Contribution Program',
    issuer: 'Linux Campus Club (Dept. of CSE), JSS STU',
    founder: 'Dr. B T Prasanna (Faculty Coord) & Vaibhav M N (Chief Coord)',
    date: 'March 1–31, 2026',
    id: 'Verified Open Source Contributor • Pull Shark Badge',
    type: 'Structured Open Source Program',
    desc: 'Completed an intensive 31-day open-source contribution sprint organized by the Linux Campus Club. Authored pull requests, contributed feature patches, and actively maintained public repository codebases.',
    img: 'certificates/prog-commit31.jpg'
  },
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: '\'Hello Python\' Bootcamp — Developer Student Club',
    issuer: 'Developer Student Club (DSC), JSS STU',
    founder: 'DSC JSS STU Technical Lead Team',
    date: 'November 17, 2024',
    id: 'Bootcamp Certificate',
    type: 'Python Bootcamp',
    desc: 'Intensive practical bootcamp focused on core Python syntax, algorithm design, data structures, and script automation.',
    img: 'achievements/ws-hello-python.jpg'
  },
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: '\'Mystery of C\' Workshop — Linux Campus Club',
    issuer: 'Linux Campus Club (LCC), JSS STU',
    founder: 'Linux Campus Club Executive Team',
    date: 'November 8 & 11, 2024',
    id: 'C Systems Workshop',
    type: 'C Systems Programming',
    desc: 'Deep-dive into low-level memory allocation, pointers, struct alignment, and systems programming fundamentals in C.',
    img: 'achievements/ws-mystery-c.jpg'
  }
];

// Current index in active credential list
let activeCredentialsList = [...journeyCredentials];
let currentCredentialIndex = 0;

// Helper to scroll modal panels back to top
function scrollToModalTop() {
  const modalBody = document.querySelector('.modal-body-split');
  const modalDetails = document.querySelector('.modal-details-col');
  const modalDialog = document.querySelector('.modal-dialog');
  if (modalBody) modalBody.scrollTo({ top: 0, behavior: 'smooth' });
  if (modalDetails) modalDetails.scrollTo({ top: 0, behavior: 'smooth' });
  if (modalDialog) modalDialog.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Global Modal Control Functions ──
window.openJourneyModal = function(index = 0) {
  activeCredentialsList = [...journeyCredentials];
  currentCredentialIndex = Math.max(0, Math.min(index, activeCredentialsList.length - 1));
  renderModalContent();
  showModal();
  scrollToModalTop();
};

window.openJourneyCategory = function(category) {
  if (category === 'ai') {
    activeCredentialsList = journeyCredentials.filter(c => 
      c.category === 'ai' || 
      c.title.includes('BCG X') || 
      c.title.includes('Agentic AI') || 
      c.title.includes('ViCoDathon') || 
      c.title.includes('Machine Learning')
    );
  } else if (category === 'jobs') {
    activeCredentialsList = journeyCredentials.filter(c => 
      c.category === 'jobs' || 
      c.title.includes('BCG X') || 
      c.title.includes('Deloitte')
    );
  } else if (category === 'hackathons') {
    activeCredentialsList = journeyCredentials.filter(c => 
      c.category === 'hackathons' || 
      c.title.includes('ViCoDathon') || 
      c.title.includes('Agentic AI')
    );
  } else if (category === 'fullstack') {
    activeCredentialsList = journeyCredentials.filter(c => c.category === 'fullstack');
  } else if (category === 'workshops') {
    activeCredentialsList = journeyCredentials.filter(c => 
      c.category === 'workshops' || 
      c.title.includes('Commit31') || 
      c.title.includes('Workshop') || 
      c.title.includes('Bootcamp')
    );
  } else {
    activeCredentialsList = [...journeyCredentials];
  }
  
  if (activeCredentialsList.length === 0) activeCredentialsList = [...journeyCredentials];
  currentCredentialIndex = 0;
  renderModalContent();
  showModal();
  scrollToModalTop();
};

function renderModalContent() {
  const item = activeCredentialsList[currentCredentialIndex];
  if (!item) return;

  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalCounter = document.getElementById('modalCounter');
  const modalImage = document.getElementById('modalImage');
  const modalVisualBadge = document.getElementById('modalVisualBadge');
  const modalType = document.getElementById('modalType');
  const modalTitle = document.getElementById('modalTitle');
  const modalIssuer = document.getElementById('modalIssuer');
  const modalFounder = document.getElementById('modalFounder');
  const modalDate = document.getElementById('modalDate');
  const modalId = document.getElementById('modalId');
  const modalDesc = document.getElementById('modalDesc');

  if (modalCategoryTag) modalCategoryTag.textContent = item.categoryLabel || 'Verified Credential';
  if (modalCounter) modalCounter.textContent = `${currentCredentialIndex + 1} of ${activeCredentialsList.length}`;
  if (modalImage) {
    modalImage.src = item.img;
    modalImage.alt = item.title;
  }
  if (modalVisualBadge) modalVisualBadge.textContent = item.categoryLabel;
  if (modalType) modalType.textContent = item.type;
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalIssuer) modalIssuer.textContent = item.issuer;
  if (modalFounder) modalFounder.textContent = item.founder;
  if (modalDate) modalDate.textContent = item.date;
  if (modalId) modalId.textContent = item.id;
  if (modalDesc) modalDesc.textContent = item.desc;

  // Stepper Buttons state
  const prevBtn = document.getElementById('prevCredBtn');
  const nextBtn = document.getElementById('nextCredBtn');
  
  if (prevBtn) {
    prevBtn.disabled = (currentCredentialIndex === 0);
  }
  
  if (nextBtn) {
    const isLast = (currentCredentialIndex === activeCredentialsList.length - 1);
    if (isLast) {
      nextBtn.innerHTML = `Done &amp; Close <i class="fas fa-check"></i>`;
      nextBtn.classList.add('btn-done');
    } else {
      nextBtn.innerHTML = `Next <i class="fas fa-arrow-right"></i>`;
      nextBtn.classList.remove('btn-done');
    }
  }
}

function showModal() {
  const modal = document.getElementById('journeyModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal() {
  const modal = document.getElementById('journeyModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function stepCredential(delta) {
  // If on the last item and user clicks Next (delta > 0), close the modal!
  if (delta > 0 && currentCredentialIndex >= activeCredentialsList.length - 1) {
    hideModal();
    return;
  }

  const newIndex = currentCredentialIndex + delta;
  if (newIndex >= 0 && newIndex < activeCredentialsList.length) {
    currentCredentialIndex = newIndex;
    renderModalContent();
    scrollToModalTop();
  }
}

// ── DOM Ready Initializations ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll Progress Bar
  const scrollProgressBar = document.getElementById('scrollProgress');
  
  // 2. Navigation Bar & Scroll Spy
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');

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

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollProgressBar && height > 0) {
      const scrolled = (winScroll / height) * 100;
      scrollProgressBar.style.width = `${scrolled}%`;
    }

    if (navbar) {
      if (winScroll > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

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

  // 3. Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Hero Animated Counters
  let hasAnimatedCounters = false;
  const statElements = document.querySelectorAll('.hero-stat-num');
  const statsContainer = document.querySelector('.hero-stats-card');

  if (statsContainer) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedCounters) {
          hasAnimatedCounters = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statsObserver.observe(statsContainer);
  }

  function animateCounters() {
    statElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 1800;
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

  // 5. Skills Progress Rings Animation
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

  // 6. Modal Stepper Controls
  const prevBtn = document.getElementById('prevCredBtn');
  const nextBtn = document.getElementById('nextCredBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  if (prevBtn) prevBtn.addEventListener('click', () => stepCredential(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => stepCredential(1));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', hideModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', hideModal);

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('journeyModal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') hideModal();
    if (e.key === 'ArrowLeft') stepCredential(-1);
    if (e.key === 'ArrowRight') stepCredential(1);
  });

  // 7. Contact Form Handler
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

      window.location.href = `mailto:${recipient}?subject=${fullSubject}&body=${bodyContent}`;
    });
  }

  // 8. Hero Photo Tap / Click to Toggle Floating Badges
  const heroPhotoWrapper = document.getElementById('heroPhotoWrapper');
  if (heroPhotoWrapper) {
    heroPhotoWrapper.addEventListener('click', () => {
      heroPhotoWrapper.classList.toggle('badges-hidden');
    });
  }

});
