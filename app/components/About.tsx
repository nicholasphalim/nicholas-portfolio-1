// =============================================================================
// app/components/About.tsx
// =============================================================================
// ABOUT SECTION
//
// Layout: Two columns (on desktop)
//   LEFT  → Bio paragraphs (who Nicholas is, what he's building toward)
//   RIGHT → A "SYSTEM_INFO" card styled like a config file or data readout
//
// WHY no 'use client'?
// This component has NO interactivity — no hooks, no events, no browser APIs.
// In Next.js App Router, these are Server Components by default.
// Server Components render on the server, which is faster (less JS sent to browser).
// =============================================================================

// ── System Info Data ─────────────────────────────────────────────────────────
// Stored as an array so it's easy to add/remove rows without touching the JSX.
const SYSTEM_INFO = [
  { label: 'STATUS',    value: 'SOPHOMORE — YEAR 2'                },
  { label: 'MAJOR',     value: 'Teknik Informatika'  },
  { label: 'INSTITUTE', value: 'Binus University'           },
  { label: 'FOCUS',     value: 'SOFTWARE / WEB DEVELOPMENT'         },
  { label: 'HOBBIES',   value: 'PHOTOGRAPHY · MUSIC · ART'          },
  { label: 'STATUS',    value: 'OPEN TO COLLABORATION'              },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-16 lg:px-24 border-b-2 border-pitch"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────── */}
        {/* This numbered header pattern repeats across all sections   */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs text-signal tracking-[0.35em] font-bold">01</span>
          <div className="w-8 h-[2px] bg-signal" />
          <h2 className="text-xs font-bold tracking-[0.35em] text-pitch">
            ABOUT.LOG
          </h2>
          {/* This decorative line fills the remaining horizontal space */}
          <div className="flex-1 h-px bg-pitch/15" />
        </div>

        {/* ── Two-Column Content ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* ── LEFT: Bio Text (3/5 width on desktop) ───────────────── */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-base md:text-lg leading-[1.9] text-pitch">
              Currently navigating the vast, complex landscape of technology as
              a sophomore at{' '}
              <span className="font-bold text-signal border-b-2 border-signal">
                ITB
              </span>
              , majoring in Information Systems and Technology.
              The path ahead is long — and that&apos;s exactly what makes it worth walking.
            </p>

            <p className="text-sm md:text-base leading-[1.9] text-pitch/70">
              My trajectory points firmly toward software and web development:
              building systems that are not just functional, but engineered with
              clear intent. From front-end interfaces to back-end data layers,
              I&apos;m actively learning the full stack of modern development — one
              project and one late-night debugging session at a time.
            </p>

            <p className="text-sm md:text-base leading-[1.9] text-pitch/70">
              But an engineer who only thinks in code is only half an engineer.
              I balance the technical with the creative. Photography trains
              the eye to compose and notice. Music trains the ear for structure
              and rhythm. Art trains the mind to work within constraints —
              and to break them deliberately.
            </p>

            {/* Small decorative quote block */}
            <blockquote className="border-l-4 border-signal pl-6 mt-8">
              <p className="text-sm text-pitch/50 italic leading-loose">
                &quot;Good design is as little design as possible.&quot;
                <br />
                <span className="text-xs text-pitch/30 not-italic tracking-widest">
                  — DIETER RAMS, BRAUN
                </span>
              </p>
            </blockquote>
          </div>

          {/* ── RIGHT: System Info Card (2/5 width on desktop) ──────── */}
          <div className="lg:col-span-2">
            <div className="border-2 border-pitch">

              {/* Card Header Bar */}
              <div className="bg-pitch px-6 py-3">
                <p className="text-xs text-signal tracking-[0.3em]">
                  SYSTEM_INFO.TXT
                </p>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-pitch/15">
                {SYSTEM_INFO.map(({ label, value }, i) => (
                  <div key={i} className="grid grid-cols-[auto_1fr] gap-6 px-6 py-4">
                    <span className="text-xs text-pitch/35 tracking-widest w-24">
                      {label}
                    </span>
                    <span className="text-xs text-pitch font-bold leading-relaxed">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="border-t border-pitch/15 px-6 py-3">
                <p className="text-xs text-pitch/25 tracking-widest">
                  EOF — END OF FILE
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
