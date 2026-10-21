/* HeadPrint service worker — offline app shell.
   Bump CACHE when you want clients to refresh cached assets. */
const CACHE = 'headprint-v3';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.host);
  if (!sameOrigin && !isFont) return;
  const isNav = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  const store = res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); return res; };
  if (isNav) {
    // network-first for the page, so updates show immediately when online
    e.respondWith(fetch(req).then(store).catch(() => caches.match(req).then(h => h || caches.match('index.html'))));
  } else {
    // cache-first for static assets and fonts
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(store)));
  }
});
