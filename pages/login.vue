<script lang="ts" setup>
	const course = await useCourse()
	const { query } = useRoute()
	const supabase = useSupabaseClient()
	const user = useSupabaseUser()

	watchEffect(async () => {
		if (user.value) {
			await navigateTo(query.redirectTo as string, {
				replace: true
			})
		}
	})

	const login = async () => {
		const redirectTo = `${window.location.origin}${query.redirectTo}`

		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'github'
		})

		if (error) {
			console.error(error)
		}
	}
</script>

<template>
	<div class="prose w-full max-w-2xl">
		<h1>Log in to {{ course.title }}</h1>
		<button
			class="bg-blue-500 text-white font font-bold py-2 px-4 rounded"
			@click="login"
		>
			Log in with Github
		</button>
	</div>
</template>
