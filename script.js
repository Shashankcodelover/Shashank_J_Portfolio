/**
 * Shashank J — Portfolio Interactive Controller
 * Dynamic GitHub API Integrations, Modular Journey Explorer & Verified Data Store
 */

// ── 1. Live Project Deployments Configuration ─────────────────────
// To activate a live demo for any project, simply provide the deployment URL below!
const PROJECT_DEPLOYMENTS = {
  'NetPlus-CRM-': { demoUrl: '' },
  'blood-match-api': { demoUrl: '' },
  'Smart_Attendance_System': { demoUrl: '' },
  'Placement-Clash-Resolver': { demoUrl: '' },
  'Campus-Search': { demoUrl: '' },
  'Phoenix-Interview-Prep_and_Hackathon_Guide': { demoUrl: '' },
  'Devflow-Pro': { demoUrl: '' },
  'Decentralized-Disaster-Response-Resource-Geofencing-System': { demoUrl: '' },
  'ArchitectAI-Studio': { demoUrl: '' },
  'regulaite-ai': { demoUrl: 'https://lnkd.in/gaERH9Ya' }
};

// ── 2. Complete Data Store: Prioritized by Industry Prestige & Domain Value ──
const journeyCredentials = [
  // ── 1. Google Cloud — Agentic AI Challenge (Top-Tier Global Brand) ──
  {
    category: 'ai',
    categoryLabel: 'AI & Generative AI Systems',
    title: 'Google Cloud Agentic AI Day Challenge',
    issuer: 'Google Cloud (powered by Hack2skill)',
    founder: 'Google Cloud India & Hack2skill Team',
    date: 'July 2026',
    id: 'Certificate ID: 2025H2S06AID-114351',
    type: 'Agentic AI Challenge',
    desc: 'Architected and engineered multi-agent autonomous system prototypes addressing enterprise operational friction utilizing Vertex AI orchestration patterns and Google Cloud principles.',
    img: 'certificates/hack-google-agentic.jpg'
  },

  // ── 2. BCG X — Generative AI Financial Chatbot Simulation ──
  {
    category: 'jobs',
    categoryLabel: 'Corporate Job Simulations',
    title: 'BCG X — Generative AI Job Simulation',
    issuer: 'BCG X (via Forage Platform)',
    founder: 'BCG X Data Science & AI Engineering Leadership',
    date: 'July 25, 2026',
    id: 'Verified Simulation Deliverables',
    type: 'Corporate AI Simulation',
    desc: 'Engineered an AI-powered financial analysis chatbot for corporate clients. Automated structured 10-K financial document extraction pipelines and benchmarked chatbot financial reasoning accuracy.',
    img: 'achievements/sim-bcgx-genai.jpg'
  },

  // ── 3. Deloitte Australia — Forensic Tech & Data Analytics ──
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

  // ── 4. LinkedIn Learning / NASBA CPE — Generative AI Certification ──
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

  // ── 5. Open Source Milestone — Commit31 Linux Campus Club ──
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

  // ── 6. Technotsav 2026 — Cybersecurity Track (IEEE CIS + VVCE) ──
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

  // ── 7. ViCoDathon 2026 — AI Vibe Coding Hackathon ──
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'ViCoDathon 2026 — India\'s AI Vibe Coding Hackathon',
    issuer: 'AB Talks Organization',
    founder: 'Anil Bajpai (Founder, AB Talks)',
    date: 'August 14, 2026',
    id: 'Certificate ID: ABT-HK-GZGXR',
    type: 'Agentic AI Hackathon',
    desc: 'Competed in India\'s premier AI Vibe Coding challenge: accelerated autonomous prototyping utilizing modern coding agents, LLM pipelines, prompt-driven scaffolding, and rapid production deployment.',
    img: 'achievements/hack-vicodathon.jpg'
  },

  // ── 8. HACK-OLYMPIC 2026 — Organizing Team Volunteer (JSS Mahavidyapeetha) ──
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'HACK-OLYMPIC 2026 — Organizing Team Volunteer',
    issuer: 'JSS STU + Artsy Technologies',
    founder: 'Dept. of CSE, JSS STU & Artsy Technologies Leadership',
    date: 'April 4–5, 2026',
    id: 'Certificate of Appreciation — JSS Mahavidyapeetha',
    type: 'Hackathon Leadership & Operations Volunteer',
    desc: 'Core operations volunteer for a premier 24-hour national hackathon hosting 200+ engineering participants. Managed round logistics, technical infrastructure readiness, mentor scheduling, and jury coordination.',
    img: 'certificates/hack-olympic.jpg'
  },

  // ── 9. Vibe with India 2.0 National Hackathon ──
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

  // ── 10. HackOS-ONE 2026 Challenge ──
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

  // ── 11. Machine Learning Workshop (Developer Student Club / Google DSC) ──
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: 'Machine Learning Workshop — Developer Student Club',
    issuer: 'Developer Student Club (DSC), JSS STU',
    founder: 'DSC JSS STU Lead & Faculty Mentors',
    date: 'July 2, 2025',
    id: 'Technical Workshop Certificate',
    type: 'Machine Learning Workshop',
    desc: 'Hands-on technical workshop covering data manipulation pipelines in NumPy/Pandas, supervised regression & classification models with scikit-learn, and neural network fundamentals.',
    img: 'achievements/ws-ml-dsc.jpg'
  },

  // ── 12. Full-Stack Web Development Master Professional Certification ──
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

  // ── 13. 'Hello Python' Bootcamp (DSC JSS STU) ──
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

  // ── 14. 'Mystery of C' Workshop (Linux Campus Club) ──
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
      c.title.includes('Google Cloud') || 
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
      c.title.includes('Technotsav') || 
      c.title.includes('ViCoDathon') || 
      c.title.includes('HACK-OLYMPIC') || 
      c.title.includes('Google Cloud') || 
      c.title.includes('Vibe with India') || 
      c.title.includes('HackOS')
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

