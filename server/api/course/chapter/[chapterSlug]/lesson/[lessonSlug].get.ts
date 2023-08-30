import { PrismaClient } from '@prisma/client'
import { protectRoute } from '~/server/utiles/protectRoute'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
	// @ts-ignore
	if (event.context.params.chapterSlug !== '1-chapter-1') {
		protectRoute(event)
	}
	// @ts-ignore
	const { chapterSlug, lessonSlug } = event.context.params

	const lesson = await prisma.lesson.findFirst({
		where: {
			slug: lessonSlug,
			Chapter: {
				slug: chapterSlug
			}
		}
	})

	if (!lesson) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Lesson not found'
		})
	}

	return {
		...lesson,
		path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
	}
})
