import useFetchWithCache from './useFetchWithCache'
import { CourseMeta } from '~/types/course'

export const useCourse = async () =>
	useFetchWithCache<CourseMeta>('/api/course/meta')
