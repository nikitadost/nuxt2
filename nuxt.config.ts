import axios from "axios";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt_basic",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },
  ssr: true,
  target: "server",
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  axios: {
    baseURL: "https://easydev.club/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  },
  loading: "~/components/LoadingBar.vue",
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/typescript-build"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  builds: [
    {
      src: "nuxt.config.ts",
      use: "@nuxtjs/vercel-builder",
      config: {},
    },
  ],
};
