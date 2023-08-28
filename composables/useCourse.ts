import { CourseOutline } from './../server/api/course/meta.get'
import useFetchWithCache from './useFetchWithCache'

export const useCourse = async () => {
	return useFetchWithCache<CourseOutline>('/api/course/meta')
}
