// =============================================================================
// app/components/Nav.tsx
// =============================================================================
// STICKY NAVIGATION BAR
//
// This component sits fixed at the top of the viewport while the user scrolls.
// It detects scroll position and adds a bottom border once the page is scrolled
// down (gives a nice "docked" feel).
//
// WHY 'use client'?
// This component uses React hooks (useState, useEffect) to track scroll events.
// In Next.js App Router, any component that runs browser-side JavaScript
// must be marked 'use client'. Server components can't use hooks or events.
// =============================================================================
'use client';

import { useState, useEffect } from 'react';

// ── NAV LINKS DATA ──────────────────────────────────────────────────────────
// Keeping data separate from markup makes it easy to add/remove links later.
const NAV_LINKS = [
  { label: 'ABOUT',    href: '#about'    },
  { label: 'SKILLS',   href: '#skills'   },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CREATIVE', href: '#creative' },
  { label: 'CONTACT',  href: '#contact'  },
];

export default function Nav() {
  // 'scrolled' becomes true once the user scrolls past 20px
  const [scrolled, setScrolled] = useState(false);

  // Attach a scroll listener when the component mounts,
  // and clean it up (to prevent memory leaks) when it unmounts.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array → runs once on mount

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-bone font-mono
        transition-all duration-300
        ${scrolled ? 'border-b-2 border-pitch' : 'border-b border-pitch/10'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

        {/* ── Logo / Monogram ───────────────────────────────── */}
        {/* Clicking this scrolls back to the very top */}
        <a href="#" className="text-sm font-bold tracking-[0.2em] text-pitch hover:text-signal transition-colors duration-200">
          NH<span className="text-signal">_</span>
        </a>

        {/* ── Desktop Navigation Links ──────────────────────── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  text-xs tracking-[0.2em] text-pitch/50
                  hover:text-signal
                  transition-colors duration-200
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Mobile: "MENU" placeholder ────────────────────── */}
        {/* For a real project you'd build a hamburger menu here */}
        <span className="md:hidden text-xs tracking-widest text-pitch/40">MENU</span>

      </div>
    </nav>
  );
}
