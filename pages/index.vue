<template>
	<NuxtLink
		class="underline font-medium"
		:href="`/course/chapter/1-chapter-1/lesson/${firstLesson.slug}`"
	>
		Go to first lesson
	</NuxtLink>
</template>

<script setup lant="ts">
	const firstLesson = await useFirstLesson()
</script>
