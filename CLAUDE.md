# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a single static `index.html` file — no build step, no framework, no dependencies.

Deployed via Coolify's **Static** build pack (Nginx serves the file directly from the repo root).

**Styling**: Tailwind CSS v4 loaded from the jsDelivr CDN (`@tailwindcss/browser@4`). All classes are standard Tailwind utilities; arbitrary values like `tracking-[0.2em]` and `rounded-[2rem]` work via the browser build.

**Analytics**: OpenPanel tracking via the standard snippet — init script sets `apiUrl` to `https://api.ops.eyespike.com` with `clientId: c48dfc92-ef83-439f-8d41-f57040897f62`, and the `op1.js` loader is pulled from `https://openpanel.dev/op1.js`.

To edit the page: modify `index.html` directly and push. Coolify redeploys in seconds.
