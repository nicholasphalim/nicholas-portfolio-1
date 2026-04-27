// =============================================================================
// app/components/Projects.tsx
// =============================================================================
// PROJECTS SECTION — Three project entries displayed as "log records"
//
// Visual Design:
//   • All three cards share one outer border (grid-inside-a-border pattern)
//   • Cards flip to an inverted color scheme (bg-pitch, text-bone) on hover
//   • Each project has a unique ID code (PRJ_001, PRJ_002, PRJ_003)
//   • Tech stack tags are shown as small bordered chips
//
// HOVER BEHAVIOR:
//   The 'group' class on the parent div lets child elements react to
//   the parent's hover state using 'group-hover:' prefix classes.
//   This is a Tailwind pattern that avoids JavaScript for simple hover effects.
// =============================================================================

// ── Types ─────────────────────────────────────────────────────────────────────
interface Project {
  id:          string;
  name:        string;
  type:        string;
  stack:       string[];
  description: string;
  status:      string;
}

// ── Projects Data ─────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id:    'PRJ_001',
    name:  'SURATIN',
    type:  'AI-Powered Administrative System',
    stack: ['PWA', 'Offline-First', 'AI Integration', 'Service Worker'],
    status: 'DEPLOYED',
    description:
      'An AI-powered administrative system built with PWA and offline-first technology, designed to help Indonesian citizens seamlessly manage and monitor official documents. Works reliably even in low-connectivity and remote environments across the archipelago.',
  },
  {
    id:    'PRJ_002',
    name:  'ILCSENSE',
    type:  'UI/UX Design — Contract Management AI',
    stack: ['Figma', 'UI Design', 'AI Integration', '3-Col Layout'],
    status: 'DESIGN_COMPLETE',
    description:
      'A complex UI design for a contract management AI application, featuring a structured 3-column layout: navigation rail, document list pane, and a detailed AI insight panel. Designed to parse dense legal data clearly and surface insights without cognitive overload.',
  },
  {
    id:    'PRJ_003',
    name:  'DRONEAID',
    type:  'Autonomous IoT Drone System — SAR',
    stack: ['ESP32', 'Arduino', 'IoT', 'Hardware', 'Embedded C'],
    status: 'PROTOTYPE',
    description:
      'An autonomous IoT drone system leveraging ESP32 hardware, conceptualized for Search and Rescue missions. Designed to navigate disaster environments autonomously, locate victims via sensor data, and relay coordinates to ground operators during critical mitigation windows.',
  },
];

// ── Sub-Component: StatusBadge ─────────────────────────────────────────────────
// Renders a small bordered status label (DEPLOYED, PROTOTYPE, etc.)
// Switches border/text color on group-hover automatically
function StatusBadge({ status }: { status: string }) {
  return (
    <span className="
      text-xs tracking-widest
      border border-pitch/30 group-hover:border-bone/30
      text-pitch/50 group-hover:text-bone/50
      px-2 py-1
      transition-colors duration-300
    ">
      {status}
    </span>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-16 lg:px-24 border-b-2 border-pitch"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs text-signal tracking-[0.35em] font-bold">03</span>
          <div className="w-8 h-[2px] bg-signal" />
          <h2 className="text-xs font-bold tracking-[0.35em] text-pitch">
            PROJECT_LOG.DB
          </h2>
          <div className="flex-1 h-px bg-pitch/15" />
        </div>
        <p className="text-xs text-pitch/30 tracking-[0.3em] mb-16">
          // 3 RECORDS FOUND — SORTED BY: RECENCY
        </p>

        {/* ── Project Cards Grid ───────────────────────────────────── */}
        {/* One unified border contains all three cards side by side    */}
        <div className="border-2 border-pitch grid grid-cols-1 lg:grid-cols-3">

          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              // 'group' → enables group-hover:* on children
              className={`
                p-8 flex flex-col
                group cursor-default
                hover:bg-pitch
                transition-colors duration-300
                ${index < PROJECTS.length - 1
                  ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-pitch'
                  : ''}
              `}
            >

              {/* ── Top Row: ID Code + Status Badge ─────────── */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs text-signal tracking-[0.2em] font-bold">
                  {project.id}
                </span>
                <StatusBadge status={project.status} />
              </div>

              {/* ── Project Name ─────────────────────────────── */}
              <h3 className="
                text-2xl font-bold mb-1
                text-pitch group-hover:text-signal
                transition-colors duration-300
              ">
                {project.name}
              </h3>

              {/* ── Project Type (subtitle) ───────────────────── */}
              <p className="
                text-xs tracking-widest mb-6
                text-pitch/45 group-hover:text-bone/45
                transition-colors duration-300
              ">
                {project.type}
              </p>

              {/* ── Description ──────────────────────────────── */}
              {/* 'flex-1' makes this grow to fill remaining card height */}
              <p className="
                text-sm leading-loose flex-1 mb-8
                text-pitch/65 group-hover:text-bone/65
                transition-colors duration-300
              ">
                {project.description}
              </p>

              {/* ── Tech Stack Tags ───────────────────────────── */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-xs tracking-wider px-2 py-1
                      border border-pitch/25 group-hover:border-bone/25
                      text-pitch/50 group-hover:text-bone/50
                      transition-colors duration-300
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
