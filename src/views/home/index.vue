<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:41:48
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 20:29:34
 * @FilePath: /refactor-with-vue3/src/views/home/index.vue
-->
<template>
  <div class="home">
    <header class="home-header" :class="{ active: headerActive }">
      <div class="header-search">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search"
          >search keywords</router-link
        >
      </div>
      <svg-icon
        class="customer-service-icon"
        icon-class="customer-service"
      ></svg-icon>
    </header>
    <van-swipe
      class="swiper-carousel"
      lazy-render
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(image, index) in homeImgs" :key="index">
        <img class="lazy_img" @click="handleClick" :src="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>

    <section class="home-tags">
      <ul class="tags-content">
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon
            class="tags-icon"
            icon-class="chain-cat-boutique"
          ></svg-icon>
          <span class="item-text">Fashion</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="cm-area"></svg-icon>
          <span class="item-text">Clothes</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="collar-cm"></svg-icon>
          <span class="item-text">Mobiles</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="coupon-svg"></svg-icon>
          <span class="item-text">Jeans</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="chain-cat-member"></svg-icon>
          <span class="item-text">Electronics</span>
        </router-link>

      </ul>
    </section>

    <!-- <section class="spike-area">
      <ul class="spike-top">
        <router-link class="top-left" to="/chainCatSpike" tag="li">
          <div class="item-top">
            <span class="item-title">Chain cat flash kill</span>
            <div class="time-text">
              <span class="eight-time">Show at 8 o'clock</span>
              <van-count-down :time="timeData" class="time-count-down">
                <template v-slot="timeData">
                  <span class="time-item" v-if="timeData.hours < 10">{{
                    "0" + timeData.hours
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.hours }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.minutes < 10">{{
                    "0" + timeData.minutes
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.minutes }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.seconds < 10">{{
                    "0" + timeData.seconds
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
          </div>
          <div class="item-info">
            <div class="item-content">
              <img src="../../assets/image/home/demo1.png" />
              <span class="new-price">Br298</span>
              <span class="old-price">Br399</span>
            </div>
            <div class="item-content">
              <img src="../../assets/image/home/demo2.png" />
              <span class="new-price">Br298</span>
              <span class="old-price">Br399</span>
            </div>
            <div class="item-content">
              <img src="../../assets/image/home/demo3.png" />
              <span class="new-price">Br298</span>
              <span class="old-price">Br399</span>
            </div>
          </div>
        </router-link>
        <router-link class="top-right" to="/foundGoodGoods" tag="li">
          <div class="right-header">
            <span class="cat-spike-text">Found good stuff</span>
            <span class="tag-text">Good quality goods</span>
          </div>
          <span class="good-item">Good things are not expensive</span>
          <div class="item-imgs">
            <img src="../../assets/image/home/demo4.png" />
            <img src="../../assets/image/home/demo5.png" />
          </div>
        </router-link>
      </ul>

      <ul class="spike-center">
        <router-link class="center-item" to="/specialSpike" tag="li">
          <span class="center-title">Special price flash sale</span>
          <span class="center-descr">10 Birr rush purchase</span>
          <img src="../../assets/image/home/demo6.png" />
        </router-link>
        <router-link class="center-item" to="/brandSpike" tag="li">
          <span class="center-title">Brand Flash Sale</span>
          <span class="center-descr" style="color: #dd3749">Notebook Flash Sale</span>
          <img src="../../assets/image/home/demo7.png" />
        </router-link>
        <router-link class="center-item" to="/newProductLaunch" tag="li">
          <span class="center-title">New product launch</span>
          <span class="center-descr" style="#FC6380">New little black box</span>
          <img src="../../assets/image/home/demo8.png" />
        </router-link>
        <router-link class="center-item" to="/premiumRanking" tag="li">
          <span class="center-title">Excellent product ranking</span>
          <span class="center-descr" style="color: #91c95b">Best shopping on the list</span>
          <img src="../../assets/image/home/demo9.png" />
        </router-link>
      </ul>
      <ul class="spike-bottom">
        <li class="bottom-left">
          <div class="bottom-left-header">
            <span class="big-buy">Big name shopping</span>
            <span class="goods-name">
              Dell
              <svg-icon icon-class="right-arrow"></svg-icon>
            </span>
          </div>
          <span class="belive-big">Trust big brands</span>
          <div class="bottom-images">
            <img src="../../assets/image/home/demo10.png" />
            <img src="../../assets/image/home/demo11.png" />
          </div>
        </li>
        <router-link class="bottom-left" to="/loveShop" tag="li">
          <div class="bottom-left-header">
            <span class="big-buy">Love shopping in good stores</span>
            <span class="goods-name addColor">understand what you want</span>
          </div>
          <span class="belive-big">Come and have enough shopping</span>
          <div class="bottom-images">
            <img src="../../assets/image/home/demo12.png" />
            <img src="../../assets/image/home/demo13.png" />
          </div>
        </router-link>
      </ul>
    </section> -->

    <div class="content-tabs">
      <van-tabs
        :swipe-threshold="5"
        title-inactive-color="#3a3a3a"
        title-active-color="#D8182D"
        background="transparent"
        v-model="active"
        animated
      >
        <van-tab
          v-for="(list, index) in tabArray"
          :title="list.describe"
          :name="list.type"
          :key="index"
        >
          <template #title>
            <div class="slot-title">
              <b class="tab-title">{{ list.title }}</b>
              <!-- <span class="tab-name">{{list.describe}}</span>
              <span class="tab-name">{{ list.name }}</span>-->
            </div>
          </template>

          <section class="goods-box search-wrap">
            <ul class="goods-content">
              <li v-for="(item, index) in list.list" :key="index">
                <router-link class="goods-img" tag="div" to="/classify/product">
                  <img :src="item.img" />
                </router-link>
                <div class="goods-layout">
                  <div class="goods-title">{{ item.productName }}</div>
                  <span class="goods-div">{{ item.title }}</span>
                  <div class="goods-desc">
                    <span class="goods-price">
                      <i>{{ item.productCnyPrice }}</i>
                      <span class="force-value"
                        >{{ item.forceValue }}Times the computing power</span
                      >
                    </span>
                    <span class="add-icon" @click="addToCart($event, item)">
                      <svg-icon icon-class="add"></svg-icon>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </van-tab>
      </van-tabs>
    </div>
    <div class="ballWrap">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <div class="ball" v-if="show">
          <li class="inner">
            <span class="cubeic-add" @click="addToCart($event, item)">
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </span>
          </li>
        </div>
      </transition>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Tabbat from "@/components/tabbar";
