/* Kartenreich Buch: offline lesbar. Bei Ã„nderungen VERSION hochzÃ¤hlen. */
const VERSION = 'kr-buch-v3';
const CORE = [
  './', './index.html', './manifest.webmanifest',
  './data-arkana.js', './data-staebe.js', './data-kelche.js', './data-schwerter.js', './data-muenzen.js',
  './img/logo.webp', './img/rueckseite.webp',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

/* Seite selbst: erst Netz, dann Speicher. Bilder, Schriften, Skripte: erst Speicher, dann Netz. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  })));
});
