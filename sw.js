const CACHE_NAME = 'ai-supermarket-v2';
const APP_SHELL = ['./', './index.html', './ai-supermarket-homepage.html', './subpage.html', './manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
