/**
 * Widgets Module
 * Handles widget library and insertion
 */

(function () {
    'use strict';

    const widgetCategories = {
        'github-stats': {
            name: 'GitHub Stats',
            icon: '📊',
            items: [
                {
                    id: 'profile-stats',
                    name: 'Profile Stats',
                    icon: '📈',
                    template: (username) => `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical)`
                },
                {
                    id: 'streak-stats',
                    name: 'Streak Stats',
                    icon: '🔥',
                    template: (username) => `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical)`
                },
                {
                    id: 'top-languages',
                    name: 'Top Languages',
                    icon: '💻',
                    template: (username) => `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical)`
                },
                {
                    id: 'trophy',
                    name: 'Trophy',
                    icon: '🏆',
                    template: (username) => `![Trophy](https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-frame=true&row=1)`
                },
                {
                    id: 'activity-graph',
                    name: 'Activity Graph',
                    icon: '📉',
                    template: (username) => `![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark)`
                }
            ]
        },
        'social': {
            name: 'Social',
            icon: '🌐',
            items: [
                {
                    id: 'linkedin',
                    name: 'LinkedIn',
                    icon: '💼',
                    template: () => `[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/username)`
                },
                {
                    id: 'twitter',
                    name: 'Twitter',
                    icon: '🐦',
                    template: () => `[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/username)`
                },
                {
                    id: 'portfolio',
                    name: 'Portfolio',
                    icon: '🌐',
                    template: () => `[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://your-portfolio.com)`
                },
                {
                    id: 'email',
                    name: 'Email',
                    icon: '📧',
                    template: () => `[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)`
                }
            ]
        },
        'animated': {
            name: 'Animated',
            icon: '✨',
            items: [
                {
                    id: 'typing-text',
                    name: 'Typing Text',
                    icon: '⌨️',
                    template: () => `![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2196F3&center=true&vCenter=true&width=435&lines=Full+Stack+Developer;Open+Source+Enthusiast)`
                },
                {
                    id: 'wave',
                    name: 'Wave',
                    icon: '👋',
                    template: () => `<img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">`
                },
                {
                    id: 'snake',
                    name: 'Snake Animation',
                    icon: '🐍',
                    template: (username) => `![Snake animation](https://github.com/${username}/${username}/blob/output/github-contribution-grid-snake.svg)`
                }
            ]
        }
    };

    const Widgets = {
        // Initialize widgets
        init() {
            this.renderWidgets();
            this.renderSections();
            this.renderElements();
        },

        // Render widgets in sidebar
        renderWidgets() {
            const container = document.getElementById('widgets-grid');
            if (!container) return;

            container.innerHTML = '';

            Object.entries(widgetCategories).forEach(([categoryId, category]) => {
                // Create category section
                const categoryEl = document.createElement('div');
                categoryEl.className = 'widget-category';
                categoryEl.innerHTML = `
                    <h4 class="category-title">
                        <span class="category-icon">${category.icon}</span>
                        ${category.name}
                    </h4>
                `;

                // Create items grid
                const itemsGrid = document.createElement('div');
                itemsGrid.className = 'templates-grid';

                category.items.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'grid-item';
                    itemEl.innerHTML = `
                        <span class="grid-item-icon">${item.icon}</span>
                        <span class="grid-item-name">${item.name}</span>
                    `;
                    
                    itemEl.addEventListener('click', () => {
                        this.insertWidget(item);
                    });

                    itemsGrid.appendChild(itemEl);
                });

                categoryEl.appendChild(itemsGrid);
                container.appendChild(categoryEl);
            });

            // Add styles for widget category
            if (!document.getElementById('widget-category-styles')) {
                const style = document.createElement('style');
                style.id = 'widget-category-styles';
                style.textContent = `
                    .widget-category {
                        margin-bottom: var(--space-4);
                    }
                    .category-title {
                        font-size: var(--font-size-sm);
                        font-weight: var(--font-weight-semibold);
                        margin-bottom: var(--space-2);
                        display: flex;
                        align-items: center;
                        gap: var(--space-2);
                    }
                `;
                document.head.appendChild(style);
            }
        },

        // Insert widget into editor
        insertWidget(widget) {
            if (!window.Editor) return;

            let markdown = '';
            const username = window.AppState?.projectInfo?.githubUsername || 'username';

            if (widget.template) {
                markdown = widget.template(username);
            }

            if (markdown) {
                window.Editor.insertText('\n\n' + markdown + '\n\n');
                
                if (window.Toast) {
                    window.Toast.show(`Widget "${widget.name}" añadido`, 'success');
                }
            }
        },

        // Get widget by ID
        getWidget(widgetId) {
            for (const category of Object.values(widgetCategories)) {
                const widget = category.items.find(item => item.id === widgetId);
                if (widget) return widget;
            }
            return null;
        },

        // Render sections
        renderSections() {
            const container = document.getElementById('sections-grid');
            if (!container) return;

            const sections = [
                { id: 'installation', name: 'Instalación', icon: '📦', content: '## Instalación\n\n```bash\nnpm install project-name\n```' },
                { id: 'usage', name: 'Uso', icon: '🚀', content: '## Uso\n\n```javascript\nconst project = require(\'project-name\');\n```' },
                { id: 'features', name: 'Características', icon: '✨', content: '## Características\n\n- Característica 1\n- Característica 2\n- Característica 3' },
                { id: 'contributing', name: 'Contribuir', icon: '🤝', content: '## Contribuir\n\nLas contribuciones son bienvenidas!' },
                { id: 'license', name: 'Licencia', icon: '📄', content: '## Licencia\n\nMIT © [Tu Nombre](https://github.com/username)' },
                { id: 'tech-stack', name: 'Tech Stack', icon: '🛠️', content: '## Tech Stack\n\n**Client:** React, Redux\n**Server:** Node, Express' }
            ];

            container.innerHTML = '';

            sections.forEach(section => {
                const sectionEl = document.createElement('div');
                sectionEl.className = 'grid-item';
                sectionEl.innerHTML = `
                    <span class="grid-item-icon">${section.icon}</span>
                    <span class="grid-item-name">${section.name}</span>
                `;
                
                sectionEl.addEventListener('click', () => {
                    if (window.Editor) {
                        window.Editor.insertText('\n\n' + section.content + '\n\n');
                        if (window.Toast) {
                            window.Toast.show(`Sección "${section.name}" añadida`, 'success');
                        }
                    }
                });

                container.appendChild(sectionEl);
            });
        },

        // Render elements
        renderElements() {
            const container = document.getElementById('elements-grid');
            if (!container) return;

            const elements = [
                { id: 'badge', name: 'Badge', icon: '🏷️', template: () => '![Badge](https://img.shields.io/badge/Label-Value-blue)' },
                { id: 'table', name: 'Tabla', icon: '📊', template: () => '\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Cell 1   | Cell 2   | Cell 3   |\n' },
                { id: 'quote', name: 'Cita', icon: '💬', template: () => '\n> Esta es una cita\n' },
                { id: 'code-block', name: 'Código', icon: '💻', template: () => '\n```javascript\n// Tu código aquí\n```\n' },
                { id: 'divider', name: 'Divisor', icon: '➖', template: () => '\n---\n' },
                { id: 'checklist', name: 'Checklist', icon: '✅', template: () => '\n- [ ] Tarea 1\n- [ ] Tarea 2\n- [x] Tarea completada\n' },
                { id: 'details', name: 'Details', icon: '📖', template: () => '\n<details>\n<summary>Click para expandir</summary>\n\nContenido oculto aquí\n</details>\n' },
                { id: 'center', name: 'Centrar', icon: '↔️', template: () => '\n<div align="center">\n\nContenido centrado\n\n</div>\n' }
            ];

            container.innerHTML = '';

            elements.forEach(element => {
                const elementEl = document.createElement('div');
                elementEl.className = 'grid-item';
                elementEl.innerHTML = `
                    <span class="grid-item-icon">${element.icon}</span>
                    <span class="grid-item-name">${element.name}</span>
                `;
                
                elementEl.addEventListener('click', () => {
                    if (window.Editor) {
                        const content = element.template();
                        window.Editor.insertText(content);
                        if (window.Toast) {
                            window.Toast.show(`Elemento "${element.name}" añadido`, 'success');
                        }
                    }
                });

                container.appendChild(elementEl);
            });
        }
    };

    // Expose globally
    window.Widgets = Widgets;

})();
