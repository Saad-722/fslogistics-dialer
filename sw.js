self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache =>
      cache.addAll([
        '.',
        'index.html',
        'manifest.json',
        'favicon.ico',
        'favicon-192.png',
        'favicon-512.png',
        'sw.js'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
