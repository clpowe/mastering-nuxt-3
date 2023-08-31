import vsharp from 'vite-plugin-vsharp'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	runtimeConfig: {
		stripeSecret: '',
		public: {
			stripeKey: ''
		}
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'@nuxtjs/supabase',
		'@pinia/nuxt'
	],
	vite: {
		plugins: [vsharp()]
	},
	routeRules: {
		'/landing': { prerender: true }
	},
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
