<script setup>
	import { useCourse } from '~/composables/useCourse'
	import { useCourseProgress } from '~/stores/courseProgress'

	const course = await useCourse()
	const route = useRoute()
	const { chapterSlug, lessonSlug } = route.params
	const lesson = await useLesson(chapterSlug, lessonSlug)
	const store = useCourseProgress()
	const { initialize, toggleComplete } = store

	const user = useSupabaseUser()

	initialize()

	definePageMeta({
		middleware: [
			async function ({ params }, from) {
				const course = await useCourse()

				const chapter = course.value.chapters.find(
					(chapter) => chapter.slug === params.chapterSlug
				)
				if (!chapter) {
					return abortNavigation(
						createError({
							statusCode: 404,
							message: 'Chapter not found'
						})
					)
				}
				const lesson = chapter.lessons.find(
					(lesson) => lesson.slug === params.lessonSlug
				)
				if (!lesson) {
					return abortNavigation(
						createError({
							statusCode: 404,
							message: 'Lesson not found'
						})
					)
				}
			},
			'auth'
		]
	})

	const isCompleted = computed(() => {
		return store.progress?.[chapterSlug]?.[lessonSlug] || false
	})

	const chapter = computed(() => {
		return course.value.chapters.find(
			(chapter) => chapter.slug === route.params.chapterSlug
		)
	})

	const title = computed(() => {
		return `${lesson.value.title} - ${course.value.title}`
	})

	useHead({
		title
	})
</script>

<template>
	<div>
		<p class="mt-0 uppercase font-bold text-slate-400 mb-1">
			Lesson {{ chapter.number }} - {{ lesson.number }}
		</p>
		<h2 class="my-0">{{ lesson.title }}</h2>
		<div class="flex space-x-4 mt-2 mb-8">
			<NuxtLink
				v-if="lesson.sourceUrl"
				class="font-normal text-md text-gray-500"
				:href="lesson.sourceUrl"
			>
				Download Source Code
			</NuxtLink>
			<NuxtLink
				v-if="lesson.downloadUrl"
				class="font-normal text-md text-gray-500"
				:href="lesson.downloadUrl"
			>
				Download Video
			</NuxtLink>
		</div>
		<VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />
		<p>{{ lesson.text }}</p>
		<ClientOnly>
			<LessonCompleteButton
				v-if="user"
				:model-value="isCompleted"
				@update:model-value="toggleComplete"
			/>
		</ClientOnly>
	</div>
</template>
server/composables/useCourse