// ── 3. GitHub API Live Data Fetcher with 1-Hour Client-Side Cache ──
const GITHUB_USERNAME = 'Shashankcodelover';
const CACHE_KEY = 'shashank_portfolio_github_cache_v2';
const CACHE_TTL = 3600 * 1000; // 1 Hour TTL

function formatPushedDate(isoString) {
  if (!isoString) return 'Updated recently';
  try {
    const d = new Date(isoString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch (e) {
    return 'Updated recently';
  }
}

async function initGitHubDynamicData() {
  let cachedData = null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Date.now() - parsed.timestamp < CACHE_TTL) {
        cachedData = parsed.data;
      }
    }
  } catch (e) {
    console.warn('LocalStorage error reading GitHub cache:', e);
  }

  if (cachedData) {
    applyGitHubData(cachedData);
  } else {
    // Fetch live from GitHub public REST API
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      ]);

      if (userRes.ok && reposRes.ok) {
        const user = await userRes.json();
        const repos = await reposRes.json();

        // Calculate language counts and pushed dates
        const repoDates = {};
        const langCounts = {};

        repos.forEach(repo => {
          repoDates[repo.name] = repo.pushed_at;
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });

        const liveData = {
          publicRepos: user.public_repos || 43,
          repoDates: repoDates,
          languages: langCounts
        };

        applyGitHubData(liveData);

        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: liveData
          }));
        } catch (e) {}
      }
    } catch (err) {
      console.warn('Live GitHub API fetch failed; using fallback dataset:', err);
    }
  }
}

function applyGitHubData(data) {
  // 1. Update Public Repo Counts
  if (data.publicRepos) {
    const repoCounter = document.getElementById('statRepoCount');
    if (repoCounter) {
      repoCounter.setAttribute('data-target', data.publicRepos);
      repoCounter.textContent = data.publicRepos;
    }
    const quickRepoCount = document.getElementById('quickRepoCount');
    if (quickRepoCount) {
      quickRepoCount.textContent = data.publicRepos;
    }
  }

  // 2. Update Per-Project "Last updated" Dates
  if (data.repoDates) {
    document.querySelectorAll('.project-card[data-repo]').forEach(card => {
      const repoName = card.getAttribute('data-repo');
      const dateEl = card.querySelector('.repo-pushed-at');
      if (dateEl && data.repoDates[repoName]) {
        dateEl.textContent = formatPushedDate(data.repoDates[repoName]);
      }
    });
  }

  // 3. Update Real Language Distribution Rings
  if (data.languages) {
    const totalWithLang = Object.values(data.languages).reduce((a, b) => a + b, 0) || 1;
    const jsCount = data.languages['JavaScript'] || 7;
    const tsCount = data.languages['TypeScript'] || 6;
    const pyCount = data.languages['Python'] || 4;
    const otherCount = totalWithLang - (jsCount + tsCount + pyCount);

    const jsPct = Math.round((jsCount / totalWithLang) * 100) || 59;
    const tsPct = Math.round((tsCount / totalWithLang) * 100) || 25;
    const pyPct = Math.round((pyCount / totalWithLang) * 100) || 10;
    const otherPct = Math.max(1, 100 - (jsPct + tsPct + pyPct)) || 6;

    updateRing('ring-js', 'percent-js', jsPct);
    updateRing('ring-ts', 'percent-ts', tsPct);
    updateRing('ring-py', 'percent-py', pyPct);
    updateRing('ring-other', 'percent-other', otherPct);
  }
}

