
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/favitor",
      component:()=>import("@/views/favitor/favitor.vue")
    },
    {
      path: "/message",
      component:()=>import("@/views/message/message.vue")
    },
    {
      path: "/order",
      component:()=>import("@/views/order/order.vue")
    },
    {
      path: "/reCity",
      component: () => import("@/views/home/views/city.vue"),
      meta: {
        hideTabBar:true
      }
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hideTabBar:true
      }
    }
  ]
})

export default router
