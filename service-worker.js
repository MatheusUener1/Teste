
self.addEventListener('install', (event) => {
    console.log('Service Worker instalado.');
});

self.addEventListener('fetch', (event) => {
    // Você pode adicionar funcionalidades de cache aqui no futuro, se desejar.
});
