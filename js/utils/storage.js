/**
 * Storage Module
 * Handles LocalStorage operations
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'gh-readme-builder-content';

    const Storage = {
        // Save content to localStorage
        save() {
            try {
                const editor = document.getElementById('markdown-editor');
                if (editor) {
                    const content = editor.value;
                    localStorage.setItem(STORAGE_KEY, content);
                    return true;
                }
                return false;
            } catch (error) {
                console.error('Error saving to storage:', error);
                return false;
            }
        },

        // Load content from localStorage
        load() {
            try {
                const content = localStorage.getItem(STORAGE_KEY);
                return content || '';
            } catch (error) {
                console.error('Error loading from storage:', error);
                return '';
            }
        },

        // Clear storage
        clear() {
            try {
                localStorage.removeItem(STORAGE_KEY);
                return true;
            } catch (error) {
                console.error('Error clearing storage:', error);
                return false;
            }
        },

        // Get item from storage
        getItem(key) {
            try {
                return localStorage.getItem(key);
            } catch (error) {
                console.error('Error getting item from storage:', error);
                return null;
            }
        },

        // Set item in storage
        setItem(key, value) {
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (error) {
                console.error('Error setting item in storage:', error);
                return false;
            }
        },

        // Remove item from storage
        removeItem(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error('Error removing item from storage:', error);
                return false;
            }
        }
    };

    // Expose globally
    window.Storage = Storage;

})();
