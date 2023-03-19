
import { defineStore } from "pinia";
import axios from 'axios';

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName:"广州"
    }
  }),
  actions: {
    async fetchCity() {
      const res = await axios.get("http://123.207.32.32:1888/api/city/all").then(res => {
      this.allCities = res.data.data
    })
    }
  }
})

export default useCityStore
