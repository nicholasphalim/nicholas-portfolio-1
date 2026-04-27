// =============================================================================
// app/components/Skills.tsx
// =============================================================================
// SKILLS SECTION — styled as a "Technical Specification Sheet"
//
// Visual Design:
//   • The outer wrapper is a single border-2 box
//   • Skills are grouped into categories (Frontend, Backend, Hardware)
//   • Each skill has a name, note, and a segmented "proficiency meter"
//   • The meter uses filled vs empty segments instead of a generic progress bar
//     → This evokes NASA control panels and hardware diagnostics
//
// COMPONENT STRUCTURE:
//   Skills()         → the main export (the whole section)
//   SkillMeter()     → a small reusable sub-component (the orange segment bar)
//   SkillCard()      → renders one skill row (name + note + meter)
// =============================================================================

// ── Types ─────────────────────────────────────────────────────────────────────
// TypeScript interfaces describe the "shape" of our data objects.
// This makes data errors much easier to catch.
interface Skill {
  name:  string;
  note:  string;
  level: number; // 1 (beginner) → 5 (strong proficiency)
}

interface SkillGroup {
  category: string;
  skills:   Skill[];
}

// ── Skills Data ───────────────────────────────────────────────────────────────
// Centralizing data like this makes updates simple:
// to add a new skill, just add a new object — no need to touch JSX at all.
const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'FRONTEND',
    skills: [
      { name: 'React',        level: 4, note: 'Component-based UI'  },
      { name: 'Next.js',      level: 4, note: 'App Router & SSR'    },
      { name: 'Tailwind CSS', level: 5, note: 'Utility-first CSS'   },
    ],
  },
  {
    category: 'BACKEND & DATA',
    skills: [
      { name: 'PostgreSQL',           level: 3, note: 'Relational DB'        },
      { name: 'Database Management',  level: 3, note: 'Schema & Query Design' },
    ],
  },
  {
    category: 'HARDWARE & IOT',
    skills: [
      { name: 'Arduino', level: 3, note: 'Embedded C / Firmware' },
      { name: 'ESP32',   level: 3, note: 'Wi-Fi & BLE Module'    },
    ],
  },
];

// ── Sub-Component: SkillMeter ──────────────────────────────────────────────────
// Renders a row of square segments.
// Filled segments (bg-signal) represent the skill level; empty ones are transparent.
//
// Props:
//   level → number of filled segments (1–5)
//   max   → total number of segments (default: 5)
function SkillMeter({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <div className="flex gap-[3px] mt-2" aria-label={`Proficiency: ${level} out of ${max}`}>
      {/* Array.from creates an array of 'max' items to map over */}
      {Array.from({ length: max }).map((_, index) => (
        <div
          key={index}
          className={`
            h-[6px] w-5 border border-pitch/40
            transition-colors duration-300
            ${index < level ? 'bg-signal' : 'bg-transparent'}
          `}
        />
      ))}
    </div>
  );
}

// ── Sub-Component: SkillCard ───────────────────────────────────────────────────
// Renders a single skill item: name on the left, note on the right, meter below.
function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="py-4 border-b border-pitch/10 last:border-b-0">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-bold text-pitch">{skill.name}</span>
        <span className="text-xs text-pitch/35 tracking-wider">{skill.note}</span>
      </div>
      <SkillMeter level={skill.level} />
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-16 lg:px-24 border-b-2 border-pitch"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs text-signal tracking-[0.35em] font-bold">02</span>
          <div className="w-8 h-[2px] bg-signal" />
          <h2 className="text-xs font-bold tracking-[0.35em] text-pitch">
            TECH_SPECS.SHT
          </h2>
          <div className="flex-1 h-px bg-pitch/15" />
        </div>
        <p className="text-xs text-pitch/30 tracking-[0.3em] mb-16">
          // CURRENT MODULE CAPABILITIES — REV. 2025
        </p>

        {/* ── Spec Sheet: Outer Border ─────────────────────────────── */}
        {/* All three columns live inside one unified bordered container  */}
        <div className="border-2 border-pitch grid grid-cols-1 md:grid-cols-3">

          {SKILL_GROUPS.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`
                p-8
                ${groupIndex < SKILL_GROUPS.length - 1
                  ? 'border-b-2 md:border-b-0 md:border-r-2 border-pitch'
                  : ''}
              `}
            >
              {/* ── Category Header ─────────────────────────── */}
              <div className="mb-6 pb-4 border-b border-pitch/20">
                <span className="text-xs text-signal tracking-[0.25em]">
                  [{group.category}]
                </span>
              </div>

              {/* ── Skill Items ─────────────────────────────── */}
              <div>
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* ── Legend ───────────────────────────────────────────────── */}
        <div className="mt-4 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-[3px]">
              {[true, true, true, false, false].map((filled, i) => (
                <div key={i} className={`h-[6px] w-4 border border-pitch/40 ${filled ? 'bg-signal' : 'bg-transparent'}`} />
              ))}
            </div>
            <span className="text-xs text-pitch/30 tracking-widest">PROFICIENCY (1–5)</span>
          </div>
          <div className="flex-1 h-px bg-pitch/10" />
          <span className="text-xs text-pitch/20 tracking-widest">ACTIVELY EXPANDING</span>
        </div>

      </div>
    </section>
  );
}
