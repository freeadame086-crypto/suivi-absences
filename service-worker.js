const CACHE_NAME = 'suivi-absences-v1';

self.addEventListener('install', event => {
  console.log('Service Worker installé');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      console.log('Mode hors ligne activé');
      return new Response('Application hors ligne - Réessayez plus tard');
    })
  );
});