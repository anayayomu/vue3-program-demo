<template>
  <div class="homeCateGories">
    <template v-for="(item) in cateGories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/moudle/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
const {cateGories} = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.homeCateGories{
  display: flex;
  overflow-x: auto;
  margin: 10px;
  &::-webkit-scrollbar{
    display: none;
  }
  .item{
    width: 70px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img{
      width: 32px;
      height: 32px;
    }
  }
}
</style>