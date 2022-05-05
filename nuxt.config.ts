import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // https://color-mode.nuxtjs.org
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
  colorMode: {
    classSuffix: ''
  }
});