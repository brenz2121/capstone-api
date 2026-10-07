# AGENTS.md

## Project context

This repository is a static Indonesian mobile-style web application for toilet-training progress. Pages are standalone HTML files served directly from the project root; there is no package manager, build step, framework, backend, or automated test suite.

## Working conventions

- Keep HTML pages valid and accessible: use `<!DOCTYPE html>`, `lang="id"`, semantic landmarks where appropriate, meaningful `alt` text, and descriptive link/button text.
- Preserve the existing mobile-first layout: each page should use a `.page` container with the shared width and responsive styles in `style.css`.
- Add new behavior only where the page already uses inline JavaScript; keep scripts close to the relevant markup and avoid introducing a separate JavaScript asset unless requested.
- Follow the current styling conventions: IDs are used sparingly, classes drive layout and appearance, and selectors remain compatible with the existing CSS structure.
- Keep navigation relative and portable: use paths such as `dashboard.html` and `progress.html`, not filesystem-specific or absolute URLs.
- Use Indonesian UI copy unless a task explicitly requires another language.
- Avoid changing existing visual design, color palette, or responsive behavior without a clear requirement.

## File map

- `index.html`: landing page.
- `login.html` and `signup.html`: authentication screens with inline form validation.
- `dashboard.html`: parent dashboard.
- `progress.html`, `detail-tahapan.html`, `hasil-latihan.html`, and `riwayat-latihan.html`: training progress and history.
- `profil-anak.html`, `notifikasi.html`, `pengaturan.html`: child profile, notifications, and settings.
- `style.css`: shared design system, page layouts, and responsive rules.
- `.vscode/launch.json`: VS Code launch configuration for opening the app in Edge.

## Validation

1. Open the changed page in a browser with the VS Code Edge launch configuration or a local static server.
2. Verify the page loads without missing stylesheet or navigation links.
3. Check the affected responsive breakpoint behavior in the browser at narrow width and desktop width.
4. For HTML changes, confirm forms, buttons, links, and keyboard focus still work.
5. For CSS changes, inspect adjacent pages that use the same selectors or component classes to avoid regressions.

## Change guidance

- Prefer small, targeted changes over broad CSS rewrites.
- Preserve the existing `style.css` organization and comment sections when adding rules.
- Do not add dependencies or package scripts unless the task explicitly requires them.
- If behavior depends on browser APIs, use the simplest compatible implementation and keep it inside the page that owns it.
- Do not claim automated tests or a build passed; report the exact browser verification performed instead.
