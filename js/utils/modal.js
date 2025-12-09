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
            document.querySelectorAll('.modal-close, button[data-modal], .btn[data-modal]').forEach(btn => {
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
        },

        // Show confirmation dialog
        confirm(message, title = 'Confirmar') {
            return new Promise((resolve) => {
                const modal = document.getElementById('confirm-modal');
                const titleEl = document.getElementById('confirm-modal-title');
                const messageEl = document.getElementById('confirm-modal-message');
                const acceptBtn = document.getElementById('confirm-modal-accept');
                
                if (!modal || !messageEl || !acceptBtn) {
                    // Fallback to native confirm if modal not found
                    resolve(window.confirm(message));
                    return;
                }

                // Set message and title
                titleEl.textContent = title;
                messageEl.textContent = message;

                // Remove old event listeners by cloning
                const newAcceptBtn = acceptBtn.cloneNode(true);
                acceptBtn.parentNode.replaceChild(newAcceptBtn, acceptBtn);

                // Add new event listeners
                const handleAccept = () => {
                    this.hide('confirm-modal');
                    resolve(true);
                };

                const handleCancel = () => {
                    this.hide('confirm-modal');
                    resolve(false);
                };

                newAcceptBtn.addEventListener('click', handleAccept);

                // Setup cancel buttons
                const cancelBtns = modal.querySelectorAll('[data-modal="confirm-modal"]');
                cancelBtns.forEach(btn => {
                    const newBtn = btn.cloneNode(true);
                    btn.parentNode.replaceChild(newBtn, btn);
                    newBtn.addEventListener('click', handleCancel);
                });

                // Show modal
                this.show('confirm-modal');

                // Focus accept button
                setTimeout(() => newAcceptBtn.focus(), 100);
            });
        }
    };

    // Expose globally
    window.Modal = Modal;

})();
