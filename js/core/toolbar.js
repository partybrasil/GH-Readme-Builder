/**
 * Toolbar Module
 * Handles toolbar button actions
 */

(function () {
    'use strict';

    const Toolbar = {
        // Initialize toolbar
        init() {
            this.setupButtons();
            this.setupHeadingSelect();
        },

        // Setup toolbar buttons
        setupButtons() {
            // Undo
            const undoBtn = document.getElementById('undo-btn');
            if (undoBtn) {
                undoBtn.addEventListener('click', () => {
                    document.execCommand('undo', false, null);
                });
            }

            // Redo
            const redoBtn = document.getElementById('redo-btn');
            if (redoBtn) {
                redoBtn.addEventListener('click', () => {
                    document.execCommand('redo', false, null);
                });
            }

            // Bold
            const boldBtn = document.getElementById('bold-btn');
            if (boldBtn) {
                boldBtn.addEventListener('click', () => {
                    if (window.Editor) {
                        window.Editor.wrapText('**');
                    }
                });
            }

            // Italic
            const italicBtn = document.getElementById('italic-btn');
            if (italicBtn) {
                italicBtn.addEventListener('click', () => {
                    if (window.Editor) {
                        window.Editor.wrapText('*');
                    }
                });
            }

            // Code
            const codeBtn = document.getElementById('code-btn');
            if (codeBtn) {
                codeBtn.addEventListener('click', () => {
                    if (window.Editor) {
                        const selected = window.Editor.getSelectedText();
                        if (selected.includes('\n')) {
                            // Multi-line: code block
                            window.Editor.insertCodeBlock();
                        } else {
                            // Single line: inline code
                            window.Editor.wrapText('`');
                        }
                    }
                });
            }

            // Link
            const linkBtn = document.getElementById('link-btn');
            if (linkBtn) {
                linkBtn.addEventListener('click', () => {
                    const url = prompt('URL del enlace:', 'https://');
                    if (url) {
                        const text = window.Editor ? window.Editor.getSelectedText() : '';
                        const linkText = text || prompt('Texto del enlace:', 'link');
                        if (linkText && window.Editor) {
                            window.Editor.insertLink(url, linkText);
                        }
                    }
                });
            }

            // Image
            const imageBtn = document.getElementById('image-btn');
            if (imageBtn) {
                imageBtn.addEventListener('click', () => {
                    const url = prompt('URL de la imagen:', 'https://');
                    if (url) {
                        const alt = prompt('Texto alternativo:', 'image');
                        if (alt && window.Editor) {
                            window.Editor.insertImage(url, alt);
                        }
                    }
                });
            }
        },

        // Setup heading select
        setupHeadingSelect() {
            const select = document.getElementById('heading-select');
            if (select) {
                select.addEventListener('change', (e) => {
                    const value = e.target.value;
                    if (value && window.Editor) {
                        const level = parseInt(value.replace('h', ''));
                        window.Editor.insertHeading(level);
                    }
                    // Reset select
                    select.value = '';
                });
            }
        }
    };

    // Setup keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (!window.Editor) return;

        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const modifier = isMac ? e.metaKey : e.ctrlKey;

        if (!modifier) return;

        switch (e.key.toLowerCase()) {
            case 'b':
                e.preventDefault();
                window.Editor.wrapText('**');
                break;
            case 'i':
                e.preventDefault();
                window.Editor.wrapText('*');
                break;
            case 'k':
                e.preventDefault();
                document.getElementById('link-btn')?.click();
                break;
            case '`':
                e.preventDefault();
                window.Editor.wrapText('`');
                break;
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => Toolbar.init());
    } else {
        Toolbar.init();
    }

    // Expose globally
    window.Toolbar = Toolbar;

})();
