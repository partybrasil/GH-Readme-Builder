/**
 * Templates Module
 * Handles README templates
 */

(function () {
    'use strict';

    const CUSTOM_TEMPLATES_KEY = 'gh-readme-builder-custom-templates';

    // Built-in/pre-defined templates
    const templates = [
        {
            id: 'minimal',
            name: 'Minimal',
            icon: '📄',
            category: 'basic',
            content: `# Project Name

Brief description of your project.

## Installation

\`\`\`bash
npm install project-name
\`\`\`

## Usage

\`\`\`javascript
const project = require('project-name');
\`\`\`

## License

MIT`
        },
        {
            id: 'complete',
            name: 'Complete',
            icon: '📋',
            category: 'basic',
            content: `# Project Name

<div align="center">
  <img src="logo.png" alt="Logo" width="200"/>
  <p>Brief description of your project</p>
  
  ![License](https://img.shields.io/badge/license-MIT-blue.svg)
  ![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
</div>

## ✨ Features

- 🚀 Feature 1
- ⚡ Feature 2
- 🎨 Feature 3

## 📦 Installation

\`\`\`bash
npm install project-name
\`\`\`

## 🚀 Quick Start

\`\`\`javascript
const project = require('project-name');

// Your code here
\`\`\`

## 📖 Documentation

For full documentation, visit [docs](https://docs.example.com)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md)

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file

## 👤 Author

**Your Name**
- GitHub: [@username](https://github.com/username)
- Twitter: [@username](https://twitter.com/username)`
        },
        {
            id: 'profile',
            name: 'Profile',
            icon: '👤',
            category: 'profile',
            content: `# Hi there! 👋 I'm [Your Name]

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2196F3&center=true&vCenter=true&width=435&lines=Full+Stack+Developer;Open+Source+Enthusiast;Tech+Lover" alt="Typing SVG" />
</div>

## 🚀 About Me

I'm a passionate developer who loves creating amazing projects and contributing to open source.

## 🛠️ Tech Stack

**Languages:**
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

**Frameworks:**
![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=username&show_icons=true&theme=radical" alt="GitHub Stats" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=username&theme=radical" alt="GitHub Streak" />
</div>

## 📫 Contact Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/username)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/username)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)`
        },
        {
            id: 'npm-package',
            name: 'NPM Package',
            icon: '📦',
            category: 'project',
            content: `# package-name

> Brief package description

[![npm version](https://img.shields.io/npm/v/package-name.svg)](https://www.npmjs.com/package/package-name)
[![npm downloads](https://img.shields.io/npm/dm/package-name.svg)](https://www.npmjs.com/package/package-name)
[![license](https://img.shields.io/npm/l/package-name.svg)](LICENSE)

## Installation

\`\`\`bash
npm install package-name
# or
yarn add package-name
\`\`\`

## Usage

\`\`\`javascript
const packageName = require('package-name');

// Example usage
packageName.doSomething();
\`\`\`

## API

### \`doSomething(options)\`

Description of the function

**Parameters:**
- \`options\` (Object): Configuration options

**Returns:** Result description

## Examples

\`\`\`javascript
// Example 1
const result = packageName.doSomething({ option: 'value' });

// Example 2
const result2 = packageName.doSomethingElse();
\`\`\`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT © [Your Name](https://github.com/username)`
        },
        {
            id: 'api-docs',
            name: 'API Docs',
            icon: '🔌',
            category: 'project',
            content: `# API Documentation

REST API documentation for [Project Name]

## Base URL

\`\`\`
https://api.example.com/v1
\`\`\`

## Authentication

All API requests require authentication using Bearer tokens:

\`\`\`bash
Authorization: Bearer YOUR_API_TOKEN
\`\`\`

## Endpoints

### GET /users

Get a list of users

**Query Parameters:**
- \`limit\` (number): Maximum number of results (default: 10)
- \`offset\` (number): Pagination offset (default: 0)

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "total": 100
}
\`\`\`

### POST /users

Create a new user

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}
\`\`\`

**Response:**
\`\`\`json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2024-01-01T00:00:00Z"
}
\`\`\`

## Error Codes

| Code | Description |
|------|-------------|
| 400  | Bad Request |
| 401  | Unauthorized |
| 404  | Not Found |
| 500  | Internal Server Error |

## Rate Limiting

API requests are limited to 1000 requests per hour per API key.`
        }
    ];

    const Templates = {
        // Initialize templates
        init() {
            this.renderTemplates();
            this.setupEventListeners();
        },

        // Setup event listeners
        setupEventListeners() {
            const saveTemplateBtn = document.getElementById('save-template-btn');
            if (saveTemplateBtn) {
                saveTemplateBtn.addEventListener('click', () => {
                    this.showSaveTemplateDialog();
                });
            }

            const saveTemplateForm = document.getElementById('save-template-form');
            if (saveTemplateForm) {
                saveTemplateForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.saveCustomTemplate();
                });
            }
        },

        // Show save template dialog
        showSaveTemplateDialog() {
            if (!window.Editor) return;

            const content = window.Editor.getContent();
            if (!content || content.trim() === '') {
                if (window.Toast) {
                    window.Toast.show('No hay contenido para guardar como template', 'warning');
                }
                return;
            }

            // Clear form
            document.getElementById('template-name').value = '';
            document.getElementById('template-description').value = '';
            document.getElementById('template-icon').value = '📝';

            if (window.Modal) {
                window.Modal.show('save-template-modal');
            }
        },

        // Save custom template
        saveCustomTemplate() {
            const name = document.getElementById('template-name').value.trim();
            const description = document.getElementById('template-description').value.trim();
            const icon = document.getElementById('template-icon').value.trim() || '📝';

            if (!name) {
                if (window.Toast) {
                    window.Toast.show('Por favor ingresa un nombre para el template', 'warning');
                }
                return;
            }

            const content = window.Editor.getContent();
            if (!content || content.trim() === '') {
                if (window.Toast) {
                    window.Toast.show('No hay contenido para guardar', 'warning');
                }
                return;
            }

            const template = {
                id: 'custom-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
                name: name,
                icon: icon,
                description: description,
                category: 'custom',
                content: content,
                createdAt: new Date().toISOString()
            };

            // Save to localStorage
            const customTemplates = this.getCustomTemplates();
            customTemplates.push(template);
            this.saveCustomTemplates(customTemplates);

            // Re-render templates
            this.renderTemplates();

            // Close modal
            if (window.Modal) {
                window.Modal.hide('save-template-modal');
            }

            if (window.Toast) {
                window.Toast.show(`Template "${name}" guardado correctamente`, 'success');
            }
        },

        // Get custom templates from localStorage
        getCustomTemplates() {
            try {
                const data = localStorage.getItem(CUSTOM_TEMPLATES_KEY);
                return data ? JSON.parse(data) : [];
            } catch (error) {
                console.error('Error loading custom templates:', error);
                return [];
            }
        },

        // Save custom templates to localStorage
        saveCustomTemplates(templates) {
            try {
                localStorage.setItem(CUSTOM_TEMPLATES_KEY, JSON.stringify(templates));
            } catch (error) {
                console.error('Error saving custom templates:', error);
            }
        },

        // Delete custom template
        deleteCustomTemplate(templateId) {
            const customTemplates = this.getCustomTemplates();
            const filtered = customTemplates.filter(t => t.id !== templateId);
            this.saveCustomTemplates(filtered);
            this.renderTemplates();
            
            if (window.Toast) {
                window.Toast.show('Template eliminado', 'success');
            }
        },

        // Substitute variables in content
        substituteVariables(content) {
            if (!window.AppState || !window.AppState.projectInfo) return content;

            const info = window.AppState.projectInfo;
            
            // Primary placeholders with curly braces - only substitute if value exists
            const primarySubstitutions = {
                '{{username}}': info.githubUsername,
                '{{repo}}': info.githubRepo,
                '{{project}}': info.name,
                '{{project-name}}': info.name,
                '{{description}}': info.description,
                '{{author}}': info.author
            };

            // Fallback replacements for common placeholder text in templates
            // Only applied if the primary value exists
            const fallbackReplacements = {
                'username': info.githubUsername,
                'repo-name': info.githubRepo,
                'project-name': info.name,
                'Your Name': info.author,
                'mi-proyecto': info.name,
                'Tu Nombre': info.author
            };

            let result = content;
            
            // Apply primary substitutions
            for (const [placeholder, value] of Object.entries(primarySubstitutions)) {
                if (value && value.trim()) {
                    const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                    result = result.replace(regex, value);
                }
            }
            
            // Apply fallback replacements
            for (const [placeholder, value] of Object.entries(fallbackReplacements)) {
                if (value && value.trim()) {
                    const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                    result = result.replace(regex, value);
                }
            }

            return result;
        },

        // Render templates in sidebar
        renderTemplates() {
            const container = document.getElementById('templates-grid');
            if (!container) return;

            container.innerHTML = '';

            // Render pre-defined templates section
            const predefinedSection = document.createElement('div');
            predefinedSection.className = 'templates-subsection';
            predefinedSection.innerHTML = '<h4 class="subsection-title">Predefinidos</h4>';
            
            const predefinedGrid = document.createElement('div');
            predefinedGrid.className = 'templates-grid-items';

            templates.forEach(template => {
                const templateEl = this.createTemplateElement(template, false);
                predefinedGrid.appendChild(templateEl);
            });

            predefinedSection.appendChild(predefinedGrid);
            container.appendChild(predefinedSection);

            // Render custom templates section
            const customTemplates = this.getCustomTemplates();
            if (customTemplates.length > 0) {
                const customSection = document.createElement('div');
                customSection.className = 'templates-subsection';
                customSection.innerHTML = '<h4 class="subsection-title">Salvados</h4>';
                
                const customGrid = document.createElement('div');
                customGrid.className = 'templates-grid-items';

                customTemplates.forEach(template => {
                    const templateEl = this.createTemplateElement(template, true);
                    customGrid.appendChild(templateEl);
                });

                customSection.appendChild(customGrid);
                container.appendChild(customSection);
            }

            // Add styles if not already added
            this.addTemplateStyles();
        },

        // Create template element
        createTemplateElement(template, isCustom) {
            const templateEl = document.createElement('div');
            templateEl.className = 'grid-item template-item';
            
            if (template.description) {
                templateEl.title = template.description;
            }

            // Create icon span
            const iconSpan = document.createElement('span');
            iconSpan.className = 'grid-item-icon';
            iconSpan.textContent = template.icon;
            templateEl.appendChild(iconSpan);

            // Create name span
            const nameSpan = document.createElement('span');
            nameSpan.className = 'grid-item-name';
            nameSpan.textContent = template.name;
            templateEl.appendChild(nameSpan);

            // Add delete button if custom
            if (isCustom) {
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'template-delete-btn';
                deleteBtn.title = 'Eliminar';
                deleteBtn.textContent = '×';
                templateEl.appendChild(deleteBtn);
            }
            
            // Click handler for applying template
            templateEl.addEventListener('click', (e) => {
                // Don't apply if clicking delete button
                if (e.target.classList.contains('template-delete-btn')) {
                    return;
                }
                this.applyTemplate(template);
            });

            // Delete button handler for custom templates
            if (isCustom) {
                const deleteBtn = templateEl.querySelector('.template-delete-btn');
                if (deleteBtn) {
                    deleteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (confirm(`¿Eliminar el template "${template.name}"?`)) {
                            this.deleteCustomTemplate(template.id);
                        }
                    });
                }
            }

            return templateEl;
        },

        // Apply template
        applyTemplate(template) {
            if (!window.Editor) return;

            // Ask for confirmation if editor has content
            const currentContent = window.Editor.getContent();
            if (currentContent && currentContent.trim() !== '') {
                if (!confirm('¿Reemplazar el contenido actual con esta plantilla?')) {
                    return;
                }
            }

            // Apply variable substitution
            const content = this.substituteVariables(template.content);
            window.Editor.setContent(content);
            
            if (window.Toast) {
                window.Toast.show(`Plantilla "${template.name}" aplicada`, 'success');
            }
        },

        // Add template-specific styles
        addTemplateStyles() {
            if (document.getElementById('template-subsection-styles')) return;

            const style = document.createElement('style');
            style.id = 'template-subsection-styles';
            style.textContent = `
                .templates-subsection {
                    margin-bottom: var(--space-4);
                }
                .subsection-title {
                    font-size: var(--font-size-sm);
                    font-weight: var(--font-weight-semibold);
                    color: var(--color-text-secondary);
                    margin-bottom: var(--space-3);
                    padding: var(--space-2) 0;
                    border-bottom: 1px solid var(--color-border);
                }
                .templates-grid-items {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                    gap: var(--space-2);
                }
                .template-item {
                    position: relative;
                }
                .template-delete-btn {
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--color-error);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 1;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity var(--transition-fast);
                }
                .template-item:hover .template-delete-btn {
                    opacity: 1;
                }
                .template-delete-btn:hover {
                    background-color: var(--color-error-hover, #d32f2f);
                }
            `;
            document.head.appendChild(style);
        },

        // Get template by ID
        getTemplate(templateId) {
            // Check built-in templates
            let template = templates.find(t => t.id === templateId);
            if (template) return template;

            // Check custom templates
            const customTemplates = this.getCustomTemplates();
            return customTemplates.find(t => t.id === templateId);
        },

        // Get all templates
        getAllTemplates() {
            return [...templates, ...this.getCustomTemplates()];
        }
    };

    // Expose globally
    window.Templates = Templates;

})();
