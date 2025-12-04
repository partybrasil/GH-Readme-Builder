/**
 * Export Module
 * Handles exporting content in various formats
 */

(function () {
    'use strict';

    const Export = {
        // Export content based on format
        export(format) {
            switch (format) {
                case 'markdown':
                    this.exportMarkdown();
                    break;
                case 'html':
                    this.exportHTML();
                    break;
                case 'json':
                    this.exportJSON();
                    break;
                case 'copy':
                    this.copyToClipboard();
                    break;
                default:
                    console.error('Unknown export format:', format);
            }
        },

        // Export as Markdown file
        exportMarkdown() {
            const content = window.Editor ? window.Editor.getContent() : '';
            if (!content) {
                if (window.Toast) {
                    window.Toast.show('No hay contenido para exportar', 'warning');
                }
                return;
            }

            this.downloadFile('README.md', content, 'text/markdown');
            
            if (window.Toast) {
                window.Toast.show('README.md descargado', 'success');
            }
        },

        // Export as HTML file
        exportHTML() {
            const html = window.Preview ? window.Preview.exportHTML() : '';
            if (!html) {
                if (window.Toast) {
                    window.Toast.show('No hay contenido para exportar', 'warning');
                }
                return;
            }

            this.downloadFile('README.html', html, 'text/html');
            
            if (window.Toast) {
                window.Toast.show('README.html descargado', 'success');
            }
        },

        // Export as JSON
        exportJSON() {
            const content = window.Editor ? window.Editor.getContent() : '';
            const projectInfo = window.AppState ? window.AppState.projectInfo : {};
            
            const data = {
                version: '1.0.0',
                timestamp: new Date().toISOString(),
                projectInfo: projectInfo,
                content: content
            };

            const json = JSON.stringify(data, null, 2);
            this.downloadFile('readme-config.json', json, 'application/json');
            
            if (window.Toast) {
                window.Toast.show('Configuración exportada', 'success');
            }
        },

        // Copy to clipboard
        copyToClipboard() {
            const content = window.Editor ? window.Editor.getContent() : '';
            if (!content) {
                if (window.Toast) {
                    window.Toast.show('No hay contenido para copiar', 'warning');
                }
                return;
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(content)
                    .then(() => {
                        if (window.Toast) {
                            window.Toast.show('Copiado al portapapeles', 'success');
                        }
                    })
                    .catch(err => {
                        console.error('Error copying to clipboard:', err);
                        // Fallback
                        this.fallbackCopy(content);
                    });
            } else {
                // Fallback for older browsers
                this.fallbackCopy(content);
            }
        },

        // Fallback copy method
        fallbackCopy(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand('copy');
                if (window.Toast) {
                    window.Toast.show('Copiado al portapapeles', 'success');
                }
            } catch (err) {
                console.error('Error copying to clipboard:', err);
                if (window.Toast) {
                    window.Toast.show('Error al copiar', 'error');
                }
            }
            
            document.body.removeChild(textarea);
        },

        // Download file
        downloadFile(filename, content, mimeType) {
            const blob = new Blob([content], { type: mimeType });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up
            setTimeout(() => URL.revokeObjectURL(url), 100);
        }
    };

    // Expose globally
    window.Export = Export;

})();
