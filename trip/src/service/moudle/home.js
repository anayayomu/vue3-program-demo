import HYRequest from '@/service/request/index'

export function getHotPlace() {
  return HYRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCateGories() {
  return HYRequest.get({
    url: "/home/cateGories"
  })
}

export function getHouseList(currentPage) {
  return HYRequest.get({
    url: "/home/houselist",
    params: {
      page:currentPage
    }
  })
}