export default {
  name: "home",
  components: {
    Tabbat
  },
  setup(props, context) {
    const { ctx } = getCurrentInstance();
    const $store = useStore();
    // ctx.$store === $store  ==>true 其实是同一个对象！

    const $router = useRouter();
    const $route = useRoute(); // 可以拿到所有和路由相关的参数
    const active = ref("");
    const timeData = ref(36000000);
    const headerActive = ref(false);

    const state = reactive({
      homeImgs: [],
      tabArray: []
    });

    const ball = reactive({
      show: false,
      el: ""
    });
    ctx.$http.get("https://goldfish-app-b8tlt.ondigitalocean.app/pay/api/banners").then(res => {
      console.log("BAHU BANNERS")
      console.log(res)
    });
    ctx.$http.get("http://test.happymmall.com/home/homeData").then(res => {
      //console.log(res.data)
      const { images, tabList } = res.data;
      state.tabArray = tabList;
      state.homeImgs = images;
    });

    onMounted(() => {
      ctx.$eventBus.$emit("changeTag", 0);
      window.addEventListener("scroll", pageScroll);
    });

    const addToCart = (event, tag) => {
      $store.commit("cart/addToCart", tag);
      ball.show = true;
      ball.el = event.target;
    };

    const beforeEnter = el => {
      const dom = ball.el;
      const rect = dom.getBoundingClientRect();
      const x = rect.left - window.innerWidth * 0.6;
      const y = -(window.innerHeight - rect.top);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    };

    const enter = (el, done) => {
      document.body.offsetHeight;
      el.style.transform = "translate3d(0,0,0)";
      const inner = el.querySelector(".inner");
      inner.style.transform = "translate3d(0,0,0)";
      el.addEventListener("transitionend", done);
    };

    const afterEnter = el => {
      ball.show = false;
      el.style.display = "none";
    };

    const handleClick = linkUrl => {
      $router.push("/classify/product");
    };

    const pageScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 100
        ? (headerActive.value = true)
        : (headerActive.value = false);
    };

    return {
      active,
      timeData,
      headerActive,
      ...toRefs(ball),
      ...toRefs(state),
      addToCart,
      beforeEnter,
      enter,
      afterEnter,
      handleClick,
      pageScroll
    };
  }
};
</script>

<style scoped lang="scss" src="./index.scss"></style>
