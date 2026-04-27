// =============================================================================
// app/components/Footer.tsx
// =============================================================================
// FOOTER / CONTACT SECTION — Terminal-style
//
// Visual Design:
//   • Styled to look like an open terminal window
//   • Social links are formatted as shell commands: $ open --github
//   • A blinking cursor at the end gives a "live terminal" feel
//   • Uses Tailwind's 'animate-pulse' for the blinking cursor block
//
// NOTE ON animate-pulse:
//   This is a built-in Tailwind animation (not our custom one).
//   It gently fades an element in and out. Perfect for a terminal cursor.
// =============================================================================

// ── Contact Links Data ────────────────────────────────────────────────────────
// Update the 'href' values with Nicholas's actual profile URLs
const LINKS = [
  {
    label:   'GITHUB',
    command: 'open --github',
    href:    'https://github.com/nicholasphalim', // ← Replace with real URL
  },
  {
    label:   'LINKEDIN',
    command: 'open --linkedin',
    href:    'https://linkedin.com/in/nicholasphalim', // ← Replace with real URL
  },
  {
    label:   'EMAIL',
    command: 'send --mail',
    href:    'mailto:nicholashalim28@gmail.com', // ← Replace with real email
  },
];

export default function Footer() {
  // In a Server Component we can still use JavaScript for simple values
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-28 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs text-signal tracking-[0.35em] font-bold">05</span>
          <div className="w-8 h-[2px] bg-signal" />
          <h2 className="text-xs font-bold tracking-[0.35em] text-pitch">
            CONTACT.SH
          </h2>
          <div className="flex-1 h-px bg-pitch/15" />
        </div>
        <p className="text-xs text-pitch/30 tracking-[0.3em] mb-16">
          // INITIATE TRANSMISSION
        </p>

        {/* ── Terminal Window ──────────────────────────────────────── */}
        <div className="border-2 border-pitch max-w-xl">

          {/* ── Terminal Title Bar ─────────────────────────── */}
          {/* The three circles mimic macOS window controls     */}
          <div className="
            border-b border-pitch/30
            bg-pitch/5
            px-5 py-3
            flex items-center gap-2
          ">
            {/* macOS-style traffic lights */}
            <div className="w-3 h-3 rounded-full bg-signal" />
            <div className="w-3 h-3 rounded-full border border-pitch/25" />
            <div className="w-3 h-3 rounded-full border border-pitch/25" />
            <span className="ml-4 text-xs text-pitch/25 tracking-widest">
              terminal — zsh — 80x24
            </span>
          </div>

          {/* ── Terminal Body ──────────────────────────────── */}
          <div className="p-8 space-y-2 text-sm">

            {/* Command: whoami */}
            <p className="text-pitch/35">$ whoami</p>
            <p className="text-pitch mb-4">
              nicholas_halim — software_engineer_in_training
            </p>

            {/* Command: cat */}
            <p className="text-pitch/35">$ cat contact.txt</p>
            <p className="text-pitch/65 leading-loose mb-6">
              Currently open to internships, collaborations, and interesting
              conversations about technology, design, and the overlap between the two.
              Don&apos;t hesitate to reach out.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-pitch/10 my-4" />

            {/* Contact Links as shell commands */}
            {LINKS.map((link) => (
              <div key={link.label} className="flex items-center gap-3 group">
                <span className="text-pitch/30 select-none">$</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-signal hover:text-signal-dark
                    tracking-wider text-xs
                    hover:underline underline-offset-4
                    transition-colors duration-200
                  "
                >
                  {link.command}
                </a>
                <span className="text-pitch/20 text-xs">
                  # {link.label}
                </span>
              </div>
            ))}

            {/* Blinking terminal cursor — the final prompt line */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-pitch/30 select-none">$</span>
              {/* animate-pulse → built-in Tailwind fade pulse animation */}
              <span className="w-2 h-4 bg-signal animate-pulse inline-block" />
            </div>

          </div>
        </div>

        {/* ── Copyright / Colophon ─────────────────────────────────── */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-pitch/20 tracking-widest">
            © {currentYear} NICHOLAS HALIM — ENGINEERED WITH INTENTION
          </p>
          <p className="text-xs text-pitch/15 tracking-widest">
            BUILT WITH NEXT.JS + TAILWIND CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
