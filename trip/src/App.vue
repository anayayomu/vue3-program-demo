<script setup>

import tabBar from '@/componment/tabbar/index.vue'
import { useRouter } from 'vue-router'


const route = useRouter()

</script>

<template>
    <div class="wrapper">
      <router-view />
      <tab-bar v-if="!$route.meta.hideTabBar" />
    </div>
</template>

<style scoped>

</style>
