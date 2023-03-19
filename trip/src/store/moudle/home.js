import { defineStore } from "pinia";
import {getHotPlace,getCateGories,getHouseList} from '@/service/moudle/home'

const useHomeStore = defineStore("hot", {
  state: () => ({
    hotSuggests: [],
    cateGories: [],
    homeList: [],
    currentPage:1
  }),
  actions: {
    async fetchHotPlace() {
      const res = getHotPlace();
      this.hotSuggests = res;
      // console.log(res);
    },

    async fetchgetCateGories() {
      const res = await getCateGories()
      // console.log(res.data);
      this.cateGories = res.data
    },

    async fetchgetHouseList() {
      const res = await getHouseList(this.currentPage++)
      // console.log(res.data);
      this.homeList.push(...res.data)
    }

  },
});

export default useHomeStore;
