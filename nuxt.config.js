export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Instadapp Docs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/highlight.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api',
  ],

  tailwindcss: {
    jit: true
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Montserrat: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.NODE_ENV === 'production' ? 'https://docsv2.instadapp.io' : 'http://localhost:3000'
    }
  },

  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'}
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
