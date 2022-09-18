/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */

const cacheOptions = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true
};

const timeoutPlugin = new workbox.expiration.ExpirationPlugin({
  // Timeout 1 hour
  maxEntries: 250,
  maxAgeSeconds: 1 * 60 * 60
});

const cachePlugin = {
  cacheKeyWillBeUsed: async ({ request }) => {
    const cacheKey = new Request(`${request.referrer}-${request.url}`, {
      headers: request.headers,
      method: 'GET'
    });

    return cacheKey;
  }
};

const storyblokHandler = new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'odoo-storyblok',
  cacheOptions,
  plugins: [cachePlugin, timeoutPlugin]
});

const apiHandler = new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'odoo-apis',
  cacheOptions,
  plugins: [cachePlugin, timeoutPlugin]
});

const imageHandler = new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'odoo-images',
  cacheOptions: { ignoreVary: true },
  plugins: [timeoutPlugin]
});

workbox.routing.registerRoute(({event}) => event.request.headers.get('Accept').includes('image'), imageHandler);
workbox.routing.registerRoute(new RegExp('(api\/odoo\/getProductTemplatesList$)'), apiHandler, 'POST');
workbox.routing.registerRoute(new RegExp('(api\/odoo\/getProductTemplate$)'), apiHandler, 'POST');
workbox.routing.registerRoute(new RegExp('(api\/sb\/getContent$)'), storyblokHandler, 'POST');
