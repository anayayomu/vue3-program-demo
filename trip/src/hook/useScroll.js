
import { onMounted, onUnmounted } from "vue"
import { ref } from "vue"
import {throttle} from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)

  

  const scrollList = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (clientHeight.value + scrollTop.value + 10 >= scrollHeight.value) {
      isReachBottom.value = true
    }
  },500)
  onMounted(() => {
    window.addEventListener("scroll", scrollList)
  })
  onUnmounted(() => {
    window.removeEventListener("scroll",scrollList)
  })

  return {isReachBottom,scrollHeight,scrollTop,clientHeight}
}