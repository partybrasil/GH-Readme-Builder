/**
 * Import Module
 * Handles importing README files
 */

(function () {
    'use strict';

    const Import = {
        // Show import dialog
        showDialog() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.md,.txt,.markdown';
            input.style.display = 'none';
            
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    this.importFile(file);
                }
            });
            
            document.body.appendChild(input);
            input.click();
            document.body.removeChild(input);
        },

        // Import from file
        importFile(file) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const content = e.target.result;
                this.setContent(content);
                
                if (window.Toast) {
                    window.Toast.show(`Importado: ${file.name}`, 'success');
                }
            };
            
            reader.onerror = () => {
                if (window.Toast) {
                    window.Toast.show('Error al leer el archivo', 'error');
                }
            };
            
            reader.readAsText(file);
        },

        // Import from URL (GitHub)
        async importFromURL(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener el archivo');
                }
                
                const content = await response.text();
                this.setContent(content);
                
                if (window.Toast) {
                    window.Toast.show('Importado desde URL', 'success');
                }
            } catch (error) {
                console.error('Import error:', error);
                if (window.Toast) {
                    window.Toast.show('Error al importar desde URL', 'error');
                }
            }
        },

        // Import from GitHub repo
        async importFromGitHub(username, repo, branch = 'main') {
            const url = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/README.md`;
            await this.importFromURL(url);
        },

        // Set imported content
        setContent(content) {
            if (window.Editor) {
                // Ask for confirmation if editor has content
                const currentContent = window.Editor.getContent();
                if (currentContent && currentContent.trim() !== '') {
                    if (!confirm('¿Reemplazar el contenido actual?')) {
                        return;
                    }
                }
                
                window.Editor.setContent(content);
                
                // Save to storage
                if (window.Storage) {
                    window.Storage.save();
                }
            }
        },

        // Import from JSON config
        importJSON(jsonData) {
            try {
                const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
                
                // Import content
                if (data.content && window.Editor) {
                    window.Editor.setContent(data.content);
                }
                
                // Import project info
                if (data.projectInfo && window.AppState) {
                    Object.assign(window.AppState.projectInfo, data.projectInfo);
                    
                    // Update form fields
                    const fields = {
                        'project-name': data.projectInfo.name,
                        'project-description': data.projectInfo.description,
                        'author-name': data.projectInfo.author,
                        'github-username': data.projectInfo.githubUsername,
                        'github-repo': data.projectInfo.githubRepo
                    };
                    
                    Object.entries(fields).forEach(([id, value]) => {
                        const element = document.getElementById(id);
                        if (element && value) {
                            element.value = value;
                        }
                    });
                }
                
                if (window.Toast) {
                    window.Toast.show('Configuración importada', 'success');
                }
            } catch (error) {
                console.error('JSON import error:', error);
                if (window.Toast) {
                    window.Toast.show('Error al importar configuración', 'error');
                }
            }
        }
    };

    // Expose globally
    window.Import = Import;

})();
