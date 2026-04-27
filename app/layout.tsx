// =============================================================================
// app/layout.tsx — ROOT LAYOUT
// =============================================================================
// In Next.js App Router, layout.tsx wraps every page with shared structure:
// the <html> and <body> tags, global metadata, and global CSS.
//
// This file is required by Next.js — don't delete it.
// Every page you create automatically gets wrapped in this layout.
// =============================================================================

import type { Metadata } from 'next';
import './globals.css';

// ── Page Metadata ─────────────────────────────────────────────────────────────
// Next.js uses this object to set the <title> and <meta description> tags.
// These are important for SEO and how the page appears in browser tabs/bookmarks.
export const metadata: Metadata = {
  title:       'Nicholas Halim — Portfolio',
  description: 'Sophomore in Information Systems & Technology at ITB | Aspiring Software Engineer',
};

// ── Root Layout Component ─────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // 'children' = whatever page.tsx renders
}) {
  return (
    <html lang="en">
      <body>
        {/* 'children' renders the active page (in our case, page.tsx) */}
        {children}
      </body>
    </html>
  );
}
