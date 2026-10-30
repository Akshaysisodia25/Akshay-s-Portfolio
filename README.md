# Akshay Sisodia — Cinematic Developer Portfolio

A bespoke, high-craft, editorial developer portfolio engineered with **React, Vite, Tailwind CSS, Three.js, and Lenis**. Reinterprets the cinematic luxury and precision engineering language of **Spyker Cars** for a modern computer science developer.

---

## 🏛️ Art Direction & Design Language

- **Visual Reference**: Spyker Cars × Awwwards Editorial Design × Luxury Engineering.
- **Palette**: Deep Void Black (`#050505`), Obsidian (`#0a0a0a`), Brushed Silver (`#e2e8f0`), Titanium (`#9ca3af`), and ultra-thin metallic borders (`rgba(255,255,255,0.08)`).
- **Typography**: 
  - `Cinzel` & `Syne` — High-impact editorial display typography.
  - `Inter` — Crisp, legible editorial prose.
  - `JetBrains Mono` — Technical telemetry, section indices, and engineering tags.
- **Hero**: Interactive Three.js WebGL procedural aerodynamic turbine / mechanical geometry responding dynamically to cursor movement with slow cinematic rotation.
- **Interactivity**: Custom desktop magnetic cursor (`VIEW`, `OPEN ↗`, `EXPLORE`), analog film grain overlay, and Lenis smooth momentum scrolling.

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── about/          # Editorial portrait
│   │   ├── taekwondo/      # Athletic conditioning portrait
│   │   ├── projects/       # Architectural case study visuals & blueprints
│   │   ├── resume/         # Authentic curriculum vitae PDF
│   │   └── textures/       # Analog grain SVG filter
│   ├── favicon.svg         # Monogram AS silver vector emblem
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed minimal editorial navigation
│   │   ├── CustomCursor.jsx    # Magnetic interactive cursor
│   │   ├── GrainOverlay.jsx    # Cinematic film grain overlay
│   │   ├── HeroVisual.jsx      # Three.js kinetic mechanical engineering canvas
│   │   ├── Hero.jsx            # Fullscreen cinematic hero
│   │   ├── ThePerson.jsx       # 01 // THE PERSON (Identity + Athletic Intersection)
│   │   ├── SelectedWork.jsx    # 02 // SELECTED WORK (Full-width case studies)
│   │   ├── TechStack.jsx       # 03 // THE STACK (Matrix layout, no fake percentages)
│   │   ├── HowIThink.jsx       # 04 // HOW I THINK (6-step execution pipeline)
│   │   ├── Discipline.jsx      # 05 // DISCIPLINE (6+ Years Taekwondo)
│   │   ├── Education.jsx       # 06 // EDUCATION & RIGHT NOW (Academics & telemetry)
│   │   ├── ResumeSection.jsx   # THE FULL STORY (CV & credentials)
│   │   ├── ResumeModal.jsx     # Fullscreen interactive PDF viewer
│   │   ├── Contact.jsx         # INITIATE TRANSMISSION (Email & verified links)
│   │   └── Footer.jsx          # Minimalist copyright & top jump
│   ├── data/
│   │   └── portfolioData.js    # Decoupled, verified single source of truth
│   ├── styles/
│   │   └── index.css           # Tailwind + luxury custom utility classes
│   ├── App.jsx                 # Lenis smooth scroll orchestration
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Updating Projects or Information

All personal data, projects, tech stacks, and credentials are decoupled in [`src/data/portfolioData.js`](file:///Users/akshaysisodia/Downloads/portfolio/src/data/portfolioData.js). To add or update projects, simply edit or append entries in the `PROJECTS` array.

