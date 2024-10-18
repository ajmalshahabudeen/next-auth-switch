// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/ui",
    "@sidebase/nuxt-auth",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  auth: {
    globalAppMiddleware: true,
    provider: {
      type: "authjs",
      trustHost: false,
      // defaultProvider: "github",
      addDefaultCallbackUrl: true,
    },
  },
  runtimeConfig: {
    secret: process.env.AUTH_SECRET,
    encryptionKey: process.env.ENCRYPT_SECRET,
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not specified
  },
  experimental: {
    componentIslands: true,
  },
});
