// =============================================================================
// app/components/Creative.tsx
// =============================================================================
// CREATIVE LOG SECTION — The "Human Side of the Engineer"
//
// This section is intentionally styled differently from Projects:
//   • Projects use solid borders  → technical, definitive, structured
//   • Creative uses dashed borders → loose, organic, exploratory
//
// This visual distinction signals to the reader: "we're shifting modes here."
// The orange icon symbol on each card also scales up on hover as a subtle
// animation using only Tailwind's group-hover utilities (no JavaScript).
// =============================================================================

// ── Types ─────────────────────────────────────────────────────────────────────
interface CreativeEntry {
  id:         string;
  discipline: string;
  icon:       string; // A Unicode symbol used as a decorative glyph
  tagline:    string;
  body:       string;
  keywords:   string[];
}

// ── Creative Data ─────────────────────────────────────────────────────────────
const CREATIVE_ENTRIES: CreativeEntry[] = [
  {
    id:         'CRV_01',
    discipline: 'PHOTOGRAPHY',
    icon:       '◉',
    tagline:    'Seeing the frame before pressing the shutter.',
    body:
      'Film and digital photography. An obsession with light, shadow, and the decisive moment. Photography trains the eye to notice what most people walk past — and to find geometry in the ordinary.',
    keywords: ['Composition', 'Light Study', 'Street', 'Analog'],
  },
  {
    id:         'CRV_02',
    discipline: 'MUSIC',
    icon:       '♩',
    tagline:    'Structure and spontaneity held in controlled tension.',
    body:
      'Music as a system: scales, rhythm, and timbre are just another kind of architecture. Playing and producing teaches patience with process — and teaches when the rules exist to be broken deliberately.',
    keywords: ['Theory', 'Production', 'Listening', 'Rhythm'],
  },
  {
    id:         'CRV_03',
    discipline: 'ART',
    icon:       '△',
    tagline:    'Constraints are the mother of all creativity.',
    body:
      'Sketching, illustration, and visual exploration. Where code enforces logic, art enforces intuition. Both disciplines end up making the other one sharper.',
    keywords: ['Sketching', 'Illustration', 'Visual Design', 'Ideation'],
  },
];

export default function Creative() {
  return (
    <section
      id="creative"
      className="py-28 px-6 md:px-16 lg:px-24 border-b-2 border-pitch"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs text-signal tracking-[0.35em] font-bold">04</span>
          <div className="w-8 h-[2px] bg-signal" />
          <h2 className="text-xs font-bold tracking-[0.35em] text-pitch">
            CREATIVE_LOG.SYS
          </h2>
          <div className="flex-1 h-px bg-pitch/15" />
        </div>
        <p className="text-xs text-pitch/30 tracking-[0.3em] mb-16">
          // THE HUMAN SIDE OF THE ENGINEER
        </p>

        {/* ── Creative Cards Grid ──────────────────────────────────── */}
        {/* gap-0 + individual border = connected look (same as Projects)  */}
        {/* But here we use dashed borders to signal a different "mode"    */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {CREATIVE_ENTRIES.map((entry) => (
            <div
              key={entry.id}
              // 'group' enables group-hover:* on child elements
              className="
                border-2 border-dashed border-pitch/50
                hover:border-signal
                p-8 flex flex-col
                group
                transition-colors duration-300
              "
            >

              {/* ── Icon + ID Row ─────────────────────────────── */}
              <div className="flex justify-between items-start mb-6">
                {/* Icon scales up slightly on card hover */}
                <span className="
                  text-5xl text-signal leading-none
                  transform group-hover:scale-110
                  transition-transform duration-300 origin-left
                ">
                  {entry.icon}
                </span>
                <span className="text-xs text-pitch/25 tracking-widest">
                  {entry.id}
                </span>
              </div>

              {/* ── Discipline Label ─────────────────────────── */}
              <h3 className="
                text-base font-bold tracking-widest mb-2
                text-pitch group-hover:text-signal
                transition-colors duration-300
              ">
                {entry.discipline}
              </h3>

              {/* ── Tagline (italicised) ─────────────────────── */}
              <p className="text-xs text-pitch/40 italic leading-relaxed mb-4">
                &ldquo;{entry.tagline}&rdquo;
              </p>

              {/* ── Thin Horizontal Rule ─────────────────────── */}
              <div className="w-full h-px bg-pitch/15 mb-5" />

              {/* ── Body Text ────────────────────────────────── */}
              {/* flex-1 pushes keywords to the bottom of the card */}
              <p className="text-sm text-pitch/65 leading-loose flex-1 mb-6">
                {entry.body}
              </p>

              {/* ── Keyword Tags ─────────────────────────────── */}
              <div className="flex flex-wrap gap-3">
                {entry.keywords.map((keyword) => (
                  <span key={keyword} className="text-xs text-pitch/35 tracking-wider">
                    #{keyword}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* ── Optional Closing Note ──────────────────────────────── */}
        <p className="mt-12 text-xs text-pitch/20 tracking-[0.3em] text-right">
          // ANALOG INPUTS MAKE BETTER DIGITAL OUTPUTS
        </p>

      </div>
    </section>
  );
}
