export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'poc-pwa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  pwa: {
    meta: {
      name: 'Copia Kenya',
      theme_color: '#fff',
      lang: 'en',
      description: 'Copia',
      twitterCard: 'summary_large_image'
    },
    manifest: {
      name: 'Copia Kenya',
      description: 'Copia',
      theme_color: '#fff',
      short_name: 'Copia',
      lang: 'en',
      id: '/?standalone=true',
    },
    icon: {
      purpose: 'any',
      fileName: 'logo_pwa.png',
      source: '/logo_pwa.png'
    },
    workbox: {
      //workboxURL: 'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js',
      enabled: true,
      cleanupOutdatedCaches: true,
      preCaching:[
        '/error/error.svg',
        '/icons/empty-cart.svg',
        '/icons/favourites.svg',
        '/favicon.ico'
      ],
      offlineStrategy: 'StaleWhileRevalidate',
     
      //cachingExtensions: '~/helpers/cache/browser.js',
      // importScripts: [
      //   '/warmup.js'
      // ]
    }
  },
  buildModules: [
    '@nuxtjs/pwa',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