function updateRing(ringId, percentId, val) {
  const ring = document.getElementById(ringId);
  const text = document.getElementById(percentId);
  if (ring) {
    ring.setAttribute('data-percent', val);
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (val / 100) * circumference;
    ring.style.strokeDashoffset = `${offset}`;
  }
  if (text) {
    text.textContent = `${val}%`;
  }
}

// ── 4. Initialize Live Demo Button State ─────────────────────────
function initLiveDemoButtons() {
  document.querySelectorAll('[data-demo-for]').forEach(btn => {
    const repo = btn.getAttribute('data-demo-for');
    const deployment = PROJECT_DEPLOYMENTS[repo];

    if (deployment && deployment.demoUrl && deployment.demoUrl.trim() !== '') {
      btn.setAttribute('href', deployment.demoUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
      btn.classList.add('btn-demo-active');
      btn.classList.remove('btn-demo-disabled');
      btn.innerHTML = `<i class="fas fa-external-link-alt"></i> Live Demo`;
    } else {
      btn.setAttribute('href', '#');
      btn.classList.add('btn-demo-disabled');
      btn.classList.remove('btn-demo-active');
      btn.innerHTML = `<i class="fas fa-play"></i> Live Demo (Soon)`;
      btn.setAttribute('title', 'Live deployment URL will be linked here once active.');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
  });
}

// ── 5. Hero Stat Counters Animation ─────────────────────────────
function animateCounters() {
  const statElements = document.querySelectorAll('.hero-stat-num');
  statElements.forEach(counter => {
    const target = +counter.getAttribute('data-target') || 0;
    const suffix = counter.getAttribute('data-suffix') || '';
    if (target === 0) return;

    const duration = 1200;
    const steps = 30;
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

// ── 6. DOM Ready Initializations ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // 1. Trigger Counter Animation Immediately (prevents staying stuck at 0)
  animateCounters();

  // 2. Fetch & Populate Live GitHub Data
  initGitHubDynamicData();

  // 3. Initialize Configurable Live Demo Buttons
  initLiveDemoButtons();

  // 4. Scroll Progress Bar
  const scrollProgressBar = document.getElementById('scrollProgress');
  
  // 5. Navigation Bar & Mobile Menu
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

  // 6. Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  // 7. Skills Progress Rings Animation
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
        }, 120);
        observer.unobserve(ring);
      }
    });
  }, { threshold: 0.15 });
  skillRings.forEach(ring => skillsObserver.observe(ring));

  // 8. Modal Stepper Controls
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

  // 9. Contact Form Handler
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

  // 10. Hero Photo Tap & Mobile Toggle Button Handler
  const heroPhotoWrapper = document.getElementById('heroPhotoWrapper');
  const photoTagsToggleBtn = document.getElementById('photoTagsToggleBtn');
  const tagsToggleText = document.getElementById('tagsToggleText');

  function toggleMobileBadges() {
    if (!heroPhotoWrapper) return;
    const isVisible = heroPhotoWrapper.classList.toggle('mobile-badges-visible');
    if (photoTagsToggleBtn) {
      photoTagsToggleBtn.classList.toggle('active', isVisible);
      const icon = photoTagsToggleBtn.querySelector('i');
      if (icon) {
        icon.className = isVisible ? 'fas fa-times' : 'fas fa-tags';
      }
    }
    if (tagsToggleText) {
      tagsToggleText.textContent = isVisible ? 'Hide Highlights' : 'Show Highlights';
    }
  }

  if (photoTagsToggleBtn) {
    photoTagsToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileBadges();
    });
  }

  if (heroPhotoWrapper) {
    heroPhotoWrapper.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleMobileBadges();
      }
    });
  }

});

// ── 11. Project Archive Modal ──

window.openProjectArchiveModal = function() {
  const modal = document.getElementById('projectArchiveModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }
};

window.closeProjectArchiveModal = function() {
  const modal = document.getElementById('projectArchiveModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
};

// Global escape key listener for new modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectArchiveModal();
  }
});

