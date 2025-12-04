# GH-Readme-Builder - Prompt Master del Proyecto

## 🎯 Propuesta de Valor

**GH-Readme-Builder** es una aplicación web **100% client-side** que revoluciona la creación de archivos README.md para repositorios GitHub mediante una interfaz visual drag & drop, editor WYSIWYG de markdown, y catálogo de 300+ elementos predefinidos.

### Diferenciadores Clave

- ✅ **Editor Dual WYSIWYG/Code** con sincronización en tiempo real
- ✅ **300+ Elementos Predefinidos** (templates, widgets, secciones, animaciones)
- ✅ **Drag & Drop Visual** desde biblioteca de componentes
- ✅ **80+ Widgets Dinámicos** de GitHub (stats, contributions, languages, etc.)
- ✅ **Live Preview GitHub-Compatible** exacto al renderizado final
- ✅ **Export Multi-Formato** (Markdown, HTML, JSON, PDF, Push a GitHub)
- ✅ **Import desde GitHub** para editar READMEs existentes
- ✅ **PWA Offline-First** funciona sin conexión
- ✅ **Coherencia Total** con GH-Badges-Builder para futura unificación

---

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico

**Frontend Core:**
- HTML5 semántico
- CSS3 con variables custom (diseño coherente con GH-Badges-Builder)
- Vanilla JavaScript (ES6+)
- Sin frameworks pesados para máximo rendimiento

**Librerías Especializadas:**
- **Marked.js / Showdown.js**: Parser de Markdown a HTML
- **CodeMirror / Monaco Editor**: Editor de código con syntax highlighting
- **DOMPurify**: Sanitización HTML contra XSS
- **jsPDF**: Generación de PDFs
- **Simple Icons**: 3000+ iconos de tecnologías

**APIs Externas:**
- GitHub API v3: Import/Export de READMEs
- GitHub Markdown API: Preview exacto
- GitHub Stats APIs: Widgets dinámicos

**PWA Stack:**
- Service Worker para offline
- Web App Manifest
- IndexedDB para proyectos complejos
- LocalStorage para auto-save

### Patrón de Arquitectura

┌─────────────────────────────────────────────────┐
│              Presentación (UI)                  │
│  - Header/Footer                                │
│  - Panel Izquierdo (Biblioteca)                 │
│  - Editor Canvas (Centro)                       │
│  - Panel Derecho (Configuración)                │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│           Lógica de Negocio (Core)              │
│  - Editor Controller                            │
│  - Widget Factory                               │
│  - Template Manager                             │
│  - Markdown Parser/Renderer                     │
│  - Drag & Drop System                           │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│              Servicios (Services)               │
│  - Storage Service (LocalStorage/IndexedDB)     │
│  - GitHub API Service                           │
│  - Export Service (MD/HTML/JSON/PDF)            │
│  - Import Service                               │
│  - Validation Service                           │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│                  Datos (Data)                   │
│  - widgets-catalog.json                         │
│  - templates-catalog.json                       │
│  - emojis.json                                  │
│  - simple-icons.json                            │
│  - themes.json                                  │
└─────────────────────────────────────────────────┘

---

## 🎨 Sistema de Diseño

### Coherencia con GH-Badges-Builder

**Variables CSS Compartidas:**

:root {
  /* Colores Primarios */
  --primary-color: #2196F3;
  --primary-hover: #1976D2;
  --secondary-color: #4CAF50;
  --accent-color: #FF9800;
  
  /* Fondos */
  --bg-light: #f5f5f5;
  --bg-dark: #1e1e1e;
  --surface-light: #ffffff;
  --surface-dark: #2d2d2d;
  
  /* Textos */
  --text-light: #333333;
  --text-dark: #e0e0e0;
  --text-secondary-light: #666666;
  --text-secondary-dark: #aaaaaa;
  
  /* Bordes y Sombras */
  --border-color: #dddddd;
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.15);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.2);
  
  /* Transiciones */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  
  /* Espaciado */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

**Componentes Reutilizables:**
- Botones (primary, secondary, outline, icon)
- Inputs (text, select, checkbox, radio, color)
- Cards (widget-card, template-card)
- Modals y Dropdowns
- Toast notifications
- Tooltips

---

## 📦 Catálogo de Elementos (300+ Items)

### 1. Templates Predefinidos (50+)

#### Project Templates (20)
- NPM Package README
- Python Package (PyPI)
- CLI Tool Documentation
- Web Application
- Mobile App (React Native/Flutter)
- WordPress Plugin
- VS Code Extension
- Chrome Extension
- API/Backend Service
- Frontend Library
- Microservice
- Game Project
- Data Science Project
- Machine Learning Model
- Documentation Site
- Design System
- Starter/Boilerplate
- Tutorial/Course
- Hackathon Project
- Research Paper Repository

#### Profile README Templates (15)
- Developer Portfolio
- Student Profile
- Designer Profile
- Content Creator
- Open Source Contributor
- Freelancer Profile
- Technical Writer
- Data Scientist
- DevOps Engineer
- Security Researcher
- Game Developer
- Minimalist Profile
- Animated Interactive Profile
- Creative Profile
- Company/Organization Profile

