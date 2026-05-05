// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {
        config: './tailwind.config.js'
      },
      autoprefixer: {}
    }
  },
  // Only let the Tailwind module handle CSS
  ssr: true,
  app: {
    head: {
      title: 'David P Mitchell',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of David P Mitchell, showcasing web development' },
        { name: 'keywords', content: 'web development, portfolio, David Mitchell, Nuxt, react, .net, Vue' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-CYZQFN61ZP', async: true },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CYZQFN61ZP');
          `,
        } as any
      ]
    },
    baseURL:'/'
  },
  css:['~/assets/css/main.css'],
  nitro: {
    preset: 'static'
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'blueimp-md5', // CJS
      ]
    }
  }
})
