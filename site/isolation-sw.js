// GitHub Pages bootstrap: apply the same isolation headers as Godot's
// official PWA worker. Fetch fresh files; do not cache game data or saves.
'use strict';
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  const request = event.request;
  if (new URL(request.url).origin !== self.location.origin) return;
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
  event.respondWith((async () => {
    // Revalidate changed WASM/PCK files on GitHub Pages after a deployment.
    const response = await fetch(request, {cache: 'no-cache'});
    if (response.status === 0) return response;
    const headers = new Headers(response.headers);
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
    headers.set('Cross-Origin-Resource-Policy', 'same-origin');
    return new Response(response.body, {status: response.status, statusText: response.statusText, headers});
  })());
});
