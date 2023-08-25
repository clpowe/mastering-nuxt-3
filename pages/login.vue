<script lang="ts" setup>
	const { title } = useCourse()
</script>

<template>
	<div class="prose w-full max-w-2xl">
		<h1>Log in to {{ title }}</h1>
		<button class="bg-blue-500 text-white font font-bold py-2 px-4 rounded">
			Log in with Github
		</button>
	</div>
</template>
