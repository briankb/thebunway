# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev                                    # Start dev server with hot reload
bun run the_bun_way_landing_page.build.ts  # Production build (outputs to dist/)
```

There is no test runner or linter configured.

## Architecture

This is a single-page React landing page for [LearnBun.org](https://learnbun.org), promoting "The Bun Way" philosophy. The project deliberately avoids a `tsconfig.json`, `.eslintrc`, or separate bundler config — Bun handles all of that natively.

**Key files:**

- `the_bun_way_landing_page.jsx` — The main React component (the entire UI lives here)
- `the_bun_way_landing_page.client.tsx` — React root entry point; includes `import.meta.hot` HMR support
- `the_bun_way_landing_page.html` — HTML shell that loads the client entry
- `the_bun_way_landing_page.css` — Tailwind CSS via `@import`
- `the_bun_way_landing_page.build.ts` — Production build script using `Bun.build()` with `bun-plugin-tailwind`, minification, and source maps
- `bunfig.toml` — Minimal Bun config that registers `bun-plugin-tailwind` for the dev server

**Build flow:**

Dev: Bun's dev server serves the `.html` file and processes JSX/TSX and Tailwind CSS on the fly.

Production: `the_bun_way_landing_page.build.ts` calls `Bun.build()` directly — no Vite, Webpack, or esbuild config needed — and writes minified output to `dist/`.

**Stack:** React 19, Tailwind CSS 4, bun-plugin-tailwind. No routing, no state management, no backend.
