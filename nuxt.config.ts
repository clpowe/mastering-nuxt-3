// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	}
})
