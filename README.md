# Shashank J — Professional Software Engineering Portfolio

A premium, interactive, and responsive portfolio showcasing technical capability, key projects, leadership involvement, certifications, and hackathon achievements.

Built with **HTML5, Vanilla CSS3 (Custom Design System with HSL variables), and Vanilla JavaScript**.

## 🚀 Key Technical Features Added

### 1. Scroll-Linked Horizontal Overlapping Card Decks
*   Used on **Projects**, **Certifications**, and **Achievements** sections.
*   Pins the viewport in place and translates incoming cards horizontally from the right using custom scroll-progress bindings.
*   Simulates 3D deck depth: older cards translate slightly left (`translateX(-12%)`), scale down (`scale(0.96)`), and dim to form a stacked deck under the current card.
*   Opaque card backgrounds eliminate ghosting/bleeding of text during slides.
*   Large booklet card dimensions (`520px` width) for optimal reading layout.

### 2. High-Performance Design System
*   Smooth page-reveal animations (`reveal-up`, `reveal-left`, etc.) driven by JavaScript intersection observers.
*   Dynamic technical skills dials (CSS circular SVG tracks) showing development percentages.
*   Zero external JS animation libraries (such as GSAP or ScrollMagic) utilized, maintaining lightning-fast load times and keeping rendering performance at 60fps.

---

## 📂 Project Section Directory

If you want to update, add, or edit content, locate the specific files below:

### 1. Navigation & Headers
*   **Source File**: [index.html](file:///index.html) (Navbar lines 20–45, Hero lines 60–120)
*   **Styles**: [style.css](file:///style.css) (`/* ── NAVIGATION & NAVBAR ── */` section)

### 2. About Me & Personal Info
*   **Source File**: [index.html](file:///index.html) (`<section id="about">`)
*   **Styles**: [style.css](file:///style.css) (`/* ── ABOUT SECTION ── */`)

### 3. Leadership & Involvement
*   **Source File**: [index.html](file:///index.html) (`<section id="involvement">`)
*   **Styles**: [style.css](file:///style.css) (`/* ── LEADERSHIP & INVOLVEMENT ── */`)

### 4. Education Highlights
*   **Source File**: [index.html](file:///index.html) (`<section id="education">`)
*   **Styles**: [style.css](file:///style.css) (`/* ── EDUCATION SECTION ── */`)

### 5. Key Projects (Horizontal Booklet Slider)
*   **Source File**: [index.html](file:///index.html) (`<section id="projects">` wrapper)
*   **Styles**: [style.css](file:///style.css) (`/* ── PROJECTS SCROLL OVERVIEW ── */`)
*   **Behavior**: [script.js](file:///script.js) (`handleProjectsScroll()`)
*   **List of Projects**:
    1.  **NyayaNode — ONDC Dispute Arbitration**: Multi-agent FastAPI AI pipeline for autonomous dispute resolution.
    2.  **Smart Offline-First Attendance**: React Native & Node.js application with rotating HMAC QR-OTP codes to prevent proxy fraud.
    3.  **Phoenix — Developer preparation & Hackathon Suite**: Gamified interview prep linking mock roadmaps to active hackathon tracks.
    4.  **LifeStream V3 — Blood Match & Dispatch**: Real-time dispatch telemetry and donor type compatibility logistics.
    5.  **Corporate Memory NLP System**: Neo4j institutional knowledge retention mapping departure siloing risk.

### 6. Technical Skills (Dials)
*   **Source File**: [index.html](file:///index.html) (`<section id="skills">`)
*   **Styles**: [style.css](file:///style.css) (`/* ── SKILLS ORBIT CARDS ── */`)

### 7. Certifications (Horizontal Booklet Slider)
*   **Source File**: [index.html](file:///index.html) (`<section id="certifications">` wrapper)
*   **Styles**: [style.css](file:///style.css) (`/* ── CERTIFICATIONS ── */`)
*   **Behavior**: [script.js](file:///script.js) (`handleCertsScroll()`)
*   **List of Certifications**:
    *   SQL Database Querying (Mimo, 2026)
    *   Python Development (Mimo, 2026)
    *   Frontend Development (Mimo, 2026)
    *   Backend Development (Mimo, 2026)
    *   React Development (Mimo, 2026)
    *   Full-Stack Development (Mimo, 2026)

### 8. Achievements & Recognition (Horizontal Booklet Slider)
*   **Source File**: [index.html](file:///index.html) (`<section id="achievements">` wrapper)
*   **Styles**: [style.css](file:///style.css) (`/* ── ACHIEVEMENTS ── */`)
*   **Behavior**: [script.js](file:///script.js) (`handleAchieveScroll()`)
*   **List of Achievements**:
    *   Cybersecurity Track Competitor — Technotsav 2026 (IEEE CIS)
    *   National Hackathon Participant — Vibe with India 2.0 (2026)
    *   Hackathon Competitor — Hackos-One 2026 (2026)
    *   Data Analytics Job Simulation — Deloitte Australia (2026)
    *   Organizer Volunteer Team — HACK-OLYMPIC 2026 JSS STU (2026)

### 9. Contact Form
*   **Source File**: [index.html](file:///index.html) (`<section id="contact">`)
*   **Styles**: [style.css](file:///style.css) (`/* ── CONTACT SECTION ── */`)

---

## 🛠️ Local Development & Hosting

### 1. Launching Local Server (No Cache)
To run the portfolio locally without browser-side caching:
```bash
npx -y http-server ./ -p 8080 -c-1
```

### 2. Updating content
To add a new project, certificate, or achievement:
1. Open [index.html](file:///index.html) and locate the respective list container (e.g. `#projectStack`, `#certStack`, `#achievementStack`).
2. Add a new card element:
   * **For Projects**: Add a card element with the project card structure.
   * **For Certifications/Achievements**: Add a `.sticky-card` element.
3. Update the corresponding wrapper scroll height media queries in [style.css](file:///style.css) to add `80vh` scroll headroom for the new slide.

### 3. Deploying to GitHub Pages (Free Hosting)
Since this is a static site (plain HTML/CSS/JS), you can deploy and host it for free in just a few clicks:
1. Go to your repository on GitHub: https://github.com/Shashankcodelover/My-Portfolio
2. Click on the **Settings** tab (the gear icon at the top).
3. In the left-hand sidebar menu, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   * Set **Source** to **Deploy from a branch**.
   * Under **Branch**, select **`main`** from the dropdown.
   * Select **`/ (root)`** as the folder, then click **Save**.
5. Wait 1–2 minutes. Refresh the settings page, and GitHub will display your live URL at the top:
   👉 `https://shashankcodelover.github.io/My-Portfolio/`