// ── 12. 3D Presentation Deck Controller (Frame-Lifting & Parallax Stack) ──
(function initPresentationDeck() {
  const deck = document.getElementById('presentationDeck');
  if (!deck) return;

  const slides = Array.from(deck.querySelectorAll('.deck-slide'));
  const totalSlides = slides.length;
  let currentSlide = 0;
  let isTransitioning = false;

  const counterEl = document.getElementById('deckCounter');
  const dots = Array.from(document.querySelectorAll('.deck-dot'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links .nav-link'));

  function updateDeckState(targetIndex) {
    if (targetIndex < 0 || targetIndex >= totalSlides) return;
    currentSlide = targetIndex;

    slides.forEach((slide, idx) => {
      slide.classList.remove('lifted', 'active', 'queued', 'deep-queued');
      if (idx < currentSlide) {
        // Frame is lifted up into the air and away
        slide.classList.add('lifted');
      } else if (idx === currentSlide) {
        // Frame is front and center
        slide.classList.add('active');
      } else if (idx === currentSlide + 1) {
        // Frame rests directly behind the active frame
        slide.classList.add('queued');
      } else {
        // Frame is deep in the deck stack
        slide.classList.add('deep-queued');
      }
    });

    // Update Stepper Dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });

    // Update Counter (e.g. 01 / 07)
    if (counterEl) {
      counterEl.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    }

    // Update Navbar Links
    const slideIds = slides.map(s => '#' + s.id);
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === slideIds[currentSlide]);
    });
  }

  window.goToSlide = function(index) {
    if (index === currentSlide) return;
    if (isTransitioning) return;
    if (index < 0 || index >= totalSlides) return;

    isTransitioning = true;
    updateDeckState(index);
    setTimeout(() => {
      isTransitioning = false;
    }, 850);
  };

  window.deckNext = function() {
    if (currentSlide < totalSlides - 1) {
      window.goToSlide(currentSlide + 1);
    }
  };

  window.deckPrev = function() {
    if (currentSlide > 0) {
      window.goToSlide(currentSlide - 1);
    }
  };

  // Stepper Up / Down Controls
  const prevBtn = document.getElementById('deckPrevBtn');
  const nextBtn = document.getElementById('deckNextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => window.deckPrev());
  if (nextBtn) nextBtn.addEventListener('click', () => window.deckNext());

  // Stepper Dot Clicks
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide'), 10);
      window.goToSlide(idx);
    });
  });

  // Intercept Navbar Clicks for Seamless Slide Switching
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetIdx = slides.findIndex(s => '#' + s.id === href);
        if (targetIdx !== -1) {
          e.preventDefault();
          window.goToSlide(targetIdx);
          // Close mobile menu if open
          const navLinksContainer = document.getElementById('navLinks');
          const navToggle = document.getElementById('navToggle');
          if (navLinksContainer && navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
          }
        }
      }
    });
  });

  // Wheel-based stage lifting
  let lastWheelTime = 0;
  window.addEventListener('wheel', (e) => {
    const now = Date.now();
    if (now - lastWheelTime < 450) return; // Debounce
    lastWheelTime = now;

    if (isTransitioning) return;
    // Don't intercept when inspecting modals
    if (document.querySelector('.journey-modal.active, .custom-flat-modal.active')) return;

    // In-Frame Substage Interception for Slide 1 (About)
    if (currentSlide === 1) {
      if (e.deltaY > 25) {
        if (window.currentAboutSubStage === 0) {
          e.preventDefault();
          window.switchSubStage('about', 1);
          return;
        } else {
          e.preventDefault();
          window.deckNext();
          return;
        }
      } else if (e.deltaY < -25) {
        if (window.currentAboutSubStage === 1) {
          e.preventDefault();
          window.switchSubStage('about', 0);
          return;
        } else {
          e.preventDefault();
          window.deckPrev();
          return;
        }
      }
    }

    // Default slide navigation
    if (e.deltaY > 40) {
      e.preventDefault();
      window.deckNext();
    } else if (e.deltaY < -40) {
      e.preventDefault();
      window.deckPrev();
    }
  }, { passive: false });

  // Touch swipe support for mobile
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (isTransitioning) return;
    if (document.querySelector('.journey-modal.active, .custom-flat-modal.active')) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiping up (moving forward)
        if (currentSlide === 1 && window.currentAboutSubStage === 0) {
          window.switchSubStage('about', 1);
        } else {
          window.deckNext();
        }
      } else {
        // Swiping down (moving backward)
        if (currentSlide === 1 && window.currentAboutSubStage === 1) {
          window.switchSubStage('about', 0);
        } else {
          window.deckPrev();
        }
      }
    }
  }, { passive: true });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.journey-modal.active, .custom-flat-modal.active')) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      if (currentSlide === 1 && window.currentAboutSubStage === 0) {
        window.switchSubStage('about', 1);
      } else {
        window.deckNext();
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (currentSlide === 1 && window.currentAboutSubStage === 1) {
        window.switchSubStage('about', 0);
      } else {
        window.deckPrev();
      }
    }
  });

  // Initialize initial state
  updateDeckState(0);
})();

