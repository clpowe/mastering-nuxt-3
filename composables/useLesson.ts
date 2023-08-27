import { LessonWithPath } from '~/types/course'
import useFetchWithCache from './useFetchWithCache'

export const useLesson = async (chapterSlug: string, lessonSlug: string) =>
	useFetchWithCache<LessonWithPath>(
		`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
	)
