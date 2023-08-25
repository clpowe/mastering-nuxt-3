<template>
	<NuxtLayout>
		<div class="flex flex-col">
			<div v-if="error.statusCode === '404'" class="prose">
				<h1>404</h1>
				<h1>I guess that page doesn't exist</h1>
			</div>
			<div v-else class="prose">
				<h1>Dang</h1>
				<p>It looks like something broke.</p>
				<p>Sorry about that</p>
			</div>
			<p>
				<strong>{{ error.message }}</strong>
			</p>
			<p>
				Go to the
				<a @click="handleError" class="hover:cursor-pointer">first lesson.</a>
			</p>
		</div>
	</NuxtLayout>
</template>

<script setup>
	const error = useError()
	function handleError() {
		clearError({
			redirect:
				'/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
		})
	}
</script>
