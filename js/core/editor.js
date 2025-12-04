/**
 * Editor Module
 * Handles the markdown editor functionality
 */

(function () {
    'use strict';

    let editor;
    let undoStack = [];
    let redoStack = [];
    let lastSavedContent = '';

    const Editor = {
        // Initialize editor
        init() {
            editor = document.getElementById('markdown-editor');
            if (!editor) {
                console.error('Editor element not found');
                return;
            }

            // Load saved content
            const savedContent = window.Storage ? window.Storage.load() : '';
            if (savedContent) {
                editor.value = savedContent;
                lastSavedContent = savedContent;
            }

            // Setup event listeners
            this.setupEventListeners();

            // Trigger initial preview update
            if (window.Preview) {
                window.Preview.update();
            }
        },

        // Setup event listeners
        setupEventListeners() {
            // Input event with debounce for live preview
            let debounceTimer;
            editor.addEventListener('input', () => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    if (window.Preview && window.AppState && window.AppState.livePreview) {
                        window.Preview.update();
                    }
                    
                    // Save to storage
                    if (window.Storage) {
                        window.Storage.save();
                    }
                }, 300);
            });

            // Tab key handling
            editor.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    this.insertText('  '); // 2 spaces
                }
            });

            // Prevent default for handled shortcuts
            editor.addEventListener('keydown', (e) => {
                if (e.ctrlKey || e.metaKey) {
                    if (['b', 'i', 'k'].includes(e.key.toLowerCase())) {
                        e.preventDefault();
                    }
                }
            });
        },

        // Get current content
        getContent() {
            return editor ? editor.value : '';
        },

        // Set content
        setContent(content) {
            if (editor) {
                editor.value = content;
                if (window.Preview) {
                    window.Preview.update();
                }
            }
        },

        // Clear editor
        clear() {
            if (editor) {
                editor.value = '';
                if (window.Preview) {
                    window.Preview.update();
                }
                if (window.Storage) {
                    window.Storage.clear();
                }
            }
        },

        // Insert text at cursor position
        insertText(text) {
            if (!editor) return;

            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            const currentValue = editor.value;

            editor.value = currentValue.substring(0, start) + text + currentValue.substring(end);
            editor.selectionStart = editor.selectionEnd = start + text.length;
            editor.focus();

            // Trigger update
            const event = new Event('input', { bubbles: true });
            editor.dispatchEvent(event);
        },

        // Wrap selected text with prefix and suffix
        wrapText(prefix, suffix = prefix) {
            if (!editor) return;

            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            const selectedText = editor.value.substring(start, end);
            const replacement = prefix + selectedText + suffix;

            editor.value = editor.value.substring(0, start) + replacement + editor.value.substring(end);
            
            // Select the wrapped text
            editor.selectionStart = start + prefix.length;
            editor.selectionEnd = end + prefix.length;
            editor.focus();

            // Trigger update
            const event = new Event('input', { bubbles: true });
            editor.dispatchEvent(event);
        },

        // Insert heading
        insertHeading(level) {
            const prefix = '#'.repeat(level) + ' ';
            this.insertAtLineStart(prefix);
        },

        // Insert at line start
        insertAtLineStart(text) {
            if (!editor) return;

            const start = editor.selectionStart;
            const currentValue = editor.value;
            
            // Find line start
            let lineStart = start;
            while (lineStart > 0 && currentValue[lineStart - 1] !== '\n') {
                lineStart--;
            }

            editor.value = currentValue.substring(0, lineStart) + text + currentValue.substring(lineStart);
            editor.selectionStart = editor.selectionEnd = lineStart + text.length;
            editor.focus();

            // Trigger update
            const event = new Event('input', { bubbles: true });
            editor.dispatchEvent(event);
        },

        // Insert link
        insertLink(url = '', text = '') {
            const linkText = text || 'link text';
            const linkUrl = url || 'https://';
            const markdown = `[${linkText}](${linkUrl})`;
            this.insertText(markdown);
        },

        // Insert image
        insertImage(url = '', alt = '') {
            const altText = alt || 'image description';
            const imageUrl = url || 'https://';
            const markdown = `![${altText}](${imageUrl})`;
            this.insertText(markdown);
        },

        // Insert code block
        insertCodeBlock(language = '') {
            const code = `\`\`\`${language}\n\n\`\`\`\n`;
            this.insertText(code);
        },

        // Insert table
        insertTable(rows = 3, cols = 3) {
            let table = '\n';
            
            // Header
            table += '| ' + Array(cols).fill('Header').join(' | ') + ' |\n';
            
            // Separator
            table += '| ' + Array(cols).fill('---').join(' | ') + ' |\n';
            
            // Rows
            for (let i = 0; i < rows; i++) {
                table += '| ' + Array(cols).fill('Cell').join(' | ') + ' |\n';
            }
            
            table += '\n';
            this.insertText(table);
        },

        // Get selected text
        getSelectedText() {
            if (!editor) return '';
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            return editor.value.substring(start, end);
        },

        // Focus editor
        focus() {
            if (editor) {
                editor.focus();
            }
        },

        // Get cursor position
        getCursorPosition() {
            return editor ? editor.selectionStart : 0;
        },

        // Set cursor position
        setCursorPosition(position) {
            if (editor) {
                editor.selectionStart = editor.selectionEnd = position;
                editor.focus();
            }
        }
    };

    // Expose globally
    window.Editor = Editor;

})();
