// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //devtools: { enabled: true },
  // Add tailwindcss: run: npm install --save-dev @nuxtjs/tailwindcss
  // then add the folowing module:
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: { // Server config for runtime
    currencyKey: process.env.CURRENCY_API_KEY, // Using our environment variable from .env file
    public: {
      // This would be for frontend config
    }
  }
})
