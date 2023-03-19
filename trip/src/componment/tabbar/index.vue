<template>
  <div class="tabbar">
    <template v-for="(item,index) in tabbarData" :key="index">
      <div class="tabbar-item" 
      :class="{active: currentIndex===index}"
      @click="itemClick(index,item)"
      >
        <img :src="getImgUrl(item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>

import tabbarData from '@/asset/data'
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const getImgUrl = (image) => {
  return new URL(`@/asset/img${image}`,import.meta.url).href
}

const currentIndex = ref(0)
const route = useRouter()
watch(route, (newRouter) => {
  const index = tabbarData.findIndex(item => item.path === newRouter.path)
  if(index === -1) return
  currentIndex.value = index
})

const router= useRouter()
const itemClick = (index,item) => {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style lang="less" scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #333;
  background-color: #fff;
}
.tabbar .tabbar-item{
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &.active{
    color: var(--primary-color);
  }

  img{
    width: 32px;
  }

  .text{
    font-size: 12px;
  }

}

</style>