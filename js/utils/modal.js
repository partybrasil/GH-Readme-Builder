/**
 * Modal Module
 * Handles modal dialogs
 */

(function () {
    'use strict';

    const Modal = {
        // Initialize modal system
        init() {
            // Setup close buttons
            document.querySelectorAll('.modal-close, [data-modal]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const modalId = btn.getAttribute('data-modal');
                    if (modalId) {
                        this.hide(modalId);
                    } else {
                        const modal = btn.closest('.modal');
                        if (modal) {
                            modal.classList.remove('active');
                        }
                    }
                });
            });

            // Setup overlay clicks
            document.querySelectorAll('.modal-overlay').forEach(overlay => {
                overlay.addEventListener('click', () => {
                    const modal = overlay.closest('.modal');
                    if (modal) {
                        modal.classList.remove('active');
                    }
                });
            });

            // Setup export options
            document.querySelectorAll('.export-option').forEach(option => {
                option.addEventListener('click', () => {
                    const format = option.getAttribute('data-format');
                    if (window.Export) {
                        window.Export.export(format);
                        this.hide('export-modal');
                    }
                });
            });

            // Setup ESC key to close modals
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal.active').forEach(modal => {
                        modal.classList.remove('active');
                    });
                }
            });
        },

        // Show modal
        show(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                
                // Focus first input if exists
                const firstInput = modal.querySelector('input, textarea, select');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 100);
                }
            }
        },

        // Hide modal
        hide(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('active');
            }
        },

        // Hide all modals
        hideAll() {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    };

    // Expose globally
    window.Modal = Modal;

})();