#### Special Purpose (15)
- Awesome List
- Curated Resources
- Learning Path/Roadmap
- Changelog
- Code of Conduct
- Contributing Guidelines
- Security Policy
- Support Documentation
- FAQ Page
- Troubleshooting Guide
- API Reference
- Migration Guide
- Release Notes
- License Information
- Acknowledgements

### 2. Widgets Dinámicos (80+)

**IMPORTANTE:** No incluye generación de badges/shields (existe en GH-Badges-Builder)

#### GitHub Profile Stats (15)
- Profile Stats Card (anuraghazra/github-readme-stats)
- Contribution Streak (DenverCoder1/github-readme-streak-stats)
- Top Languages Chart
- GitHub Trophy (ryo-ma/github-profile-trophy)
- Activity Graph (ashutosh00710/github-readme-activity-graph)
- Profile Summary Card
- Pinned Repositories
- Recent Activity Feed
- GitHub Stats Compact
- Language Stats Donut
- Commit Calendar Heatmap
- Code Time Stats
- Organization Stats
- Repository Stats Card
- Contribution Snake Animation

#### Repository Metrics (12)
- Stars Counter (animated)
- Forks Counter
- Watchers Count
- Open Issues Count
- Closed Issues Count
- Open Pull Requests
- Merged Pull Requests
- Contributors List Avatar Grid
- Commits This Month/Year
- Release Version Badge
- Last Commit Timestamp
- Repository Size/Lines of Code

#### External Service Integrations (15)
- NPM Downloads Badge
- NPM Version Badge
- PyPI Downloads
- PyPI Version
- Docker Pulls
- Travis CI Build Status
- CircleCI Status
- GitHub Actions Workflow Status
- CodeCov Coverage Badge
- Codecov Graph
- Snyk Vulnerabilities
- CodeClimate Maintainability
- LGTM Alerts
- Dependabot Status
- Security Scorecard

#### Social & Community Widgets (10)
- Twitter Follow Button
- YouTube Channel Subscribers
- Dev.to Latest Posts
- Medium Articles Feed
- Hashnode Blog Posts
- StackOverflow Reputation Card
- LinkedIn Profile Badge
- Discord Server Widget
- Twitch Live Status
- Reddit User Stats

#### Animated Elements (20)
- Typing Effect Header (readme-typing-svg)
- Wave Divider (static & animated)
- Contribution Snake Graph
- Rotating Text Quotes
- Skill Progress Bars (animated fill)
- Counter Up Animation
- Gradient Text Animation
- Pulse Effect Badges
- Glow/Neon Effects
- Parallax Scroll Sections
- Fade-In Animations
- Slide-In Elements
- Typewriter Effect
- Matrix Rain Effect
- Particle Background
- Floating Icons
- Morphing Shapes
- CSS Loading Spinners
- Animated Arrows/Dividers
- Interactive Hover Effects

---

## ⚙️ Funcionalidades Core

### 1. Editor de Markdown

**Modos de Edición:**

**A. Modo WYSIWYG (Visual)**
- Editor rich text tipo Word/Notion
- Toolbar completo con todas las herramientas
- Formato en tiempo real
- Drag & Drop de elementos
- Preview inline de imágenes/videos
- Auto-completion de sintaxis
- Snippets predefinidos

**B. Modo Código (Raw Markdown)**
- Syntax highlighting con CodeMirror/Monaco
- Line numbers
- Bracket matching
- Auto-indentation
- Find & Replace
- Multi-cursor editing
- Code folding

**C. Modo Split (Vista Dividida)**
- Editor código + Preview lado a lado
- Scroll sincronizado
- Highlight de línea actual en preview
- Resizable divider
- Toggle rápido entre modos

**Keyboard Shortcuts:**

