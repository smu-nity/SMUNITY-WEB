import {AxiosResponse} from 'axios'
import {Course, CourseCulture, Domain} from '../types/Course'
import {Credit} from '../types/Credit'
import {Result} from '../types/Result'
import jwtAxios from '../util/jwtUtil'
import {TLoginParam} from './accountApi'

export const fetchCourses = async (
  params?: Record<string, string>
): Promise<Result<Course>> => {
  const res = await jwtAxios.get('/api/v1/courses', {params})
  return res.data
}

export const fetchCredit = async (): Promise<Credit> => {
  const res = await jwtAxios.get('/api/v1/courses/credit')
  return res.data
}

export const fetchCulture = async (domain: Domain): Promise<Result<CourseCulture>> => {
  const res = await jwtAxios.get(`/api/v1/courses/cultures/${domain}`)
  return res.data
}

export const courseUpload = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await jwtAxios.post('/api/v1/courses/upload', loginParam)
