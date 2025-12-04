# GH-Readme-Builder

<div align="center">

**Build Professional GitHub READMEs with Drag & Drop**

Una aplicación web 100% client-side para crear archivos README.md profesionales mediante interfaz visual drag & drop, editor WYSIWYG de markdown, y catálogo de 300+ elementos predefinidos.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) [![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red.svg)](https://github.com/yourusername/GH-Readme-Builder)

[Demo](https://yourusername.github.io/GH-Readme-Builder) • [Documentation](docs/) • [Templates](templates/) • [Report Bug](issues) • [Request Feature](issues)

</div>

---

## 🌟 Features

### ✨ Editor Dual WYSIWYG/Code

- **Modo Visual**: Edición rich text tipo Notion/Word
- **Modo Código**: Syntax highlighting con CodeMirror/Monaco
- **Vista Split**: Editor + Preview lado a lado en tiempo real
- **Atajos de Teclado**: 20+ shortcuts para productividad máxima

### 📦 300+ Elementos Predefinidos

- **50+ Templates Completos** (Project, Profile, Special Purpose)
- **100+ Secciones Predefinidas** (Headers, About, Installation, Usage, etc.)
- **80+ Widgets Dinámicos** (GitHub Stats, Contributions, Languages, etc.)
- **50+ Elementos Especiales** (Animations, Diagrams, Math, Collapsibles)

### 🎨 Drag & Drop Visual

- Arrastra widgets desde biblioteca al canvas
- Reordena secciones fácilmente
- Visual feedback durante arrastre
- Drop zones inteligentes

### ⚡ Widgets Dinámicos GitHub

- Profile Stats Card (anuraghazra/github-readme-stats)
- Contribution Streak (DenverCoder1)
- Top Languages Chart
- GitHub Trophy Achievements
- Activity Graphs
- Repository Metrics

### 🚀 Export Multi-Formato

- ✅ **Markdown** (.md) - Compatible GitHub/GitLab/Bitbucket
- ✅ **HTML** (.html) - Standalone con estilos GitHub
- ✅ **JSON** (.json) - Configuración exportable/importable
- ✅ **PDF** (.pdf) - Documento profesional
- ✅ **Push to GitHub** - Actualiza README directamente

### 📥 Import Capabilities

- Import desde GitHub URL
- Upload archivo .md existente
- Paste desde clipboard
- Detección automática de widgets

### 💾 PWA Offline-First

- Funciona sin conexión tras primera carga
- Service Worker con cache inteligente
- Instalable como app nativa
- Auto-save cada 30 segundos

---

## 🚀 Quick Start

### Opción 1: Usar Online (Recomendado)

1. Visita [GH-Readme-Builder](https://yourusername.github.io/GH-Readme-Builder)
2. Click en "New" o selecciona un template
3. Arrastra widgets y edita contenido
4. Export → Download Markdown

### Opción 2: Instalar como PWA

1. Abre [GH-Readme-Builder](https://yourusername.github.io/GH-Readme-Builder) en Chrome/Edge
2. Click en icono "Instalar" en barra de direcciones
3. ¡Listo! Ahora funciona offline

### Opción 3: Ejecutar Localmente

# Clonar repositorio

git clone https://github.com/yourusername/GH-Readme-Builder.git
cd GH-Readme-Builder

# Instalar dependencias

npm install

# Iniciar dev server

npm run dev

# Abrir en navegador

# http://localhost:5173

---

## 📖 Usage

### Crear README desde Cero

1. **Selecciona Template** (opcional)

   - Click en "Templates"
   - Elige categoría (Project/Profile/Special)
   - Preview y selecciona
2. **Añade Widgets**

   - Navega panel izquierdo
   - Busca widget deseado
   - Click o Drag & Drop al editor
3. **Personaliza**

   - Edita texto en modo Visual o Código
   - Configura widgets en panel derecho
   - Reordena secciones arrastrando
4. **Export**

   - Click "Export" → "Download Markdown"
   - O "Push to GitHub" para actualizar directo

---

## 🛠️ Tech Stack

### Frontend Core

- HTML5
- CSS3 (Variables custom, Grid, Flexbox)
- Vanilla JavaScript (ES6+)

### Libraries

- **Marked.js** - Markdown parser
- **CodeMirror 6** - Code editor
- **DOMPurify** - XSS sanitization
- **jsPDF** - PDF generation
- **Sortable.js** - Drag & drop

### APIs

- GitHub API v3
- GitHub Markdown API
- GitHub Stats APIs (anuraghazra, DenverCoder1)
- Simple Icons API

---

## 📁 Project Structure

GH-Readme-Builder/
├── index.html
├── manifest.json
├── service-worker.js
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
│
├── styles/
│   ├── main.css
│   ├── themes/
│   └── components/
│
├── scripts/
│   ├── app.js
│   ├── core/
│   ├── widgets/
│   ├── templates/
│   └── utils/
│
├── data/
│   ├── widgets-catalog.json
│   ├── templates-catalog.json
│   └── emojis.json
│
└── tests/
    ├── unit/
    └── e2e/

---

## 🧪 Development

# Install dependencies

npm install

# Start dev server

npm run dev

# Build for production

npm run build

# Run tests

npm test

# Linting

npm run lint:fix

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) first.

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## 🗺️ Roadmap

### Q1 2026

- [ ] Template Marketplace comunitario
- [ ] Collaborative editing (real-time)
- [ ] Version history & Git integration

### Q2 2026

- [ ] Integration con GH-Badges-Builder
- [ ] VS Code extension
- [ ] CLI tool (npm package)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [partybrasil/GH-Badges-Builder](https://github.com/partybrasil/GH-Badges-Builder "YO YO YO")
- [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- [DenverCoder1/github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)
- [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)

---

<div align="center">

**Made with ❤️ by [PartyBrasil](https://github.com/partybrasil)**

[⬆ Back to top](#gh-readme-builder)

</div>

---
