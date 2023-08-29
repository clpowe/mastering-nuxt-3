// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'@nuxtjs/supabase',
		'@pinia/nuxt'
	],
	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	},
	supabase: {
		redirect: false
	}
})
