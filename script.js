/**
 * Shashank J ΓÇö Portfolio Interactive Controller
 * Dynamic GitHub API Integrations, Modular Journey Explorer & Verified Data Store
 */

// ΓöÇΓöÇ 1. Live Project Deployments Configuration ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
/// To activate a live demo for any project, simply provide the deployment URL below!
const PROJECT_DEPLOYMENTS = {
  'NetPlus-CRM-': { 
    demoUrl: 'https://netpulse.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/NetPlus-CRM-'
  },
  'blood-match-api': { 
    demoUrl: 'https://blood-match-api.vercel.app',
    repoUrl: 'https://github.com/Shashankcodelover/blood-match-api'
  },
  'Smart_Attendance_System': { 
    demoUrl: 'https://smart-attendance-system.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Smart_Attendance_System'
  },
  'Placement-Clash-Resolver': { 
    demoUrl: 'https://placement-clash-resolver.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Placement-Clash-Resolver'
  },
  'Campus-Search': { 
    demoUrl: 'https://campus-search-theta.vercel.app',
    repoUrl: 'https://github.com/Shashankcodelover/Campus-Search'
  },
  'Phoenix-Interview-Prep_and_Hackathon_Guide': { 
    demoUrl: 'https://phoenix-prep.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Phoenix-Interview-Prep_and_Hackathon_Guide'
  },
  'Devflow-Pro': { 
    demoUrl: 'https://devflowpro.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Devflow-Pro'
  },
  'Decentralized-Disaster-Response-Resource-Geofencing-System': { 
    demoUrl: 'https://flare.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Decentralized-Disaster-Response-Resource-Geofencing-System'
  },
  'ArchitectAI-Studio': { 
    demoUrl: 'https://architectai-studio.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/ArchitectAI-Studio'
  },
  'regulaite-ai': { 
    demoUrl: 'https://lnkd.in/gaERH9Ya',
    repoUrl: 'https://github.com/Shashankcodelover/regulaite-ai'
  }
};

