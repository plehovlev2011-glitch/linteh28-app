// Простой Service Worker для кэширования
const CACHE_NAME = 'lintech-v1';
const urlsToCache = [
  '/',
  'index.html',
  'openonyourphone.png',
  'openaspwa.png',
  'openaspwa_animator.gif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
