<template>
  <div class="item">
    <div class="item-inner">
      <img :src="itemData.image.url" alt="" />
      <div class="infos">
        <div class="location">
          <img src="@/asset/img/home/icon_location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="score">
          <div class="new">{{ "￥" + itemData.finalPrice }}</div>
          <div class="discount" v-if="itemData.priceTipBadge">
            {{ itemData.priceTipBadge.text }}
          </div>
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
  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 6px;

    img {
      width: 100%;
      border-radius: 5px;
    }

    .infos {
      bottom: 0;
      padding: 8px 10px;

      .location{
        display: flex;
        img{
          width: 12px;
          height: 12px;
        }
        span{
          font-size: 12px;
          margin-left: 10px;
        }
      }

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: --webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .score {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(27px);

        .discount{
          font-size: 12px;
          color: red;
          font-weight: 700;
        }
      }
    }
  }
}
</style>