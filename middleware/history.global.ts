export default defineNuxtRouteMiddleware((to, from) => {
	if (process.client) {
		const navigationHistory = useLocalStorage('history', [])
		navigationHistory.value.push(to.path)
	}
})
