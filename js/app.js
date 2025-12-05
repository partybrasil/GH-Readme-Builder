/**
 * GH-Readme-Builder - Main Application
 * Coordinates all modules and initializes the app
 */

(function () {
    'use strict';

    // Application State
    const AppState = {
        currentMode: 'edit', // 'edit', 'split', 'preview'
        theme: 'auto',
        autoSave: true,
        livePreview: true,
        sidebarCollapsed: false,
        panelCollapsed: false,
        projectInfo: {
            name: '',
            description: '',
            author: '',
            githubUsername: '',
            githubRepo: ''
        }
    };

    // Initialize Application
    function initApp() {
        // Load saved state
        loadState();
        
        // Initialize theme
        initTheme();
        
        // Initialize UI components
        initSidebar();
        initConfigPanel();
        initToolbar();
        initModals();
        
        // Initialize editor
        if (window.Editor) {
            window.Editor.init();
        }
        
        // Initialize preview
        if (window.Preview) {
            window.Preview.init();
        }
        
        // Load templates
        if (window.Templates) {
            window.Templates.init();
        }
        
        // Load widgets
        if (window.Widgets) {
            window.Widgets.init();
        }
        
        // Setup auto-save
        setupAutoSave();
        
        // Setup keyboard shortcuts
        setupKeyboardShortcuts();
        
        // Setup event listeners
        setupEventListeners();
    }

    // Load saved state from localStorage
    function loadState() {
        try {
            const savedState = localStorage.getItem('gh-readme-builder-state');
            if (savedState) {
                const state = JSON.parse(savedState);
                Object.assign(AppState, state);
            }
        } catch (error) {
            console.error('Error loading state:', error);
        }
    }

    // Save state to localStorage
    function saveState() {
        try {
            localStorage.setItem('gh-readme-builder-state', JSON.stringify(AppState));
        } catch (error) {
            console.error('Error saving state:', error);
        }
    }

    // Initialize theme
    function initTheme() {
        const theme = AppState.theme || 'auto';
        document.body.setAttribute('data-theme', theme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const themes = ['auto', 'light', 'dark'];
                const currentTheme = document.body.getAttribute('data-theme');
                const currentIndex = themes.indexOf(currentTheme);
                const nextTheme = themes[(currentIndex + 1) % themes.length];
                
                document.body.setAttribute('data-theme', nextTheme);
                AppState.theme = nextTheme;
                saveState();
                
                if (window.Toast) {
                    window.Toast.show(`Tema: ${nextTheme}`, 'info');
                }
            });
        }
    }

    // Initialize sidebar
    function initSidebar() {
        const sidebar = document.getElementById('sidebar');
        const collapseBtn = document.getElementById('sidebar-collapse');
        
        if (collapseBtn) {
            collapseBtn.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');
                AppState.sidebarCollapsed = sidebar.classList.contains('collapsed');
                saveState();
            });
        }

        // Section toggles
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const section = header.closest('.sidebar-section');
                section.classList.toggle('collapsed');
            });
        });
    }

    // Initialize config panel
    function initConfigPanel() {
        const panel = document.getElementById('config-panel');
        const collapseBtn = document.getElementById('panel-collapse');
        
        if (collapseBtn) {
            collapseBtn.addEventListener('click', () => {
                panel.classList.toggle('collapsed');
                AppState.panelCollapsed = panel.classList.contains('collapsed');
                saveState();
            });
        }

        // Bind project info inputs
        const projectName = document.getElementById('project-name');
        const projectDesc = document.getElementById('project-description');
        const authorName = document.getElementById('author-name');
        const githubUsername = document.getElementById('github-username');
        const githubRepo = document.getElementById('github-repo');

        if (projectName) {
            projectName.value = AppState.projectInfo.name;
            projectName.addEventListener('input', (e) => {
                AppState.projectInfo.name = e.target.value;
                saveState();
            });
        }

        if (projectDesc) {
            projectDesc.value = AppState.projectInfo.description;
            projectDesc.addEventListener('input', (e) => {
                AppState.projectInfo.description = e.target.value;
                saveState();
            });
        }

        if (authorName) {
            authorName.value = AppState.projectInfo.author;
            authorName.addEventListener('input', (e) => {
                AppState.projectInfo.author = e.target.value;
                saveState();
            });
        }

        if (githubUsername) {
            githubUsername.value = AppState.projectInfo.githubUsername;
            githubUsername.addEventListener('input', (e) => {
                AppState.projectInfo.githubUsername = e.target.value;
                saveState();
            });
        }

        if (githubRepo) {
            githubRepo.value = AppState.projectInfo.githubRepo;
            githubRepo.addEventListener('input', (e) => {
                AppState.projectInfo.githubRepo = e.target.value;
                saveState();
            });
        }

        // Add GitHub Stats button handler
        const addGithubStatsBtn = document.getElementById('add-github-stats');
        if (addGithubStatsBtn) {
            addGithubStatsBtn.addEventListener('click', () => {
                if (!AppState.projectInfo.githubUsername) {
                    if (window.Toast) {
                        window.Toast.show('Por favor, ingresa tu usuario de GitHub primero', 'warning');
                    }
                    return;
                }

                const username = AppState.projectInfo.githubUsername;

                // Build a comprehensive GitHub stats section
                const statsSection = `
## 📊 GitHub Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&include_all_commits=true&count_private=true&hide_border=true)

![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true)

</div>
`;

                if (window.Editor) {
                    window.Editor.insertText(statsSection);
                    if (window.Toast) {
                        window.Toast.show('GitHub Stats añadidas correctamente', 'success');
                    }
                } else {
                    if (window.Toast) {
                        window.Toast.show('Error al añadir stats', 'error');
                    }
                }
            });
        }
    }

    // Initialize toolbar
    function initToolbar() {
        const modeBtns = document.querySelectorAll('.mode-btn');
        
        modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.getAttribute('data-mode');
                setEditorMode(mode);
            });
        });

        // Set initial mode
        setEditorMode(AppState.currentMode);
    }

    // Set editor mode
    function setEditorMode(mode) {
        AppState.currentMode = mode;
        saveState();

        // Update button states
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-mode') === mode) {
                btn.classList.add('active');
            }
        });

        // Update workspace
        const workspace = document.querySelector('.editor-workspace');
        const editorPane = document.getElementById('editor-pane');
        const previewPane = document.getElementById('preview-pane');

        workspace.classList.remove('split-mode', 'preview-mode');
        editorPane.classList.remove('hidden');
        previewPane.classList.remove('hidden');

        switch (mode) {
            case 'split':
                workspace.classList.add('split-mode');
                break;
            case 'preview':
                workspace.classList.add('preview-mode');
                break;
            case 'edit':
            default:
                previewPane.classList.add('hidden');
                break;
        }

        // Trigger preview update if needed
        if (mode !== 'edit' && window.Preview) {
            window.Preview.update();
        }
    }

    // Initialize modals
    function initModals() {
        if (window.Modal) {
            window.Modal.init();
        }
    }

    // Setup auto-save
    function setupAutoSave() {
        if (AppState.autoSave) {
            setInterval(() => {
                if (window.Storage) {
                    window.Storage.save();
                }
            }, 30000); // Every 30 seconds
        }
    }

    // Setup keyboard shortcuts
    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + S: Save
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                if (window.Storage) {
                    window.Storage.save();
                    if (window.Toast) {
                        window.Toast.show('Guardado', 'success');
                    }
                }
            }

            // Ctrl/Cmd + P: Toggle preview
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                e.preventDefault();
                const currentMode = AppState.currentMode;
                const nextMode = currentMode === 'edit' ? 'split' : currentMode === 'split' ? 'preview' : 'edit';
                setEditorMode(nextMode);
            }
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        // New button
        const newBtn = document.getElementById('new-btn');
        if (newBtn) {
            newBtn.addEventListener('click', () => {
                if (confirm('¿Crear un nuevo README? Se perderán los cambios no guardados.')) {
                    if (window.Editor) {
                        window.Editor.clear();
                    }
                    if (window.Toast) {
                        window.Toast.show('Nuevo README creado', 'success');
                    }
                }
            });
        }

        // Export button
        const exportBtn = document.getElementById('export-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                if (window.Modal) {
                    window.Modal.show('export-modal');
                }
            });
        }

        // Settings button
        const settingsBtn = document.getElementById('settings-btn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                if (window.Modal) {
                    window.Modal.show('settings-modal');
                }
            });
        }

        // Help button
        const helpBtn = document.getElementById('help-btn');
        if (helpBtn) {
            helpBtn.addEventListener('click', () => {
                if (window.Modal) {
                    window.Modal.show('help-modal');
                }
            });
        }

        // Clear button
        const clearBtn = document.getElementById('clear-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('¿Estás seguro de que quieres limpiar todo el contenido?')) {
                    if (window.Editor) {
                        window.Editor.clear();
                    }
                    if (window.Toast) {
                        window.Toast.show('Contenido limpiado', 'success');
                    }
                }
            });
        }

        // Import button
        const importBtn = document.getElementById('import-btn');
        if (importBtn) {
            importBtn.addEventListener('click', () => {
                if (window.Import) {
                    window.Import.showDialog();
                }
            });
        }
    }

    // Expose AppState globally
    window.AppState = AppState;
    window.App = {
        init: initApp,
        saveState: saveState,
        loadState: loadState,
        setEditorMode: setEditorMode
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();
