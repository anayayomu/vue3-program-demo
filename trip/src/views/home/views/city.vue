<template>
  <div class="city top-page">
    <van-search
      v-model="searchValue"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
      @cancel="onCancel"
    />

    <van-tabs v-model:active="tabAct" color="#ff9854">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>

    <div class="content">
      <van-index-bar :sticky="false" :index-list="indexList">
        <van-index-anchor index="热门" />

        <div class="list">
          <template
            v-for="(city, index) in currentGroup?.hotCities"
            :key="index"
          >
            <div class="hotCity" @click="cityClick(city)">{{ city.cityName }}</div>
          </template>
        </div>

        <template v-for="(group, index) in currentGroup?.cities" :key="index">
          <van-index-anchor :index="group.group" />
          <template v-for="(city, index) in group.cities" :key="index">
            <van-cell :title="city.cityName" @click="cityClick(city)" />
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/store/moudle/index";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const searchValue = ref("");
const tabAct = ref();
const router = useRouter();

const onCancel = () => {
  router.back();
};

// getCityAll().then(res => {
//   console.log(res);
// })

const cityStore = useCityStore();
cityStore.fetchCity();
const { allCities } = storeToRefs(cityStore);
const currentGroup = computed(() => allCities.value[tabAct.value]);

const indexList = computed(() => {
  if (currentGroup.cities) {
    const list = currentGroup.cities.map(item => item.group)
    list.unshift("#")
    return list
  } else {
    return ["#","A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  }
  
})

const cityClick = (city) => {
  // console.log(city);
  cityStore.currentCity = city
  router.back()
}

</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px;
      padding-right: 28px;

      .hotCity {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        color: #000;
        margin-bottom: 10px;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
      }
    }
  }
}
</style>