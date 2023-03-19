<template>
  <div class="search">
    <div class="select">
      <div class="stay">
        <div class="title">住</div>
        <div class="date">{{startDateStr}}</div>
      </div>
      <div class="leave">
        <div class="title">离</div>
        <div class="date">{{endDateStr}}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyWord">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/store/moudle/main";
import { formatDay } from "@/utils/format";
import { computed } from "vue";

const mainStore = useMainStore()
const { startDate, endDate } = mainStore
const startDateStr = computed(()=>formatDay(startDate.value))
const endDateStr = computed(()=>formatDay(endDate.value))

</script>

<style lang="less" scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .select {
    .stay {
      display: flex;
      font-size: 12px;
    }

    .leave {
      display: flex;
      font-size: 12px;
    }
  }

  .content{
    color: rgba(51, 51, 51, .5);
    font-size: 12px;
  }

  .right{
    width: 20px;
    height: 20px;
    background-color: #000;
    .icon-search{
      background-image: url('') no-repeat;
    }
  }
}

.title,.date {
  margin-left: 5px;
}
</style>