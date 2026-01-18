---
title: "Developer Tools Favoritku yang Boost Produktivitas"
description: "Koleksi tools dan extensions yang bikin workflow development lebih efisien dan enjoyable"
pubDate: 2026-01-08
tags: ["tools", "productivity", "vscode"]
image: "developer-tools-favorite"
imageCredit: "developer-tools-favorite"
---

## Setup Tools itu Penting!

Sebagai developer, tools yang kita pakai sehari-hari punya impact yang gede banget ke produktivitas. Setelah bertahun-tahun trial and error, ini dia setup dan tools yang currently aku pakai dan seriously recommend!

### VS Code Extensions yang Must-Have

**1. GitHub Copilot** 🤖
AI-powered code completion yang beneran helpful. Nggak cuma autocomplete biasa, tapi bisa suggest whole functions bahkan full components.

**2. Error Lens** 🔍
Show errors dan warnings inline di editor. No need klik-klik ke Problems panel lagi.

**3. Auto Rename Tag** 🏷️
Edit opening tag, closing tag otomatis ikut. Simple tapi super useful untuk HTML/JSX.

**4. Prettier - Code Formatter** ✨
Auto format code on save. Team harmony guaranteed, no more formatting debates!

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

**5. GitLens** 📜
Git supercharged. Lihat blame, history, dan compare changes dengan mudah.

### Command Line Tools

**1. Oh My Posh (Windows) / Oh My Zsh (Linux/Mac)** 🎨
Beautiful terminal dengan git status, node version, dan info lainnya di prompt.

```powershell
# Install Oh My Posh (Windows)
winget install JanDeDobbeleer.OhMyPosh

# Set theme
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\night-owl.omp.json"
```

**2. pnpm** 📦
Package manager yang lebih cepat dan hemat disk space dibanding npm/yarn.

```bash
# Install globally
npm install -g pnpm

# Usage sama seperti npm
pnpm install
pnpm add astro
pnpm run dev
```

**3. Bun** 🥟
All-in-one toolkit: runtime, bundler, package manager. Speed demon!

```bash
# Install dependencies super fast
bun install

# Run scripts
bun run dev

# Execute TypeScript directly
bun run index.ts
```

### Browser Extensions untuk Development

**1. React Developer Tools** ⚛️
Debug React apps dengan mudah. Inspect component tree, props, dan state.

**2. Vue DevTools** 🖖
Same thing, tapi untuk Vue apps.

**3. Wappalyzer** 🔧
Detect tech stack dari website yang lagi dibuka. Perfect buat competitive research!

**4. JSON Viewer** 📋
Format JSON responses di browser. Goodbye raw JSON wall of text!

### Productivity Apps

**1. Notion** 📝
Dokumentasi, note-taking, project management—semua dalam satu platform.

**Struktur setup aku:**

- 📚 **Learning Hub**: tutorial yang lagi dipelajari, resources
- 🚀 **Projects**: tracking progress project-project
- 💡 **Ideas**: parking lot untuk ide-ide random
- 📅 **Sprint Planning**: weekly goals dan tasks

**2. Obsidian** 🔮
Untuk personal knowledge management dengan markdown dan backlinks. Perfect buat second brain system.

**3. Raycast (Mac) / PowerToys Run (Windows)** ⚡
Launcher yang powerful. Launch apps, search files, calculator, dan banyak lagi—semua dari keyboard.

```
# Windows: PowerToys Run
Alt + Space -> type anything
```

### Design & Prototyping Tools

**1. Figma** 🎨
Industry standard untuk UI/UX design. Collaborative dan powerful.

**2. Excalidraw** ✏️
Sketching tool untuk diagram dan wireframes. Simple dan quick.

**3. Coolors.co** 🎨
Color palette generator. Cari kombinasi warna yang perfect dalam hitungan detik.

## Setup Development Environment

Ini typical setup aku untuk new project:

```bash
# 1. Initialize project
pnpm create astro@latest

# 2. Setup Git
git init
git add .
git commit -m "Initial commit"

# 3. Setup Prettier & ESLint
pnpm add -D prettier eslint @typescript-eslint/parser

# 4. Create config files
# .prettierrc, .eslintrc.json, .gitignore

# 5. Setup pre-commit hooks (optional)
pnpm add -D husky lint-staged
```

### Keyboard Shortcuts yang Sering Dipakai

Master ini, dan kamu bakal 10x lebih cepat:

- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + P` - Command palette
- `Ctrl/Cmd + D` - Select next occurrence
- `Alt + Click` - Multiple cursors
- `Ctrl/Cmd + /` - Toggle comment
- `Ctrl/Cmd + Shift + K` - Delete line
- `Alt + Up/Down` - Move line up/down

## Tips Optimasi Workflow

1. **Learn keyboard shortcuts** - less mouse = more speed
2. **Automate repetitive tasks** - buat scripts atau snippets
3. **Use code snippets** - VS Code user snippets is your friend
4. **Keep learning** - tools baru terus bermunculan, stay curious
5. **Customize your setup** - nggak ada one-size-fits-all, experiment!

## Kesimpulan

Tools itu enabler. They won't make you a better developer overnight, tapi mereka bisa help kamu focus on what matters: **writing good code and solving problems**.

Invest waktu untuk setup environment yang comfortable dan efficient. Worth it! 💯

What tools yang kamu pakai? Share dong di comments! (soon™) 😄
