// =============================================================================
// app/components/Hero.tsx
// =============================================================================
// HERO SECTION — The first thing visitors see.
//
// KEY FEATURES:
//   1. Typewriter effect  → tagline is "typed out" character-by-character
//   2. Blinking cursor    → the orange block cursor blinks continuously
//   3. Two CTA buttons    → solid orange (primary) + outlined (secondary)
//   4. grid-bg class      → subtle graph-paper texture from globals.css
//
// LEARNING NOTE — Two useEffect hooks are used here:
//   • First useEffect  → drives the typing animation (adds 1 char every 35ms)
//   • Second useEffect → drives the cursor blink (toggles every 530ms)
//   Separating concerns into distinct effects keeps each one easy to reason about.
// =============================================================================
'use client';

import { useState, useEffect } from 'react';

// The string that will be typed out character by character
const TAGLINE = 'Sophomore in Information Systems and Technology at ITB | Aspiring Software Engineer';

export default function Hero() {
  // Holds the portion of TAGLINE that has been "typed" so far
  const [displayedText, setDisplayedText] = useState('');

  // Controls whether the orange cursor block is visible (blinks on/off)
  const [cursorVisible, setCursorVisible] = useState(true);

  // ── EFFECT 1: Typing Animation ─────────────────────────────────────────
  useEffect(() => {
    let charIndex = 0;

    const typingTimer = setInterval(() => {
      charIndex++;
      // slice(0, n) returns the first n characters of the string
      setDisplayedText(TAGLINE.slice(0, charIndex));

      // Stop the interval once we've typed the entire string
      if (charIndex >= TAGLINE.length) {
        clearInterval(typingTimer);
      }
    }, 35); // milliseconds between each character

    // CLEANUP: if the component unmounts mid-animation, stop the timer
    return () => clearInterval(typingTimer);
  }, []); // [] → run only once when the component first renders

  // ── EFFECT 2: Cursor Blink ─────────────────────────────────────────────
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      // Toggle: true → false → true → false ...
      setCursorVisible((prev) => !prev);
    }, 530); // blink speed in ms

    return () => clearInterval(blinkTimer);
  }, []);

  return (
    // 'grid-bg' adds the subtle graph-paper texture (defined in globals.css)
    // 'min-h-screen' ensures the hero always fills the full viewport height
    <section className="grid-bg min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20">
      <div className="max-w-5xl w-full">

        {/* ── System Boot Label ─────────────────────────────── */}
        {/* animate-fade-in: custom animation defined in tailwind.config.js */}
        <p className="text-xs text-signal tracking-[0.35em] mb-10 animate-fade-in">
          // PORTFOLIO_SYSTEM &gt; BOOT_SEQUENCE_COMPLETE
        </p>

        {/* ── Main Name ─────────────────────────────────────── */}
        <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-tight text-pitch mb-8">
          NICHOLAS
          <br />
          {/* The last name is styled in the accent (signal orange) */}
          <span className="text-signal">HALIM</span>
        </h1>

        {/* ── Typing Tagline ────────────────────────────────── */}
        {/* min-h prevents layout jump before text appears */}
        <div className="flex items-start gap-0.5 mb-14 min-h-[3rem]">
          <span className="text-sm md:text-base text-pitch/65 max-w-2xl leading-loose">
            {displayedText}
          </span>

          {/* Blinking cursor block — changes opacity to simulate blinking */}
          <span
            className={`
              inline-block w-[9px] h-[18px] bg-signal mt-1
              transition-opacity duration-75
              ${cursorVisible ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>

        {/* ── CTA Buttons ───────────────────────────────────── */}
        <div className="flex flex-wrap gap-4 items-center">

          {/* PRIMARY BUTTON: Solid orange — grabs the eye immediately */}
          <a
            href="#contact"
            className="
              bg-signal text-bone
              text-xs font-bold tracking-[0.25em]
              px-8 py-4
              border-2 border-signal
              hover:bg-signal-dark hover:border-signal-dark
              transition-colors duration-200
            "
          >
            INITIALIZE_CONTACT
          </a>

          {/* SECONDARY BUTTON: Outlined — less dominant, but still clear */}
          <a
            href="#projects"
            className="
              bg-transparent text-pitch
              text-xs font-bold tracking-[0.25em]
              px-8 py-4
              border-2 border-pitch
              hover:bg-pitch hover:text-bone
              transition-colors duration-200
            "
          >
            VIEW_RECORDS
          </a>

        </div>

        {/* ── Decorative Divider ────────────────────────────── */}
        <div className="mt-20 flex items-center gap-4">
          <div className="w-10 h-[2px] bg-signal" />
          <span className="text-xs text-pitch/25 tracking-[0.3em]">SCROLL TO EXPLORE</span>
          <div className="flex-1 h-px bg-pitch/10" />
        </div>

      </div>
    </section>
  );
}
