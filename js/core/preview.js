/**
 * Preview Module
 * Handles markdown preview rendering
 */

(function () {
    'use strict';

    let previewElement;

    const Preview = {
        // Initialize preview
        init() {
            previewElement = document.getElementById('markdown-preview');
            if (!previewElement) {
                console.error('Preview element not found');
                return;
            }

            // Initial update
            this.update();
        },

        // Update preview
        update() {
            if (!previewElement) return;

            const content = window.Editor ? window.Editor.getContent() : '';
            const html = this.render(content);
            previewElement.innerHTML = html;
        },

        // Render markdown to HTML
        render(markdown) {
            if (!markdown) {
                return '<div style="padding: 2rem; text-align: center; color: var(--color-text-tertiary);">Vista previa del README aparecerá aquí...</div>';
            }

            try {
                // Use marked.js if available
                if (typeof marked !== 'undefined') {
                    // Configure marked
                    marked.setOptions({
                        breaks: true,
                        gfm: true,
                        headerIds: true,
                        mangle: false,
                        sanitize: false
                    });

                    let html = marked.parse(markdown);

                    // Sanitize with DOMPurify if available
                    if (typeof DOMPurify !== 'undefined') {
                        html = DOMPurify.sanitize(html, {
                            ALLOWED_TAGS: [
                                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                                'p', 'a', 'ul', 'ol', 'li', 'blockquote',
                                'code', 'pre', 'strong', 'em', 'del',
                                'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
                                'br', 'hr', 'div', 'span', 'sup', 'sub'
                            ],
                            ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'align']
                        });
                    }

                    return html;
                }

                // Fallback: basic markdown rendering
                return this.basicMarkdownRender(markdown);

            } catch (error) {
                console.error('Error rendering markdown:', error);
                return '<div style="color: var(--color-error);">Error al renderizar el markdown</div>';
            }
        },

        // Basic markdown rendering (fallback)
        basicMarkdownRender(markdown) {
            let html = markdown;

            // Headers
            html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
            html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
            html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

            // Bold
            html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

            // Italic
            html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

            // Links
            html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');

            // Images
            html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" />');

            // Code
            html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

            // Line breaks
            html = html.replace(/\n\n/gim, '</p><p>');
            html = html.replace(/\n/gim, '<br>');

            return '<p>' + html + '</p>';
        },

        // Get preview HTML
        getHTML() {
            return previewElement ? previewElement.innerHTML : '';
        },

        // Export as HTML file
        exportHTML() {
            const content = window.Editor ? window.Editor.getContent() : '';
            const html = this.render(content);

            const fullHTML = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
            color: #333;
        }
        h1, h2, h3, h4, h5, h6 {
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }
        h1 { font-size: 2rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; }
        h2 { font-size: 1.5rem; border-bottom: 1px solid #eee; padding-bottom: 0.3rem; }
        a { color: #0366d6; text-decoration: none; }
        a:hover { text-decoration: underline; }
        code {
            background-color: #f6f8fa;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        pre {
            background-color: #f6f8fa;
            padding: 1rem;
            border-radius: 6px;
            overflow-x: auto;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        blockquote {
            border-left: 4px solid #dfe2e5;
            padding-left: 1rem;
            color: #6a737d;
            margin: 1rem 0;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 1rem 0;
        }
        th, td {
            border: 1px solid #dfe2e5;
            padding: 0.5rem 1rem;
            text-align: left;
        }
        th {
            background-color: #f6f8fa;
            font-weight: 600;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    ${html}
</body>
</html>`;

            return fullHTML;
        }
    };

    // Expose globally
    window.Preview = Preview;

})();
