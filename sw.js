const CACHE_NAME = 'EsTragos-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/sounds/asesino.mp3',
  '/sounds/medusa.mp3',
  '/sounds/not.mp3',
  '/sounds/slot.mp3',
  '/img/fondo2.jpg',
  '/icon-192x192.png',
  // agrega todos los recursos locales que necesites
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});