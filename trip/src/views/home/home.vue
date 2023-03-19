<template>
  <div class="home">
    <navBar />
    <div class="img">
      <img src="@/asset/img/home/banner.webp" alt="">
    </div>
    <searchBoxVue />
    <div class="search" v-if="showSearchBox">
      <searchBar :start-date="'03-19'" :end-date="'03-20'"/>
    </div>
    <homeContentVue />
  </div>
</template>

<script setup>

import navBar from './cpns/nav-bar.vue';
import searchBoxVue from './cpns/searchBox.vue';
import useHomeStore from "@/store/moudle/home";
import homeContentVue from './cpns/home-content.vue';
import useScroll from '@/hook/useScroll'
import { ref } from 'vue';
import { watch } from 'vue';
import searchBar from '@/componment/search/searchBar.vue';

const homeStore = useHomeStore()
homeStore.fetchHotPlace()
homeStore.fetchgetCateGories()
homeStore.fetchgetHouseList()

const { isReachBottom,scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchgetHouseList().then(() => {
      isReachBottom.value = false
    })
    
  }
})

const showSearchBox = ref(false)
watch(scrollTop, (newValue)=> {
  showSearchBox.value = newValue > 500
})

</script>

<style lang="less" scoped>

.home{
  padding-bottom: 65px;

  .img{

    img{
      width: 100%;
     }
  }

  .search{
    height: 41px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 10px;
    background-color: #fff;
    z-index: 10;
  }
 
}

</style>