Texto:
  Ctrl+B          → Bold
  Ctrl+I          → Italic
  Ctrl+Shift+S    → Strikethrough
  Ctrl+`          → Inline Code

Headers:
  Ctrl+1          → H1
  Ctrl+2          → H2
  Ctrl+3          → H3

Listas:
  Ctrl+Shift+L    → Unordered List
  Ctrl+Shift+O    → Ordered List

Elementos:
  Ctrl+K          → Insert Link
  Ctrl+Shift+I    → Insert Image

Editor:
  Ctrl+Z          → Undo
  Ctrl+Y          → Redo
  Ctrl+S          → Save
  Ctrl+P          → Toggle Preview

### 2. Sistema Drag & Drop

**Comportamiento:**

dragStart: {
  - Elemento se vuelve semi-transparente (opacity: 0.5)
  - Aparece ghost element siguiendo el cursor
  - Editor muestra drop zones con highlight
}

drop: {
  - Animación de inserción (fade-in)
  - Highlight temporal del elemento insertado
  - Auto-scroll si es necesario
  - Focus en elemento insertado para edición
}

### 3. Export System

**Formatos Disponibles:**

1. **Markdown (.md)** - Compatible GitHub/GitLab/Bitbucket
2. **HTML (.html)** - Standalone con estilos GitHub
3. **JSON (.json)** - Configuración exportable/importable
4. **PDF (.pdf)** - Documento profesional
5. **Push to GitHub** - Actualiza README directamente

### 4. Import System

**Métodos de Import:**

1. **Desde GitHub URL** - Fetch automático de README
2. **Upload Archivo** - Soporte para archivos .md
3. **Paste Clipboard** - Desde portapapeles
4. **Detección Widgets** - Identifica widgets existentes

---

## 🚀 Roadmap de Implementación

### Fase 1: Foundation (Semanas 1-4)
- ✅ Estructura HTML/CSS base responsive
- ✅ Layout 3 paneles funcional
- ✅ Editor markdown básico
- ✅ Live preview con Marked.js
- ✅ Sistema de temas (light/dark)
- ✅ LocalStorage auto-save básico

### Fase 2: Widget System (Semanas 5-8)
- ✅ Panel izquierdo con acordeón
- ✅ Drag & drop básico
- ✅ Widget factory pattern
- ✅ GitHub Stats widgets (5 tipos principales)
- ✅ Panel derecho configuración
- ✅ Live widget preview

### Fase 3: Templates & Library (Semanas 9-12)
- ✅ Sistema de templates
- ✅ 30 templates predefinidos
- ✅ Emoji picker (1000+ emojis)
- ✅ Simple Icons integration (3000+)
- ✅ Table generator
- ✅ Image gallery builder

### Fase 4: Advanced Editor (Semanas 13-16)
- ✅ Toolbar WYSIWYG completo
- ✅ CodeMirror/Monaco integration
- ✅ Keyboard shortcuts (20+)
- ✅ Auto-completion & snippets
- ✅ Syntax highlighting
- ✅ Find & Replace

### Fase 5: Animations & Special (Semanas 17-20)
- ✅ Animated widgets (15 tipos)
- ✅ Typing animation configurator
- ✅ Wave dividers
- ✅ Collapsible sections
- ✅ Mermaid diagrams support
- ✅ Math equations (KaTeX)

### Fase 6: Export & Import (Semanas 21-24)
- ✅ Export a Markdown/HTML/JSON/PDF
- ✅ Import desde GitHub URL
- ✅ Import desde archivo
- ✅ GitHub OAuth integration
- ✅ Push directo a GitHub

### Fase 7: PWA & Optimization (Semanas 25-28)
- ✅ Service Worker completo
- ✅ Offline support total
- ✅ Install prompt
- ✅ Performance optimization
- ✅ Code splitting
- ✅ Bundle optimization

### Fase 8: Testing & QA (Semanas 29-32)
- ✅ Unit tests (Jest) - 80% coverage
- ✅ Integration tests
- ✅ E2E tests (Playwright)
- ✅ Cross-browser testing
- ✅ Accessibility audit (WCAG 2.1 AA)
- ✅ Performance testing

### Fase 9: Launch (Semanas 33-36)
- ✅ Documentación completa
- ✅ Video tutoriales
- ✅ Blog launch post
- ✅ GitHub Pages deploy
- ✅ Product Hunt launch

---

## 📊 Métricas & KPIs

### Performance Targets

**Lighthouse Score:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

**Core Web Vitals:**
- FCP: < 1.5s
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- TTI: < 3.5s

**Bundle Size:**
- Initial JS: < 150KB (gzipped)
- Initial CSS: < 50KB (gzipped)
- Total Page Weight: < 500KB

---

## 🔒 Seguridad & Privacidad

### Principios de Seguridad

1. **Client-Side First** - Todo procesamiento en cliente
2. **XSS Prevention** - Sanitización con DOMPurify
3. **Token Security** - sessionStorage con timeout
4. **CSP** - Content Security Policy estricto
5. **HTTPS Only** - Forzar HTTPS en producción

### Privacidad

- ❌ NO tracking sin consentimiento
- ✅ Analytics anonimizados (opt-in)
- ✅ GDPR compliant
- ✅ Data local (LocalStorage/IndexedDB)
- ✅ Export/Delete data disponible

---

## 📚 Stack Técnico Detallado

### Frontend Libraries

```json
{
  "marked": "^12.0.0",
  "dompurify": "^3.0.0",
  "codemirror": "^6.0.0",
  "prismjs": "^1.29.0",
  "html2canvas": "^1.4.1",
  "jspdf": "^2.5.1",
  "sortablejs": "^1.15.0",
  "tippy.js": "^6.3.7",
  "notyf": "^3.10.0"
}
```

### Development Tools

```json
{
  "vite": "^5.0.0",
  "eslint": "^8.55.0",
  "prettier": "^3.1.1",
  "jest": "^29.7.0",
  "playwright": "^1.40.0",
  "lighthouse": "^11.4.0",
  "workbox-cli": "^7.0.0"
}
```

---

## 🧪 Development

```bash
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
```
