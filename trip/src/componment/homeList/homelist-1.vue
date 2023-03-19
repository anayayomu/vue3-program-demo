<template>
  <div class="item">
    <div class="item-inner">
      <img :src="itemData.image.url" alt="" />
      <div class="infos">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="score">
          <van-rate :model-value="itemStore"
            color="#fff"
            :size="15"
            readonly
            allow-half
          />
          <div class="new">{{ "￥" + itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  itemData: {
    default: () => ({}),
  },
});
const itemStore = computed(() => {
  return Number(props.itemData.commentScore);
});
</script>

<style lang="less" scoped>
.item {
  width: 48%;
  border-radius: 10px;
  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 6px;

    img {
      width: 100%;
      border-radius: 5px;
    }

    .infos {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        display: --webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .score {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>