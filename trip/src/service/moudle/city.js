
import axiosAgain from '@/service/request/index'

export function getCityAll() {
  return axiosAgain.get({
    url:"/city/list"
  })
}
