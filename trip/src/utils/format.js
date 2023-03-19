
import dayjs from 'dayjs'

export function formatDay(data) {
  return dayjs(data).format('MM月DD日')
}

export function getStay(startDate,endDate) {
  return dayjs(endDate).diff(startDate,"day")
}
