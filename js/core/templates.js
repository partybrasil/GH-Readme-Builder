/**
 * Templates Module
 * Handles README templates
 */

(function () {
    'use strict';

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
        },

        // Render templates in sidebar
        renderTemplates() {
            const container = document.getElementById('templates-grid');
            if (!container) return;

            container.innerHTML = '';

            templates.forEach(template => {
                const templateEl = document.createElement('div');
                templateEl.className = 'grid-item';
                templateEl.innerHTML = `
                    <span class="grid-item-icon">${template.icon}</span>
                    <span class="grid-item-name">${template.name}</span>
                `;
                
                templateEl.addEventListener('click', () => {
                    this.applyTemplate(template);
                });

                container.appendChild(templateEl);
            });
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

            window.Editor.setContent(template.content);
            
            if (window.Toast) {
                window.Toast.show(`Plantilla "${template.name}" aplicada`, 'success');
            }
        },

        // Get template by ID
        getTemplate(templateId) {
            return templates.find(t => t.id === templateId);
        },

        // Get all templates
        getAllTemplates() {
            return templates;
        }
    };

    // Expose globally
    window.Templates = Templates;

})();
