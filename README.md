# Shashank J — Software Engineering Portfolio

Personal software engineering portfolio showcasing full-stack projects, verified certifications, hackathon achievements, and campus leadership.

Built with **HTML5, Vanilla CSS3 (Custom Design System with CSS variables), and Vanilla JavaScript**.

## Features

### 1. Continuous Horizontal Projects Showcase
- Displays 10 engineering projects in a continuous horizontal marquee track with duplicated cards for seamless infinite scrolling.
- Provides window controls to jump between 3-card sliding windows (Window 1: 1–3, Window 2: 4–6, Window 3: 7–9, Window 4: 8–10).
- Includes pause/resume toggle, directional slide buttons, and active live demo links.
- Includes an "All 10 Projects Archive" modal dialog displaying the complete project catalog with direct repository and demo links.

### 2. Verified Industry Credentials & Modal Inspector
- Displays verified credentials in an auto-scrolling horizontal reel with manual navigation buttons and card counters.
- Provides an interactive two-panel modal inspector with certificate image previews, issuing organization details, verification IDs, and scope descriptions.
- Supports category filtering (AI, Corporate Simulations, Hackathons, Full-Stack, Workshops) and sequential stepping through 14 verified credentials.

### 3. Dynamic GitHub Data Integration
- Fetches live repository metrics and commit data from the GitHub REST API (`api.github.com/users/Shashankcodelover`) with a 1-hour `localStorage` cache.
- Computes language distribution percentages (JavaScript, TypeScript, Python, HTML/CSS) and animates SVG progress rings.
- Updates repository counts and project "Last updated" timestamps dynamically, with fallback data if the API rate limit is reached.

### 4. Systems Architecture Blueprints
- Displays architectural design patterns (Offline-First Buffers, Multi-Agent State Graphs, Event Streams, Rotating Cryptographic Tokens, Half-Life Decay Engine) in a horizontal carousel.

### 5. Technical Skills Arsenal
- Displays skill categories (GitHub Language Distribution, Web & Backend Engineering, AI & Machine Learning, Databases & Tooling) using circular SVG progress rings.
- Animates ring offsets on scroll into view via `IntersectionObserver`.

### 6. Interactive SAGE AI Assistant Widget
- Provides a floating assistant widget offering quick prompt buttons ("Top Systems", "AI Experience") with simulated contextual guidance on projects and experience.

### 7. Campus Involvement & Leadership
- Highlights active campus roles including Persona Plus PR team member, HACK-OLYMPIC 2026 organizing team volunteer, and Linux Campus Club volunteer.

### 8. Contact Form
- Form generates a prefilled `mailto:` draft addressed to `shashank.j8426@gmail.com`.

---

## Featured Projects (10)

1. **NetPlus-CRM (NetPulse)** — Relationship management platform featuring half-life decay calculations, IndexedDB offline buffer, Kanban pipeline, and reconnection suggestions.
2. **LifeStream V3.1 (Blood Match API)** — Emergency blood donor dispatch interface with Leaflet map tracking, simulated drone transit vectors, and cold-chain temperature telemetry alerts.
3. **Smart Attendance System** — Attendance platform featuring rotating HMAC-SHA256 QR tokens with 10-second validity, dual-layer GPS geofence checks, and offline IndexedDB sync.
4. **Placement Clash Resolver** — Interview scheduling conflict resolver utilizing bipartite graph matching and constraint backtracking algorithms to arbitrate recruiting slots.
5. **Phoenix Interview Prep** — Technical interview preparation interface featuring WebSocket mock interview rooms, STAR behavioral assessment criteria, and curated hackathon blueprints.
6. **CampusSearch v2.0** — Peer hardware exchange network featuring broadcast matching alerts, Server-Sent Events (SSE) notification streams, and client-side SQLite (WASM) fallback.
7. **Disaster Geofencing (FLARE)** — Crisis coordination tool with geospatial polygon boundary alerts, WebRTC data channels, and Yjs CRDTs for peer-to-peer data synchronization.
8. **DevFlow Pro** — Agile project management board with Socket.io real-time updates, PostgreSQL relational schema, and sprint burndown tracking.
9. **ArchitectAI Studio** — Visual architecture canvas compiling multi-agent state graphs with LangGraph, Google Gemini API, Three.js 3D model visualization, and Docker Compose export.
10. **RegulAIte AI** — Legal contract analyzer built with Python, Streamlit, and FastAPI that scans agreements for liability terms, calculates risk scores, and flags non-compliant clauses.

---

## Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom CSS Properties), Vanilla JavaScript (ES6+)
- **Icons & Typography**: Font Awesome 6.5, Inter (Google Fonts)
- **External Integrations**: GitHub REST API (Public Repositories & Language Stats)
- **Server**: Node.js HTTP Server (`server.js`) with static asset delivery and fleet topology API endpoints (`/api/fleet/*`)
- **Testing**: Node.js Test Runner (`node --test tests/enterpriseMesh.test.js`) and Playwright E2E (`flow_test.py`)
- **Hosting Configuration**: `vercel.json` (Vercel clean URLs), `CNAME` (`shashankj.tech`)

---

## Project Structure

```
├── index.html                  # Main single-page portfolio application
├── style.css                   # Core stylesheet with CSS custom properties and responsive rules
├── script.js                   # Client controller (marquee, modal, GitHub API, reels)
├── server.js                   # Node.js static & fleet API server
├── core/
│   └── fleetTopologyService.js # In-memory platform & corridor topology service
├── tests/
│   └── enterpriseMesh.test.js  # Unit tests for fleetTopologyService (13 passing tests)
├── flow_test.py                # Playwright user flow verification test
├── certificates/               # Credential verification images
├── achievements/               # Hackathon and workshop certificate images
├── photo/                      # Profile photo assets
├── docs/                       # Verification screenshots
├── screenshots/                # Desktop UI capture images
├── vercel.json                 # Vercel deployment configuration
├── CNAME                       # Custom domain pointer (shashankj.tech)
└── README.md                   # Project documentation
```

---

## Getting Started

### Local Development

Run the built-in Node.js server:
```bash
node server.js
```
The server starts at `http://localhost:8080`.

Alternatively, serve statically using any HTTP server:
```bash
npx http-server ./ -p 8080 -c-1
```

### Running Tests

Run the unit test suite:
```bash
node --test tests/enterpriseMesh.test.js
```

Run Playwright E2E flow test (requires Python and playwright package):
```bash
python flow_test.py
```
