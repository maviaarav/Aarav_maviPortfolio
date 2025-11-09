<div align="center">

# My Portfolio (React + Vite)

Showcasing my projects, skills, and professional journey with a fast, modern, and maintainable frontend stack.

</div>

## 📌 Overview

This repository contains the source code for my personal developer portfolio built with **React 19** and **Vite (rolldown-vite)**. It serves as a central hub where visitors can:

- Explore featured projects and case studies
- View my technical skill set and toolchain
- Read brief experience highlights / timeline
- Access contact and social links (GitHub, LinkedIn, email, etc.)
- (Optionally) Interact with live demos or embedded components

## 💡 What Is a Portfolio & Why It Matters

A developer portfolio is more than a gallery—it is a curated narrative of capability, credibility, and growth.

Key benefits:

1. Proof of execution: Real code and shipped features speak louder than a résumé bullet.
2. Differentiation: Highlights depth (architecture choices, performance, UX polish) not visible on a CV.
3. Discoverability: Central place to collect repos, talks, blog posts, and open‑source contributions.
4. Trust building: Signals professionalism, consistency, and attention to detail.
5. Conversion: Encourages recruiters, clients, or collaborators to reach out with clear CTAs.

## 🛠 Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | React 19 | Modern features + compiler (experimental) |
| Bundler/Dev Server | Vite (rolldown-vite) | Fast HMR + optimized build |
| Language | JavaScript (ES Modules) | TypeScript can be added later |
| Styling | CSS (global + component) | Located in `src/App.css`, `src/index.css` |
| Linting | ESLint 9 | Enforces code quality (`npm run lint`) |

The **React Compiler** (experimental) is enabled via `babel-plugin-react-compiler` to optimize rendering. See the official [React Compiler docs](https://react.dev/learn/react-compiler) for caveats. It may slightly affect dev/build performance.

## 🚀 Features (Planned / Implemented)

- Responsive layout for desktop & mobile
- Project cards with links and tech badges
- Skills section (grouped by category)
- Contact / call-to-action section
- Performance-focused build pipeline
- Easy extensibility for blog or dark mode

## 📂 Project Structure (High-Level)


# aarav_maviOfficial
  eslint.config.js   # ESLint rules
  package.json       # Scripts & dependencies
```

## 🧩 Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## 🛠️ Local Setup (macOS / zsh)

1. Install Node.js (recommend LTS) via [nvm](https://github.com/nvm-sh/nvm) or official installer.
2. Clone or download this repository:
	```bash
	git clone <your-repo-url> my-portfolio-app
	cd my-portfolio-app
	```
3. Install dependencies:
	```bash
	npm install
	```
4. Start the dev server:
	```bash
	npm run dev
	```
	Open the printed local URL (usually http://localhost:5173).
5. Lint the code (optional during development):
	```bash
	npm run lint
	```
6. Build for production:
	```bash
	npm run build
	```
7. Preview the production bundle (serves `dist/`):
	```bash
	npm run preview
	```

## 📦 Deployment Notes

- The `dist/` folder is static—host on Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.
- Ensure proper routing (if later adding React Router) by configuring a fallback HTML.
- Add analytics or error monitoring (e.g., Umami, Sentry) as needed.

## 🔄 Future Enhancements

- Dark / light theme toggle
- Project data sourced from a JSON or CMS (e.g., Contentful, Sanity)
- Blog / articles section
- Lighthouse performance tuning & metrics badge
- Unit and accessibility tests

## 🤝 Contributing / Personalization

This is a personal project, but you can fork it to bootstrap your own portfolio. Replace project data, images in `src/assets/`, and tweak layout/styles in `App.jsx` & CSS files.

## 📫 Contact

Feel free to reach out via LinkedIn or email (details on the live site) for collaboration, feedback, or opportunities.

---

> Built with passion using React + Vite. Continually evolving as my work grows.

## 🙏 Attribution & Assistance (Bibiography)

- UI design ideation support: Stich AI
- README generation assistance: Copilot GPT-5 model

I iteratively refined both outputs—tools accelerated drafting, final decisions & edits are mine.

# aarav_maviOfficial


## 🎯 Quick badges

You can add badges (build, lint, coverage) at the top of this README. Example markup for GitHub Actions or a linter badge:

```markdown
![build](https://img.shields.io/badge/build-passing-brightgreen)
![eslint](https://img.shields.io/badge/eslint-enabled-4B32C3)
```

## 🛠️ How to customize

- Replace project content in `src/` (images in `src/assets/`, page text in `home.jsx`, `about.jsx`, etc.).
- To add a new page, create a component in `src/` and register a route in `src/App.jsx` using `createBrowserRouter`.
- For global styles, edit `src/index.css`; for component styles, update or create CSS files next to components.

## ⚙️ Deployment notes (short)

- `npm run build` produces a static `dist/` folder. Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages).
- If you deploy to a platform that needs a fallback for client-side routing, set the rewrite/fallback to `index.html`.

## 🧪 Troubleshooting & tips

- If HMR isn't updating components, restart the dev server and clear the browser cache.
- If you see dependency errors after upgrading Node, remove `node_modules` and `package-lock.json` and run `npm install` again.

## 📜 License (placeholder)

Add a LICENSE file to the repo if you want to open-source this project. A common choice is the MIT license. Example header for files:

```
MIT License — see LICENSE file in the repository root.
```

---

If you'd like, I can add a LICENSE file, CI badges, or example GitHub Actions for building and previewing the project. Let me know which you'd prefer and I'll add them next.

---

<div align="center" style="background:#fff8e1;padding:14px;border-radius:8px;margin-top:18px;">

### 🙏 Attribution & Assistance (Bibliography)

**UI design ideation support:** Stich AI  
**README drafting assistance:** Copilot GPT-5 model

I iteratively refined both outputs — tools accelerated drafting; final decisions & edits are mine.

</div>
