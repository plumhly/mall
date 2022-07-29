<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" indicator-color="white" v-if="isShowBanner">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.carouselUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },

  data() {
    return {
      isShowBanner: false,
      banners: [],
    };
  },

  onMounted() {},
};
</script>

<style lang="scss" scoped>
.swiper {
}
</style>