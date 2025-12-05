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
                    id: 'typing-multiline',
                    name: 'Typing Multi',
                    icon: '💬',
                    template: () => `![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=2196F3&center=true&vCenter=true&width=600&lines=Welcome+to+my+GitHub+profile!;I+love+coding+and+building+things;Let's+create+something+amazing+together!)`
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
                },
                {
                    id: 'profile-views',
                    name: 'Profile Views',
                    icon: '👁️',
                    template: (username) => `![Profile Views](https://komarev.com/ghpvc/?username=${username}&color=brightgreen&style=flat-square&label=Profile+Views)`
                },
                {
                    id: 'github-stats-animated',
                    name: 'Stats Animated',
                    icon: '📊',
                    template: (username) => `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&include_all_commits=true&count_private=true&hide_border=true)`
                },
                {
                    id: 'contribution-graph',
                    name: 'Contrib Graph',
                    icon: '📈',
                    template: (username) => `![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0d1117&color=2196F3&line=2196F3&point=58a6ff&area=true&hide_border=true)`
                },
                {
                    id: 'streak-flame',
                    name: 'Streak Flame',
                    icon: '🔥',
                    template: (username) => `<p align="center"><img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true" alt="GitHub Streak" /></p>`
                },
                {
                    id: 'trophy-animated',
                    name: 'Trophy',
                    icon: '🏆',
                    template: (username) => `<p align="center"><img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-frame=true&margin-w=15&margin-h=15" alt="Trophies" /></p>`
                },
                {
                    id: 'coding-time',
                    name: 'Coding Time',
                    icon: '⏱️',
                    template: () => `[![WakaTime Stats](https://github-readme-stats.vercel.app/api/wakatime?username=YOUR_WAKATIME_USERNAME&theme=radical&layout=compact)](https://wakatime.com/@YOUR_WAKATIME_USERNAME)`
                },
                {
                    id: 'animated-banner',
                    name: 'Banner Wave',
                    icon: '🎨',
                    template: () => `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Welcome!&fontSize=80&animation=fadeIn&fontAlignY=38&desc=Thanks%20for%20visiting&descAlignY=55&descAlign=50" />`
                },
                {
                    id: 'animated-text',
                    name: 'Animated Text',
                    icon: '✍️',
                    template: () => `<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=2196F3&width=435&lines=Hi+there+%F0%9F%91%8B;I'm+a+Developer;Welcome+to+my+profile!" alt="Typing SVG" />`
                },
                {
                    id: 'skill-icons-animated',
                    name: 'Skills Animated',
                    icon: '🛠️',
                    template: () => `<p align="center"><img src="https://skillicons.dev/icons?i=js,ts,react,vue,nodejs,python,docker,git&theme=dark" alt="Skills" /></p>`
                },
                {
                    id: 'github-skyline',
                    name: 'Skyline 3D',
                    icon: '🏙️',
                    template: (username) => `<!-- Requires https://github.com/yoshi389111/github-profile-3d-contrib setup -->\n<img src="https://github.com/${username}/${username}/blob/main/profile-3d-contrib/profile-night-rainbow.svg" alt="GitHub Skyline" />`
                },
                {
                    id: 'random-joke',
                    name: 'Random Joke',
                    icon: '😄',
                    template: () => `![Jokes Card](https://readme-jokes.vercel.app/api?theme=radical&hideBorder)`
                },
                {
                    id: 'quote-animated',
                    name: 'Quote',
                    icon: '💭',
                    template: () => `![Quote](https://github-readme-quotes-bay.vercel.app/quote?theme=radical&animation=grow_out_in&layout=default&font=default)`
                },
                {
                    id: 'meme-card',
                    name: 'Random Meme',
                    icon: '🤣',
                    template: () => `<img src="https://random-memer.herokuapp.com/" width="512px" alt="Random Dev Meme"/>`
                },
                {
                    id: 'spotify-playing',
                    name: 'Spotify Now',
                    icon: '🎵',
                    template: () => `<img src="https://spotify-github-profile.vercel.app/api/view?uid=YOUR_SPOTIFY_ID&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false" alt="Spotify Now Playing" />`
                },
                {
                    id: 'github-metrics',
                    name: 'Metrics',
                    icon: '📊',
                    template: (username) => `<img src="https://metrics.lecoq.io/${username}?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&languages=1&lines=1&config.timezone=America%2FNew_York" alt="Metrics" />`
                },
                {
                    id: 'animated-header',
                    name: 'Header Capsule',
                    icon: '🎭',
                    template: () => `<img src="https://capsule-render.vercel.app/api?type=cylinder&color=gradient&height=150&section=header&text=Your%20Name&fontSize=60&animation=twinkling" />`
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
                { id: 'tech-stack', name: 'Tech Stack', icon: '🛠️', content: '## Tech Stack\n\n**Client:** React, Redux\n**Server:** Node, Express' },
                { id: 'about', name: 'Acerca de', icon: 'ℹ️', content: '## Acerca del Proyecto\n\nDescripción detallada del proyecto...' },
                { id: 'roadmap', name: 'Roadmap', icon: '🗺️', content: '## Roadmap\n\n- [x] Característica completada\n- [ ] Característica pendiente\n- [ ] Otra característica' },
                { id: 'faq', name: 'FAQ', icon: '❓', content: '## FAQ\n\n#### ¿Pregunta 1?\n\nRespuesta 1\n\n#### ¿Pregunta 2?\n\nRespuesta 2' },
                { id: 'support', name: 'Soporte', icon: '💬', content: '## Soporte\n\nPara soporte, envía un email a support@example.com' }
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
                { id: 'badge-style', name: 'Badge Style', icon: '🎨', template: () => '![Badge](https://img.shields.io/badge/Style-For--The--Badge-informational?style=for-the-badge)' },
                { id: 'badge-flat', name: 'Badge Flat', icon: '📛', template: () => '![Badge](https://img.shields.io/badge/Flat-Square-success?style=flat-square)' },
                { id: 'table', name: 'Tabla', icon: '📊', template: () => '\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Cell 1   | Cell 2   | Cell 3   |\n' },
                { id: 'table-aligned', name: 'Tabla Alineada', icon: '📋', template: () => '\n| Left | Center | Right |\n| :--- | :---: | ---: |\n| Left aligned | Centered | Right aligned |\n' },
                { id: 'quote', name: 'Cita', icon: '💬', template: () => '\n> Esta es una cita\n' },
                { id: 'quote-multiline', name: 'Cita Multi', icon: '📝', template: () => '\n> Primera línea de la cita\n>\n> Segunda línea de la cita\n> con múltiples líneas\n' },
                { id: 'code-block', name: 'Código', icon: '💻', template: () => '\n```javascript\n// Tu código aquí\n```\n' },
                { id: 'code-bash', name: 'Bash', icon: '⌨️', template: () => '\n```bash\n# Comando bash\necho "Hello World"\n```\n' },
                { id: 'code-python', name: 'Python', icon: '🐍', template: () => '\n```python\n# Código Python\nprint("Hello World")\n```\n' },
                { id: 'divider', name: 'Divisor', icon: '➖', template: () => '\n---\n' },
                { id: 'divider-stars', name: 'Divisor *', icon: '⭐', template: () => '\n***\n' },
                { id: 'checklist', name: 'Checklist', icon: '✅', template: () => '\n- [ ] Tarea 1\n- [ ] Tarea 2\n- [x] Tarea completada\n' },
                { id: 'list-ordered', name: 'Lista Num.', icon: '🔢', template: () => '\n1. Primer elemento\n2. Segundo elemento\n3. Tercer elemento\n' },
                { id: 'list-unordered', name: 'Lista', icon: '📝', template: () => '\n- Elemento 1\n- Elemento 2\n  - Sub-elemento 2.1\n  - Sub-elemento 2.2\n- Elemento 3\n' },
                { id: 'details', name: 'Details', icon: '📖', template: () => '\n<details>\n<summary>Click para expandir</summary>\n\nContenido oculto aquí\n</details>\n' },
                { id: 'details-code', name: 'Details Code', icon: '💼', template: () => '\n<details>\n<summary>Ver código</summary>\n\n```javascript\nconst code = "example";\n```\n</details>\n' },
                { id: 'center', name: 'Centrar', icon: '↔️', template: () => '\n<div align="center">\n\nContenido centrado\n\n</div>\n' },
                { id: 'right-align', name: 'Alinear Dcha', icon: '➡️', template: () => '\n<div align="right">\n\nContenido alineado a la derecha\n\n</div>\n' },
                { id: 'image', name: 'Imagen', icon: '🖼️', template: () => '\n![Alt text](https://via.placeholder.com/468x60?text=Your+Image+Here)\n' },
                { id: 'image-sized', name: 'Img Tamaño', icon: '📐', template: () => '\n<img src="https://via.placeholder.com/150" alt="Image" width="150" height="150">\n' },
                { id: 'link', name: 'Enlace', icon: '🔗', template: () => '[Texto del enlace](https://example.com)' },
                { id: 'link-image', name: 'Img con Link', icon: '🔗', template: () => '[![Alt text](https://via.placeholder.com/150)](https://example.com)' },
                { id: 'emoji', name: 'Emojis', icon: '😊', template: () => '😀 😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 😉 😊 😇' },
                { id: 'kbd', name: 'Keyboard', icon: '⌨️', template: () => 'Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar' },
                { id: 'footnote', name: 'Nota al pie', icon: '📌', template: () => '\nTexto con nota[^1]\n\n[^1]: Esta es la nota al pie\n' },
                { id: 'highlight', name: 'Destacar', icon: '✨', template: () => '\n==Texto destacado==\n' },
                { id: 'subscript', name: 'Subíndice', icon: '₂', template: () => 'H~2~O' },
                { id: 'superscript', name: 'Superíndice', icon: '²', template: () => 'x^2^' },
                { id: 'strikethrough', name: 'Tachado', icon: '~~', template: () => '~~Texto tachado~~' },
                { id: 'bold', name: 'Negrita', icon: '𝗕', template: () => '**Texto en negrita**' },
                { id: 'italic', name: 'Cursiva', icon: '𝘐', template: () => '*Texto en cursiva*' },
                { id: 'inline-code', name: 'Código inline', icon: '`', template: () => 'Este es `código inline` en texto' },
                { id: 'anchor', name: 'Ancla', icon: '⚓', template: () => '\n[Ir a sección](#seccion)\n\n...\n\n<a name="seccion"></a>\n## Sección\n' }
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
