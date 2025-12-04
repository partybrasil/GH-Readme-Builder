/**
 * Service Worker for GH-Readme-Builder
 * Enables offline functionality and caching
 */

const CACHE_NAME = 'gh-readme-builder-v1';
const urlsToCache = [
    './',
    './index.html',
    './css/reset.css',
    './css/variables.css',
    './css/main.css',
    './css/components.css',
    './css/layout.css',
    './css/themes.css',
    './css/responsive.css',
    './js/app.js',
    './js/utils/storage.js',
    './js/utils/toast.js',
    './js/utils/modal.js',
    './js/core/editor.js',
    './js/core/preview.js',
    './js/core/toolbar.js',
    './js/core/export.js',
    './js/core/import.js',
    './js/core/templates.js',
    './js/widgets/widgets.js',
    './manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('Cache install failed:', error);
            })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then((response) => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    // Don't cache CDN resources
                    if (!event.request.url.includes('cdn.jsdelivr.net')) {
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                    }

                    return response;
                }).catch((error) => {
                    console.error('Fetch failed:', error);
                    // Could return a custom offline page here
                });
            })
    );
});
