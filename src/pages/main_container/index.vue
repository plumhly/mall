<template>
  <div>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>

    <van-tabbar fixed>
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :key="index"
        icon-prefix="icon"
        :icon="item.icon"
      >
        {{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    home: () => import("@/pages/home/"),
    // category: () => import("@/pages/category/"),
    // shopcart: () => import("@/page/shop_cart/"),
    // mine: () => import("@/pages/mine/"),
  },
  data() {
    return {
      tabbars: [
        {
          text: "首页",
          icon: "home",
        },
        {
          text: "分类",
          icon: "Category",
        },
        {
          text: "购物车",
          icon: "shopping",
        },
        {
          text: "我的",
          icon: "Person",
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
</style>