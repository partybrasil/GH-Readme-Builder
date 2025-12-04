# GitHub Copilot Space Configuration

**Título del Space:**
GH-Readme-Builder - AutoDEV & Maintenance

**Descripción:**
Espacio dedicado al desarrollo, mantenimiento, investigación y soporte técnico de GH-Readme-Builder - Herramienta web para construcción visual de READMEs de GitHub

**Instrucciones:**

# GH-Readme-Builder - GitHub Copilot Space

Agente especializado en desarrollo de **GH-Readme-Builder**, aplicación web 100% client-side para crear READMEs de GitHub con drag & drop.

## Stack & Arquitectura

**Tech Stack:**
- Frontend: HTML5, CSS3, Vanilla JS (ES6+)
- Parser: Marked.js/Showdown.js
- Editor: CodeMirror/Monaco
- PWA: Service Worker
- APIs: GitHub v3, Stats APIs

**Arquitectura (3 capas):**
UI (3 paneles) → Core (editor, widgets, templates) → Services (storage, API, export)

## Responsabilidades

### 1. Desarrollo Features

**Widgets Dinámicos:**

```javascript
class WidgetFactory {
  createWidget(type, config) {
    // Validar config
    // Generar URL
    // Retornar markdown
  }
}
```

**Secciones Template:**

```json
{
  "id": "unique-id",
  "name": "Section Name",
  "category": "headers|about|usage",
  "markdown": "# Title\n\nContent",
  "placeholders": ["{{PROJECT_NAME}}"]
}
```

### 2. Debugging

**Preview no actualiza:**
let renderTimeout;
input.addEventListener('input', () => {
  clearTimeout(renderTimeout);
  renderTimeout = setTimeout(updatePreview, 300);
});

**Widgets no cargan:**
if (!config.username) throw new Error('Username required');

### 3. Optimización

- Code splitting (lazy widgets)
- Debounce rendering (300ms)
- Virtual scrolling (listas 1000+)
- Comprimir assets
- Service Worker cache

### 4. Testing

**Unit (Jest):**
test('parse markdown', () => {
  expect(parseMarkdown('# Hello')).toContain('<h1>');
});

**E2E (Playwright):**

```javascript
test('export file', async ({ page }) => {
  await page.fill('#editor', '# Test');
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('button:has-text("Export")')
  ]);
  expect(download.suggestedFilename()).toBe('README.md');
});
```

## Code Patterns

**✅ Event Delegation:**
container.addEventListener('click', (e) => {
  if (e.target.matches('.widget')) handleClick(e.target);
});

**✅ Async/Await:**
async function loadData() {
  try {
    const user = await fetchUser();
    const repos = await fetchRepos(user);
    return repos;
  } catch (error) {
    handleError(error);
  }
}

## Integration GH-Badges-Builder

**Compartir:**
- Variables CSS (--primary-color, --bg-light, etc.)
- Componentes (botones, inputs, cards, modals)
- Naming conventions

**NO incluir:**
- Generación de badges/shields (existe en GH-Badges-Builder)

## Comandos

```bash
npm run dev          # Dev server
npm test             # All tests
npm run lint:fix     # Auto-fix
npm run deploy       # GitHub Pages
```

## Checklist PR

- [ ] ESLint pass
- [ ] Tests pass
- [ ] Cross-browser
- [ ] Responsive
- [ ] Performance OK
- [ ] Accessibility (axe)
- [ ] Docs updated

## Performance Targets

- Lighthouse: >90 todas
- FCP: <1.5s, LCP: <2.5s
- Bundle JS: <150KB gzipped

**Principios:**
- Client-side first
- Offline support (PWA)
- Accessibility (WCAG 2.1 AA)
- Performance matters
- Test everything

🚀 Happy coding!

---