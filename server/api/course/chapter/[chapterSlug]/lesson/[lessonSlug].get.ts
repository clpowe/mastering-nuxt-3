import course from '@/server/courseData'
import { Lesson, Chapter, Course, LessonWithPath } from '~/types/course'

course as Course

export default defineEventHandler((event): LessonWithPath => {
	const { chapterSlug, lessonSlug } = event.context.params

	console.log(chapterSlug)

	const chapter: Maybe<Chapter> = course.chapters.find(
		(chapter: Chapter) => chapter.slug === chapterSlug
	)

	if (!chapter) {
		throw createError({
			statusCode: 404,
			message: 'Chapter not found'
		})
	}

	const lesson: Maybe<Lesson> = chapter.lessons.find(
		(lesson: Lesson) => lesson.slug === lessonSlug
	)

	if (!lesson) {
		throw createError({
			statusCode: 404,
			message: 'Lesson not found'
		})
	}

	return {
		...lesson,
		path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
	}
})
