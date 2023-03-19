<template>
  <div class="searchBox">
    <div class="location">
      <div class="city" @click="reCity">{{ currentCity.cityName }}</div>
      <div class="coord" @click="getPosition">
        <div class="c-text">我的位置</div>
        <img src="@/asset/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <div class="rangeDate" @click="showCalendar = true">
      <div class="start">
        <span>入住</span>
        <span>{{ startDateStr }}</span>
      </div>
      <div class="stay">
        <span>共 {{ stayDay }} 晚</span>
      </div>
      <div class="end">
        <span>离开</span>
        <span>{{ endDateStr }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm"
    />
    <div class="search-btn" @click="goSearch">开始搜索</div>
    <homeCateGories />
  </div>
</template>

<script setup>
import useCityStore from "@/store/moudle";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { formatDay, getStay } from "@/utils/format";
import useHomeStore from "@/store/moudle/home";
import homeCateGories from "@/views/home/cpns/home-cateGories.vue";
import useMainStore from "@/store/moudle/main";

const router = useRouter();

// defineProps({
//   hotSuggests:{}
// })

const reCity = () => {
  router.push("/reCity");
};

const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

const mainStore = useMainStore()
const { startDate, endDate } = mainStore
console.log(startDate);
console.log(endDate);

const startDateStr = computed(()=>formatDay(startDate));
const endDateStr = computed(() => formatDay(endDate));

const stayDay = ref(getStay(startDate, endDate));

const showCalendar = ref(false);
const onConfirm = (value) => {
  const selectNow = value[0];
  const selectNew = value[1];
  mainStore.startDate = selectNow
  mainStore.endDate = selectNew
  stayDay.value = getStay(selectNow, selectNew);
  showCalendar.value = false;
};

const homeStore = useHomeStore()
homeStore.fetchHotPlace()
// const {hotSuggests} = homeStore

const goSearch = () => {
  router.push({
    path: "/search",
    query: {
      startDate:startDate.value,
      endDate:endDate.value,
      currentCity:currentCity.value.cityName
    }
  })
}

</script>

<style lang="less" scoped>
.searchBox {
  --van-calendar-popup-height: 100%;
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
    }

    .coord {
      width: 75px;
      display: flex;
      align-items: center;

      .c-text {
        margin-right: 3px;
      }

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .rangeDate {
    display: flex;
    justify-content: space-around;
    .start,
    .end {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
  .search-btn{
    margin: 20px 20px ;
    display: flex;
    justify-content: center;
    background-color: #ff9854;
    height: 44px;
    line-height: 40px;
    border-radius: 20px;
  }
}
</style>