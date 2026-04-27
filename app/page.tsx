// =============================================================================
// app/page.tsx — ROOT PAGE
// =============================================================================
// This is the entry point of the entire portfolio.
// Think of it as the "blueprint" that assembles all the rooms of the house.
//
// ARCHITECTURE PRINCIPLE:
//   Each major section lives in its own component file inside /components/.
//   This keeps the code modular and maintainable:
//     → To change the Hero, you only open Hero.tsx
//     → To add a new section, you create a new component and import it here
//     → page.tsx stays clean and easy to read at a glance
//
// FILE STRUCTURE (all files in the /app directory):
//   page.tsx                   ← You are here (assembles everything)
//   globals.css                ← Font import + base styles
//   layout.tsx                 ← HTML shell (title, meta, body wrapper)
//   components/
//     Nav.tsx                  ← Sticky navigation bar
//     Hero.tsx                 ← Full-screen intro with typing effect
//     About.tsx                ← Bio + system info card
//     Skills.tsx               ← Technical spec sheet with proficiency meters
//     Projects.tsx             ← 3 project log entries
//     Creative.tsx             ← Photography, Music, Art section
//     Footer.tsx               ← Terminal-style contact & social links
// =============================================================================

import Nav      from './components/Nav';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Footer   from './components/Footer';

export default function Page() {
  return (
    // 'font-mono' → applies the Space Mono font stack from tailwind.config.js
    // 'bg-bone'   → sets the parchment/off-white background everywhere
    // 'text-pitch' → sets the near-black default text color
    <main className="bg-bone font-mono text-pitch">

      {/* Fixed top navigation bar — always visible while scrolling */}
      <Nav />

      {/* SECTION 01 — Full-screen hero with name + typing tagline */}
      <Hero />

      {/* SECTION 02 — Personal intro and system info card */}
      <About />

      {/* SECTION 03 — Technical skills as a spec sheet */}
      <Skills />

      {/* SECTION 04 — Three featured project log entries */}
      <Projects />

      {/* SECTION 05 — Creative hobbies: Photography, Music, Art */}
      <Creative />

      {/* SECTION 06 — Terminal-style contact / footer */}
      <Footer />

    </main>
  );
}
