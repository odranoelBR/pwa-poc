this.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('odoo-apis').then(async (cache) => {
        const response = await fetch('https://dev.copia.odoogap.com/api/odoo/getMegaMenu', { method: 'POST'});
        cache.put('megaMenu', response)
        return cache;
      })
    );
  });
  