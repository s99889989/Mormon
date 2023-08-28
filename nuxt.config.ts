// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8010,
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: '耶穌基督後期聖徒教會-台東支會',
      meta: [
        { name: 'description', content: '台東支會' },
        { name: 'og:title', content: '台東支會' },
        { name: 'og:description', content: '台東支會' },
        { name: 'og:image', content: '/assets/icon/hat.png' },

      ],
      link: [
        {
          rel: "icon",
          href: "/assets/icon/hat.png",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9",
          crossorigin: "anonymous"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
          integrity: "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm",
          crossorigin: "anonymous"
        },
        {
          src: "https://kit.fontawesome.com/168d3a888b.js",
          crossorigin: "anonymous"
        }
      ]
    }
  }
})