// ── 13. In-Frame Sub-Stage Zoom & Toggle Controller ──
window.currentAboutSubStage = 0;
window.switchSubStage = function(slideKey, stageIdx) {
  if (slideKey === 'about') {
    const btn0 = document.getElementById('substageAboutBtn0');
    const btn1 = document.getElementById('substageAboutBtn1');
    const view0 = document.getElementById('substageAbout0');
    const view1 = document.getElementById('substageAbout1');

    if (!view0 || !view1) return;

    if (stageIdx === 0) {
      window.currentAboutSubStage = 0;
      btn0?.classList.add('active');
      btn1?.classList.remove('active');

      view0.classList.remove('zoom-out');
      view0.classList.add('active');

      view1.classList.remove('active');
    } else {
      window.currentAboutSubStage = 1;
      btn1?.classList.add('active');
      btn0?.classList.remove('active');

      view0.classList.add('zoom-out');
      view0.classList.remove('active');

      view1.classList.add('active');
    }
  }
};

// ── 14. Universal Horizontal Interactive Reels (Visible 0.5s Transitions / 2.2s Hold) ──
function setupHorizontalReel({ wrapperId, prevBtnId, nextBtnId, counterId, cardSelector, gap = 20, interval = 2200 }) {
  const wrapper = document.getElementById(wrapperId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const counterBadge = document.getElementById(counterId);

  if (!wrapper) return;

  const cards = Array.from(wrapper.querySelectorAll(cardSelector));
  const totalCards = cards.length;
  let autoScrollTimer = null;
  let isUserInteracting = false;

  function updateCounter() {
    if (!counterBadge || totalCards === 0) return;
    const scrollLeft = wrapper.scrollLeft;
    const cardWidth = (cards[0]?.offsetWidth || 480) + gap;
    const activeIndex = Math.min(totalCards - 1, Math.max(0, Math.round(scrollLeft / cardWidth)));
    counterBadge.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(totalCards).padStart(2, '0')}`;
  }

  function scrollByCard(direction) {
    if (!cards.length) return;
    const cardWidth = (cards[0]?.offsetWidth || 480) + gap;
    wrapper.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollByCard(-1);
      resetAutoScroll();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollByCard(1);
      resetAutoScroll();
    });
  }

  wrapper.addEventListener('scroll', updateCounter, { passive: true });

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollTimer = setInterval(() => {
      if (isUserInteracting) return;
      if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 30) {
        wrapper.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollByCard(1);
      }
    }, interval);
  }

  function stopAutoScroll() {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }
  }

  function resetAutoScroll() {
    stopAutoScroll();
    setTimeout(startAutoScroll, 4000);
  }

  wrapper.addEventListener('mouseenter', () => { isUserInteracting = true; });
  wrapper.addEventListener('mouseleave', () => { isUserInteracting = false; });
  wrapper.addEventListener('touchstart', () => { isUserInteracting = true; }, { passive: true });
  wrapper.addEventListener('touchend', () => { isUserInteracting = false; }, { passive: true });

  wrapper.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      wrapper.scrollLeft += e.deltaY;
      e.stopPropagation();
    }
  }, { passive: true });

  startAutoScroll();
  updateCounter();
}

// Initialize all three horizontal reels with responsive, swift 1.6s - 1.8s auto-glide cadence
setupHorizontalReel({
  wrapperId: 'projectsHorizontalWrapper',
  prevBtnId: 'projPrevBtn',
  nextBtnId: 'projNextBtn',
  counterId: 'projCounter',
  cardSelector: '.project-card-horizontal',
  gap: 22,
  interval: 1600
});

setupHorizontalReel({
  wrapperId: 'systemsHorizontalWrapper',
  prevBtnId: 'sysPrevBtn',
  nextBtnId: 'sysNextBtn',
  counterId: 'sysCounter',
  cardSelector: '.system-arch-card',
  gap: 18,
  interval: 1800
});

setupHorizontalReel({
  wrapperId: 'certsHorizontalWrapper',
  prevBtnId: 'certPrevBtn',
  nextBtnId: 'certNextBtn',
  counterId: 'certCounter',
  cardSelector: '.cert-horizontal-card',
  gap: 18,
  interval: 1800
});