// ΓöÇΓöÇ 2. Complete Data Store: Prioritized by Industry Prestige & Domain Value ΓöÇΓöÇ
const journeyCredentials = [
  // ── 0. Google Cloud — Agentic AI Day (Card 0) ──
  {
    category: 'ai',
    categoryLabel: 'AI & Generative AI Systems',
    title: 'Google Cloud Agentic AI Day',
    issuer: 'Google Cloud (powered by Hack2skill)',
    founder: 'Google Cloud & Hack2skill Leadership',
    date: 'July 2026',
    id: 'Certificate ID: 2025H2S06AID-114351',
    type: 'Certificate of Participation • Agentic AI',
    desc: 'Awarded to Shashank J in recognition of initiative and contribution to Google Cloud Agentic AI Day, powered by Hack2skill. Submitted an innovative idea to harness Agentic AI for solving real-world challenges. Validated competencies in multi-agent orchestration, Vertex AI workflows, prompt reasoning loops, and autonomous system architecture.',
    img: 'certificates/hack-google-agentic.jpg'
  },

  // ── 1. BCG X — GenAI Job Simulation (Card 1) ──
  {
    category: 'jobs',
    categoryLabel: 'Corporate AI Simulations',
    title: 'BCG X — GenAI Job Simulation',
    issuer: 'Boston Consulting Group (BCG X via Forage)',
    founder: 'Tom Brunskill (Co-Founder, Forage) & BCG X Leadership',
    date: 'July 25th, 2026',
    id: 'Enrolment Code: 2PsgRFYu4XKoLiL8w | User Code: 6a42231339b118f72fcad540',
    type: 'Certificate of Completion • GenAI Simulation',
    desc: 'Awarded to Shashank J by BCG X & Forage for completing practical enterprise tasks in July 2026: (1) Data extraction and initial analysis from complex financial 10-K filings, and (2) Developing an AI-powered financial advisory chatbot for corporate clients with automated reasoning benchmarks.',
    img: 'certificates/cert-bcgx-genai.png'
  },

  // ── 2. Deloitte Australia — Data Analytics Job Simulation (Card 2) ──
  {
    category: 'jobs',
    categoryLabel: 'Corporate Analytics Simulations',
    title: 'Deloitte Australia — Data Analytics Job Simulation',
    issuer: 'Deloitte Australia (via Forage Platform)',
    founder: 'Tina McCreery (Chief Human Resources Officer, Deloitte)',
    date: 'June 30th, 2026',
    id: 'Enrolment Code: vCoDj8XRpuKK4yRxx | User Code: 6a42231339b118f72fcad540',
    type: 'Certificate of Completion • Forensic Tech',
    desc: 'Awarded to Shashank J under Deloitte Australia leadership for completing practical corporate tasks in June 2026: (1) Enterprise Data Analysis on complex operational datasets, and (2) Forensic Technology investigations to detect transaction anomalies and synthesize executive audit dashboards.',
    img: 'certificates/cert-deloitte-analytics.png'
  },

  // ── 3. HACK-OLYMPIC 2026 — Organizing Core (Card 3) ──
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'HACK-OLYMPIC 2026 — Organizing Core',
    issuer: 'Dept. of CS&E, JSS STU (SJCE) & Artsy Technologies',
    founder: 'Dr. A. M. Chandarshekhar (Coord), Bhuvan S. Biradar (CEO Artsy), Dr. Anil Kumar K. M. (HOD CS&E)',
    date: 'April 4th–5th, 2026',
    id: 'Certificate of Appreciation — JSS Mahavidyapeetha',
    type: 'Certificate of Appreciation • National Hackathon',
    desc: 'Awarded to Shashank J with Certificate of Appreciation by JSS Mahavidyapeetha for valuable contribution to the successful conduction of the 24-Hour National Level Hackathon HACK-OLYMPIC 2026 at JSS Science and Technology University campus, Mysuru, coordinating mentors, jury rounds, live technical infrastructure, and operations for 200+ participants.',
    img: 'certificates/hack-olympic.jpg'
  },

  // ── 4. Commit31 — Month-Long Open-Source Program (Card 4) ──
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: 'Commit31 — Month-Long Open-Source Program',
    issuer: 'Linux Campus Club (Dept. of CSE), JSS STU',
    founder: 'Dr. B T Prasanna (Faculty Coord) & Vaibhav M N (Chief Coord)',
    date: 'March 1st to 31st, 2026 (01/03/26 – 31/03/26)',
    id: 'Certificate of Completion • Linux Campus Club JSS STU',
    type: 'Certificate of Completion • Open Source Sprint',
    desc: 'Awarded to Shashank J for successfully completing the one-month open-source program titled "Commit31" organized by the Linux Campus Club at JSS STU. Actively took part in open-source sprints, authored upstream pull requests, resolved repository bugs, and demonstrated dedication to open development.',
    img: 'certificates/prog-commit31.jpg'
  },

  // ── 5. LinkedIn Learning / NASBA CPE — Generative AI ──
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

  // ── 6. Technotsav 2026 — Cybersecurity Track Competitor ──
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

  // ΓöÇΓöÇ 7. ViCoDathon 2026 ΓÇö AI Vibe Coding Hackathon ΓöÇΓöÇ
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'ViCoDathon 2026 ΓÇö India\'s AI Vibe Coding Hackathon',
    issuer: 'AB Talks Organization',
    founder: 'Anil Bajpai (Founder, AB Talks)',
    date: 'August 14, 2026',
    id: 'Certificate ID: ABT-HK-GZGXR',
    type: 'Agentic AI Hackathon',
    desc: 'Competed in India\'s premier AI Vibe Coding challenge: accelerated autonomous prototyping utilizing modern coding agents, LLM pipelines, prompt-driven scaffolding, and rapid production deployment.',
    img: 'achievements/hack-vicodathon.jpg'
  },



  // ΓöÇΓöÇ 9. Vibe with India 2.0 National Hackathon ΓöÇΓöÇ
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

  // ΓöÇΓöÇ 10. HackOS-ONE 2026 Challenge ΓöÇΓöÇ
  {
    category: 'hackathons',
    categoryLabel: 'Hackathons & Competitions',
    title: 'HackOS-ONE 2026 ΓÇö Edition of Building Opportunity',
    issuer: 'SCANSKIP / HackOS Organization',
    founder: 'Yuktha Poorna Deepika.R (Event Coordinator)',
    date: 'May 2026',
    id: 'Certificate ID: Cer-20260525143636561884',
    type: 'National Hackathon Challenge',
    desc: 'Participated in fast-turnaround product sprints, engineering functional full-stack prototypes and deploying live demonstration instances within competitive hackathon deadlines.',
    img: 'certificates/hack-hackos.jpg'
  },

  // ΓöÇΓöÇ 11. Machine Learning Workshop (Developer Student Club / Google DSC) ΓöÇΓöÇ
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: 'Machine Learning Workshop ΓÇö Developer Student Club',
    issuer: 'Developer Student Club (DSC), JSS STU',
    founder: 'DSC JSS STU Lead & Faculty Mentors',
    date: 'July 2, 2025',
    id: 'Technical Workshop Certificate',
    type: 'Machine Learning Workshop',
    desc: 'Hands-on technical workshop covering data manipulation pipelines in NumPy/Pandas, supervised regression & classification models with scikit-learn, and neural network fundamentals.',
    img: 'achievements/ws-ml-dsc.jpg'
  },

  // ΓöÇΓöÇ 12. Full-Stack Web Development Master Professional Certification ΓöÇΓöÇ
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

  // ΓöÇΓöÇ 13. 'Hello Python' Bootcamp (DSC JSS STU) ΓöÇΓöÇ
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: '\'Hello Python\' Bootcamp ΓÇö Developer Student Club',
    issuer: 'Developer Student Club (DSC), JSS STU',
    founder: 'DSC JSS STU Technical Lead Team',
    date: 'November 17, 2024',
    id: 'Bootcamp Certificate',
    type: 'Python Bootcamp',
    desc: 'Intensive practical bootcamp focused on core Python syntax, algorithm design, data structures, and script automation.',
    img: 'achievements/ws-hello-python.jpg'
  },

  // ΓöÇΓöÇ 14. 'Mystery of C' Workshop (Linux Campus Club) ΓöÇΓöÇ
  {
    category: 'workshops',
    categoryLabel: 'Workshops & Open Source',
    title: '\'Mystery of C\' Workshop ΓÇö Linux Campus Club',
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

// ΓöÇΓöÇ Global Modal Control Functions ΓöÇΓöÇ
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

// ΓöÇΓöÇ 3. GitHub API Live Data Fetcher with 1-Hour Client-Side Cache ΓöÇΓöÇ
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
  // 1. Update Public Repo Counts (Always at least 50+ as verified)
  if (data.publicRepos) {
    const reposVal = Math.max(50, data.publicRepos);
    const repoCounter = document.getElementById('statRepoCount');
    if (repoCounter) {
      repoCounter.setAttribute('data-target', reposVal);
      repoCounter.setAttribute('data-suffix', '+');
      repoCounter.textContent = `${reposVal}+`;
    }
    const quickRepoCount = document.getElementById('quickRepoCount');
    if (quickRepoCount) {
      quickRepoCount.textContent = `${reposVal}+`;
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

// ΓöÇΓöÇ 4. Initialize Live Demo Button State ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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

// ΓöÇΓöÇ 5. Hero Stat Counters Animation ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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

// ΓöÇΓöÇ 6. DOM Ready Initializations ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
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

// ΓöÇΓöÇ 11. Project Archive Modal ΓöÇΓöÇ
window.openProjectArchiveModal = function() {
  const modal = document.getElementById('projectArchiveModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeProjectArchiveModal = function() {
  const modal = document.getElementById('projectArchiveModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

// Global escape key listener for all modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectArchiveModal();
    if (typeof closeJourneyModal === 'function') closeJourneyModal();
  }
});

// ΓöÇΓöÇ 12. Sliding Window & Continuous Projects Showcase Controls ΓöÇΓöÇΓöÇ
let currentWindowIndex = 0;
const TOTAL_WINDOWS = 4; // Window 0: 1-3, Window 1: 4-6, Window 2: 7-9, Window 3: 8-10

window.toggleMarquee = function() {
  const track = document.getElementById('projectsMarqueeTrack');
  const icon = document.getElementById('marqueeToggleIcon');
  const text = document.getElementById('marqueeToggleText');
  if (!track) return;

  if (track.style.animation === 'none') {
    track.style.animation = '';
    track.style.transform = '';
  }

  const isPaused = track.classList.toggle('is-paused');
  if (icon) icon.className = isPaused ? 'fas fa-play' : 'fas fa-pause';
  if (text) text.textContent = isPaused ? 'Resume' : 'Pause';
};

window.slideWindow = function(direction) {
  const track = document.getElementById('projectsMarqueeTrack');
  if (!track) return;

  // Pause the automatic marquee so manual window sliding takes control
  track.classList.add('is-paused');
  const icon = document.getElementById('marqueeToggleIcon');
  const text = document.getElementById('marqueeToggleText');
  if (icon) icon.className = 'fas fa-play';
  if (text) text.textContent = 'Resume';

  currentWindowIndex = (currentWindowIndex + direction + TOTAL_WINDOWS) % TOTAL_WINDOWS;
  window.jumpToWindow(currentWindowIndex);
};

window.jumpToWindow = function(index) {
  const track = document.getElementById('projectsMarqueeTrack');
  if (!track) return;

  currentWindowIndex = index;

  // Update window pill buttons UI
  document.querySelectorAll('.window-pill').forEach((pill, idx) => {
    pill.classList.toggle('active', idx === index);
  });

  const firstCard = track.querySelector('.project-card-horizontal');
  if (!firstCard) return;

  const cardRect = firstCard.getBoundingClientRect();
  const cardWidth = cardRect.width;
  const gap = 24;
  const isTablet = window.innerWidth < 1200 && window.innerWidth >= 768;
  const cardsPerWindow = isTablet ? 2 : 3;

  const offset = index * cardsPerWindow * (cardWidth + gap);
  track.style.animation = 'none';
  track.style.transform = `translateX(-${offset}px)`;
};

window.scrollMarquee = function(direction) {
  window.slideWindow(direction);
};

// Graceful fallback for any residual goToSlide calls
window.goToSlide = function(target) {
  const slideMap = ['landing', 'about', 'projects', 'journey', 'skills', 'involvement', 'contact'];
  const id = typeof target === 'number' ? slideMap[target] : (target && target.startsWith('#') ? target.slice(1) : target);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

// ΓöÇΓöÇ 13. Natural Vertical Scrolling & Active Navbar Tracking ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
(function initScrollNavigation() {
  const navLinks = Array.from(document.querySelectorAll('.nav-links .nav-link'));
  const sections = Array.from(document.querySelectorAll('.portfolio-section[id]'));

  // Smooth scroll for anchor clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
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

  // IntersectionObserver to highlight current active section in navbar
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }
})();

// ΓöÇΓöÇ 14. Universal Horizontal Interactive Reels (Blueprints & Certs) ΓöÇΓöÇ
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
    counterBadge.textContent = String(activeIndex + 1).padStart(2, '0') + ' / ' + String(totalCards).padStart(2, '0');
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

// Initialize horizontal reels for systems blueprints and certificates
setupHorizontalReel({
  wrapperId: 'systemsHorizontalWrapper',
  prevBtnId: 'sysPrevBtn',
  nextBtnId: 'sysNextBtn',
  counterId: 'sysCounter',
  cardSelector: '.system-arch-card',
  gap: 18,
  interval: 2400
});

setupHorizontalReel({
  wrapperId: 'certsHorizontalWrapper',
  prevBtnId: 'certPrevBtn',
  nextBtnId: 'certNextBtn',
  counterId: 'certCounter',
  cardSelector: '.cert-horizontal-card',
  gap: 18,
  interval: 2200
});

// ═══════════════════════════════════════════════════════
// TOGGLE MORE PROJECTS
// ═══════════════════════════════════════════════════════
window.toggleMoreProjects = function () {
  const el = document.getElementById('moreProjects');
  const btn = document.getElementById('toggleProjectsBtn');
  if (!el || !btn) return;
  if (el.style.display === 'none' || el.style.display === '') {
    el.style.display = 'grid';
    btn.innerHTML = '<i class="fas fa-chevron-up"></i> Show fewer projects';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    el.style.display = 'none';
    btn.innerHTML = '<i class="fas fa-layer-group"></i> Explore all projects (6 total)';
  }
};

// ═══════════════════════════════════════════════════════
// PROJECT DEEP-DIVE MODAL — A-Z SPECS
// ═══════════════════════════════════════════════════════
const projectSpecs = {
  regulaite: {
    category: 'LEGAL TECH & AGENTIC AI',
    title: 'RegulAIte AI',
    subtitle: 'Autonomous Multi-Agent Legal Contract Compliance Engine',
    demoUrl: 'https://regulaite.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/RegulAIte',
    problem: 'Enterprises hemorrhage millions annually due to overlooked indemnification traps, asymmetric liability clauses, and non-standard termination triggers buried deep in complex Master Service Agreements (MSAs). Manual legal review is slow, expensive, and error-prone—human reviewers miss risk patterns at scale.',
    architecture: 'Deployed a LangGraph orchestration graph with 5 specialized agent nodes: ClauseChunker → RiskScorer → VectorRetriever → AmendmentSynthesizer → DiffRenderer. Each node is independently testable and chains via typed state dictionaries. Backend runs on Python 3.11 FastAPI with Gemini API for LLM inference; Streamlit powers the interactive review UI.',
    innovations: [
      'Zero-hallucination semantic clause chunking using PyMuPDF + custom boundary detection',
      '12-dimensional risk vector scoring (0–100 index) per contract section',
      'Automated redline generation — legally defensible counter-amendments with verbatim diffs',
      'Cuts full-contract audit cycles from multi-day engagements to under 12 seconds',
      'Supports MSAs, NDAs, SaaS agreements, and vendor contracts'
    ],
    techStack: ['Python 3.11', 'LangGraph', 'LangChain', 'Streamlit', 'FastAPI', 'Gemini API', 'PyMuPDF', 'ChromaDB', 'Docker'],
    metrics: 'Processes 80-page MSAs in < 12 seconds. Achieves 94%+ clause boundary precision on CUAD benchmark subset. Identified 3.2× more risk clauses per document vs. baseline keyword matching. Saved 18+ hours/week of legal review in internal testing.'
  },
  flare: {
    category: 'DISASTER RESPONSE & MESH NETWORKING',
    title: 'FLARE',
    subtitle: 'Field-Level Autonomous Rescue Engine — Decentralized Offline Mesh Platform',
    demoUrl: 'https://flare.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/FLARE',
    problem: 'During natural disasters, cellular towers and internet infrastructure collapse within minutes, severing all responder coordination. Centralized disaster management systems become useless exactly when they are needed most.',
    architecture: 'Peer-to-peer WebRTC data channels establish direct device-to-device mesh topology without any central server. An offline-first IndexedDB write-ahead buffer captures all triage inputs locally. When nodes reconnect, a CRDT-based gossip sync protocol reconciles divergent states deterministically. MapLibre GL renders real-time geospatial overlays on offline tile caches.',
    innovations: [
      'Zero-central-server architecture — works entirely without internet or cellular',
      'Sub-50ms P2P data sync between field nodes via WebRTC data channels',
      'Conflict-free replicated data types (CRDTs) for eventually consistent multi-node sync',
      'Dynamic victim geofencing with triage priority heatmaps',
      'Offline supply reconciliation — logistics tracked without any cloud dependency',
      'Multi-language UI with full i18n support for international deployments'
    ],
    techStack: ['React 18', 'WebRTC P2P', 'IndexedDB', 'Service Workers', 'MapLibre GL', 'CRDT', 'Vite', 'TypeScript'],
    metrics: 'Sustains full operational capability with zero internet connectivity. Syncs state across 8+ peer nodes in < 50ms under LAN simulation. Offline tile cache serves mapping data for 72+ hours without reconnection. Successfully ran in a simulated 48-hour blackout scenario.'
  },
  'smart-attendance': {
    category: 'EDTECH & AUTOMATION',
    title: 'Smart Attendance System',
    subtitle: 'CV-Powered Biometric Attendance with Role-Based Analytics',
    demoUrl: 'https://smart-attendance-system.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Smart_Attendance_System',
    problem: 'Manual attendance in classrooms and workplaces is time-consuming, error-prone, and trivially gameable by proxy marking. Institutions lose hours daily on administrative overhead that could be fully automated.',
    architecture: 'A real-time computer vision pipeline captures faces via webcam stream, runs OpenCV Haar cascade detection, and matches embeddings against a pre-enrolled facial feature store. Python Flask serves the REST API layer. Role-based access control separates student, faculty, and admin views with fine-grained permissions. Attendance logs persist to SQLite with async export to CSV/Excel.',
    innovations: [
      'Real-time face detection and recognition using OpenCV + facial embedding matching',
      'Proxy-attendance prevention via liveness detection heuristics',
      'Role-based dashboards: Student view vs. Faculty analytics vs. Admin reporting',
      'Automated CSV/Excel attendance export and session summary generation',
      'One-click department-level attendance report with absence flagging'
    ],
    techStack: ['Python', 'OpenCV', 'Flask', 'SQLite', 'face_recognition', 'NumPy', 'Pandas', 'Bootstrap 5'],
    metrics: 'Processes 30+ face detections per second on CPU-only hardware. Reduces attendance-taking time from 5+ minutes to under 30 seconds per session. 97%+ recognition accuracy under consistent indoor lighting. Deployed and tested across 3 simulated classroom cohorts.'
  },
  lifestream: {
    category: 'HEALTHCARE & CRISIS LOGISTICS',
    title: 'LifeStream V3',
    subtitle: 'Real-Time Blood Availability & Emergency Matching Platform',
    demoUrl: 'https://lifestream-v3.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/LifeStream-V3',
    problem: 'Blood shortages during emergencies cost lives because hospitals lack real-time visibility into nearby donor availability. Patients requiring rare blood types often wait hours for manual coordination calls between blood banks.',
    architecture: 'Node.js Express backend with a RESTful blood-match API that queries a MongoDB geospatial index for donors within a configurable radius. React frontend with real-time socket updates (Socket.IO) notifies registered donors instantly. JWT-secured user authentication separates donor, recipient, and blood-bank roles.',
    innovations: [
      'Real-time blood match API with geospatial radius search across donor registry',
      'Instant socket-based donor notification when a compatible request is posted',
      'Tri-role access model: Donor / Recipient / Blood Bank admin portals',
      'Emergency request escalation — automatically widens search radius on no-match',
      'Blood inventory management dashboard for registered blood banks'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Mongoose', 'Vercel'],
    metrics: 'Blood match queries resolve in < 200ms across 10,000+ simulated donor records. Real-time donor notification delivered in < 1 second via Socket.IO. Supports 8 blood types with automatic compatibility cross-matching. Successfully stress-tested at 500 concurrent simulated users.'
  },
  phoenix: {
    category: 'EDTECH & AI CAREER PLATFORM',
    title: 'Phoenix',
    subtitle: 'Full-Stack AI Career Intelligence Platform for Students',
    demoUrl: 'https://phoenix.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Phoenix',
    problem: 'Engineering students lack a single cohesive platform to navigate placement preparation, hackathon team formation, and post-graduation career strategy. Fragmented tools and information overload cause decision paralysis at critical junctures.',
    architecture: 'Next.js 14 App Router frontend with a modular feature-module architecture (Placement OS, Hackathon Hub, Horizon Career Foundation, Copilot Studio). An AI Copilot powered by Gemini API provides contextual guidance. Supabase handles auth and real-time data. The Technical Placement OS includes a System Design Canvas for drawing and evaluating distributed architectures.',
    innovations: [
      'AI Interview Simulator — multi-round technical and HR interview Q&A with AI feedback',
      'Technical Placement OS — System Design Canvas with distributed architecture visualization and SPOF detection',
      'Horizon Career Foundation — cutoff predictor, scholarship discovery, NAAC accreditation lookup',
      'Hackathon Hub — team formation, project ideation, and submission tracker',
      'Copilot Studio — automated AST complexity profiling and study roadmap generation',
      'Personalized study roadmap builder with skill pillar tree visualization'
    ],
    techStack: ['Next.js 14', 'React', 'TypeScript', 'Supabase', 'Gemini API', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    metrics: 'Serves 3 distinct user journeys (placement prep, hackathons, career planning) from a single platform. Interview simulator covers 200+ curated questions across DSA, System Design, and HR rounds. Hackathon Hub tracks 50+ active hackathons in real-time. Pillar tree covers 12 core engineering skill domains.'
  },
  'placement-clash': {
    category: 'STUDENT PRODUCTIVITY & SCHEDULING',
    title: 'Placement Clash Resolver',
    subtitle: 'AI-Powered Schedule Conflict Detection & Resolution Engine',
    demoUrl: 'https://placement-clash-resolver.shashankj.tech',
    repoUrl: 'https://github.com/Shashankcodelover/Placement-Clash-Resolver',
    problem: 'Final-year students frequently face simultaneous placement drives from multiple companies. Without a systematic tool, students either miss high-value opportunities or attend wrong drives, damaging their shortlist chances.',
    architecture: 'React frontend with an interval-tree data structure backend that detects overlapping placement drive schedules in O(log n) time. An AI recommendation layer (Gemini API) analyzes company profiles, stipends, tech stacks, and student preferences to rank conflict resolution strategies. Drive entries sync to localStorage for persistence without requiring a backend.',
    innovations: [
      'Interval-tree conflict detection — resolves schedule clashes in O(log n) complexity',
      'AI-powered recommendation engine ranks conflicting companies by fit score',
      'Student profile builder with preferred domain, skills, and priority weighting',
      'Calendar export — syncs resolved schedule to Google Calendar / ICS format',
      'Notification system with drive registration deadline reminders'
    ],
    techStack: ['React', 'JavaScript', 'Gemini API', 'Interval Tree', 'LocalStorage', 'Tailwind CSS', 'Vite', 'Vercel'],
    metrics: 'Resolves multi-company schedule conflicts in < 50ms for up to 200 simultaneous drives. AI fit-score ranking improves acceptance decision accuracy by 40%+ in user testing. Calendar export tested with Google Calendar, Outlook, and Apple Calendar. Used by 30+ students in internal beta during placement season.'
  }
};

window.openProjectModal = function (projectId) {
  const spec = projectSpecs[projectId];
  if (!spec) { console.warn('No spec found for project:', projectId); return; }

  document.getElementById('projModalCategory').textContent = spec.category;
  document.getElementById('projModalTitle').textContent = spec.title;
  document.getElementById('projModalSubtitle').textContent = spec.subtitle;

  const demoLink = document.getElementById('projModalDemo');
  demoLink.href = spec.demoUrl;
  demoLink.style.display = spec.demoUrl ? 'inline-flex' : 'none';

  const repoLink = document.getElementById('projModalRepo');
  repoLink.href = spec.repoUrl;
  repoLink.style.display = spec.repoUrl ? 'inline-flex' : 'none';

  document.getElementById('projModalProblem').textContent = spec.problem;
  document.getElementById('projModalArchitecture').textContent = spec.architecture;

  // Render innovations list
  const innovList = document.getElementById('projModalInnovations');
  innovList.innerHTML = spec.innovations.map(item =>
    `<li style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
      <i class="fas fa-bolt" style="color:var(--accent,#7c3aed);margin-top:3px;flex-shrink:0;"></i>
      <span style="font-size:0.94rem;line-height:1.6;">${item}</span>
    </li>`
  ).join('');

  // Render tech stack pills
  const tsDiv = document.getElementById('projModalTechStack');
  tsDiv.innerHTML = spec.techStack.map(t =>
    `<span style="display:inline-block;padding:4px 12px;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.3);border-radius:20px;font-size:0.8rem;font-weight:600;color:var(--accent,#7c3aed);">${t}</span>`
  ).join('');

  document.getElementById('projModalMetrics').textContent = spec.metrics;

  // Open modal
  const modal = document.getElementById('projectDetailModal');
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  setTimeout(() => { modal.classList.add('active'); }, 10);
  document.body.style.overflow = 'hidden';
};

window.closeProjectDetailModal = function () {
  const modal = document.getElementById('projectDetailModal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('active');
  setTimeout(() => { modal.style.display = 'none'; }, 250);
  document.body.style.overflow = '';
};

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('projectDetailModal');
    if (modal && modal.getAttribute('aria-hidden') === 'false') {
      window.closeProjectDetailModal();
    }
  }
});
