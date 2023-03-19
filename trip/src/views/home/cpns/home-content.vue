<template>
  <div class="homeContent">
    <div class="content">
      <h2 class="title">热门精选</h2>
      <div class="list">
        <template v-for="(item,index) in homeList" :key="item.data.houseId">
          <homelist1Vue v-if="item.discoveryContentType === 9" :item-data="item.data" />
          <homelistV2 v-else-if="item.discoveryContentType === 3" :item-data="item.data" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import homelistV2 from "@/componment/homeList/homelist-v2.vue";
import homelist1Vue from "@/componment/homeList/homelist-1.vue";
import useHomeStore from "@/store/moudle/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
const { homeList } = storeToRefs(homeStore)

</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>