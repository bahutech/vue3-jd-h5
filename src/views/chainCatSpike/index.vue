<template>
  <ul class="chain-cat-spike" id="chain-cat-spike">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">Chain cat flash kill</div>
      <div class="option-btns">
        <router-link to="/search" class="search-btn" tag="span">
          <svg-icon class="search-icon" icon-class="search"></svg-icon>
        </router-link>
        <span class="therr-point-icon" v-click-outside="hidden" @click="handleShow">
          <svg-icon icon-class="therr-point"></svg-icon>
        </span>
      </div>
    </header>
    <drop-list :config="configData" ref="droplist"></drop-list>
    <ul class="page-tabs">
      <van-tabs
        :swipe-threshold="4"
        title-inactive-color="#fff"
        title-active-color="#fff"
        background="transparent"
        v-model="active"
        animated
        :border="false"
        swipeable
        :line-width="0"
      >
        <van-tab v-for="(tab, index) in tabList" :title="tab.name" :key="index">
          <div class="slot-title" slot="title">
            <p class="tab-title">{{ tab.title }}</p>
            <span class="tab-name">{{ tab.name }}</span>
          </div>
          <main class="main-box">
            <ul class="card-box" v-for="(item, index) in cardList" :key="index">
              <aside>
                <img class="card-img" src="../../assets/image/premiumRanking/demo1.png" />
              </aside>
              <ul class="card-right">
                <li class="item-title">
                  <cite class="card-cite">{{ item.title }}</cite>
                  <small class="card-small">{{ item.name }}</small>
                </li>
                <div class="item-bottom">
                  <li class="item-low-price">
                    <i>historical low price</i>
                  </li>
                  <li class="item-desc">
                    <b class="item-price">{{ item.price }}</b>
                    <button v-if="tab.name === 'On sale'" class="my-btn">Go shopping</button>
                    <button v-else class="remind-me-btn">remind me</button>
                  </li>
                  <li class="item-desc">
                    <del class="item-del">{{ item.oldPrice }}</del>
                    <progress-bar v-if="tab.name == '抢购中'"></progress-bar>
                    <!-- <progress v-if="tab.name == '抢购中'" class="lm-progress" value="22" max="100"></progress> -->
                    <i v-else class="set-reminder">200Already set reminder</i>
                  </li>
                </div>
              </ul>
            </ul>
          </main>
        </van-tab>
      </van-tabs>
    </ul>
    <van-popup
      v-model="show"
      round
      :overlay="false"
      get-container="#chain-cat-spike"
      position="bottom"
      :style="{ height: '47%' }"
    >
      <article>
        <van-divider
          :style="{
            borderColor: 'rgb(58, 58, 58,.14)',
            color: '#3A3A3A',
            padding: '0 10px',
            margin: '15px 0'
          }"
        >Share to</van-divider>
        <ul class="share-list">
          <li class="share-item">
            <svg-icon icon-class="we-char"></svg-icon>
            <span class="share-text">WeChat friends</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="we-chat-friends"></svg-icon>
            <span class="share-text">Moments</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="we-blog"></svg-icon>
            <span class="share-text">Sina Weibo</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="qq-icon"></svg-icon>
            <span class="share-text">QQ friends</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="qq-space"></svg-icon>
            <span class="share-text">QQ space</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="copy-link"></svg-icon>
            <span class="share-text">Copy link</span>
          </li>
        </ul>
        <li class="cancle-btn" @click="show = false">
          <b class="cancle-text">Cancel</b>
        </li>
      </article>
    </van-popup>
  </ul>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "chainCatSpike", // 链猫秒杀,
  directives: {
    ClickOutside
  },
  data() {
    return {
      active: "1",
      show: false,
      configData: {
        position: {
          top: "60px",
          right: "8px",
          bottom: "",
          left: ""
        },
        width: "33%", // 设置宽度
        list: [
          // 设置下拉列表数据和对应的点击事件
          { text: "share", icon: "share-btn-black", action: this.handleShare },
          {
            text: "my reminder",
            icon: "my-reminder",
            action: this.handleMyReminder
          }
        ]
      },
      cardList: [
        {
          title: "[Hyaluronic acid super hydrating new facial mask] If you want to send a large amount, send it to SF Express",
          name: "Dilireba's same style",
          price: "Br. 200",
          oldPrice: "Br. 400"
        },
        {
          title: "[Hyaluronic acid super hydrating new facial mask] If you want to send a large amount, send it to SF Express",
          name: "Dilireba's same style",
          price: "Br. 200",
          oldPrice: "Br. 400"
        },
        {
          title: "[Hyaluronic acid super hydrating new facial mask] If you want to send a large amount, send it to SF Express",
          name: "Dilireba's same style",
          price: "Br. 200",
          oldPrice: "Br. 400"
        },
        {
          title: "[Hyaluronic acid super hydrating new facial mask] If you want to send a large amount, send it to SF Express",
          name: "迪丽热巴同款",
          price: "Br. 200"
        },
        {
          title: "[Hyaluronic acid super hydrating new facial mask] If you want to send a large amount, send it to SF Express",
          name: "Dilireba's same style",
          price: "Br. 200"
        }
      ],
      tabList: [
        {
          title: "10:00",
          name: "On sale"
        },
        {
          title: "12:00",
          name: "About to start"
        },
        {
          title: "14:00",
          name: "About to start"
        },
        {
          title: "16:00",
          name: "About to start"
        },
        {
          title: "18:00",
          name: "About to start"
        }
      ],
      list: [
        {
          name: "Multifunctional food processor",
          img: require("../../assets/image/home/test1.png"),
          title: "limited set New product launch",
          price: "$125"
        },
        {
          name: "Remote control air conditioning fan",
          img: require("../../assets/image/home/test2.png"),
          title: "limited set New product launch",
          price: "$245"
        },
        {
          name: "fashionable backpack",
          img: require("../../assets/image/home/test3.png"),
          title: "limited set New product launch",
          price: "$21"
        },
        {
          name: "business suitcase",
          img: require("../../assets/image/home/test4.png"),
          title: "limited set New product launch",
          price: "$218"
        },
        {
          name: "wireless noise canceling headphones",
          img: require("../../assets/image/home/test5.png"),
          title: "limited set New product launch",
          price: "$218"
        },
        {
          name: "wireless bluetooth headphones",
          img: require("../../assets/image/home/test6.png"),
          title: "limited set New product launch",
          price: "$218"
        }
      ],
      images2: [
        {
          imgUrl: require("../../assets/image/home/banner5.jpg"),
          categoryId: 100018
        },
        {
          imgUrl: require("../../assets/image/home/banner6.jpg"),
          categoryId: 100008
        },
        {
          imgUrl: require("../../assets/image/home/banner7.jpg"),
          categoryId: 100016
        },
        {
          imgUrl: require("../../assets/image/home/banner8.jpg"),
          categoryId: 100035
        }
      ],
      swiperOption: {
        loop: true,
        autoplay: false,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: -20, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: 100, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, //  depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: false // 开启slide阴影。默认 true
        }
      }
    };
  },
  created() {},
  methods: {
    handleMyReminder() {},
    handleShare() {
      this.show = true;
    },
    hidden() {
      this.$refs.droplist.hidden();
    },
    handleShow() {
      this.$refs.droplist.show();
    }
  }
};
</script>

<style scoped lang="scss">
.chain-cat-spike {
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#d8182d, #efeff4);
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    .btn-left {
      position: fixed;
      left: 16px;
      top: 15px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #ffffff;
      font-weight: 600;
      flex: 1;
    }
    .option-btns {
      position: fixed;
      right: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .therr-point-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .search-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 20px;
        .svg-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .page-tabs {
    margin-top: 60px;
    // padding-top: 10px;
    ::v-deep .van-tabs--line .van-tabs__wrap {
      height: 50px;
    }
    ::v-deep .van-tab {
      line-height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slot-title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .tab-title {
        font-size: 14px;
        font-weight: 600;
        display: inline-block;
        width: 40px;
      }
      .tab-name {
        font-size: 10px;
        display: inline-block;
      }
    }
    .main-box {
      margin: 16px;
      .card-box {
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: inherit;
        margin-top: 10px;
        .card-img {
          width: 110px;
          height: 110px;
          display: inline-block;
        }
        .card-right {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 10px;
          .item-title {
            display: flex;
            flex-direction: column;
            .card-cite {
              font-size: 13px;
              color: #3a3a3a;
              padding-bottom: 3px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 200px;
            }
            .card-small {
              font-size: 11px;
              color: #d8182d;
            }
          }
          .item-bottom {
            width: 100%;
            .item-low-price {
              // display: flex;
              // justify-content: flex-start;
              // align-items: center;
              background-color: #efeff4;
              font-size: 9px;
              color: #949497;
              width: 64px;
              text-align: center;
              border-radius: 4px;
              height: 18px;
              line-height: 18px;
            }
            .item-desc {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-right: 16px;
              padding-top: 2px;
              .item-price {
                font-size: 17px;
                color: #d8182d;
              }
              .remind-me-btn {
                background-color: #91c95b;
                border-radius: 2px;
                width: 74px;
                height: 24px;
                color: #fff;
                font-size: 11px;
                text-align: center;
              }
              .item-del {
                font-size: 13px;
              }
              .set-reminder {
                font-size: 9px;
                color: #949497;
              }
              .lm-progress {
                width: 70px;
                height: 10px;
                border-radius: 5px;
                color: #d8182d;
                display: inline-block;
              }
              .my-btn {
                background-color: #d8182d;
                border-radius: 2px;
                width: 74px;
                height: 24px;
                color: #fff;
                font-size: 11px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .share-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 10px;
    .share-item {
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      color: #3a3a3a;
      .svg-icon {
        width: 40px;
        height: 40px;
      }
      .share-text {
        padding-top: 6px;
      }
    }
  }
  .cancle-btn {
    padding-top: 20px;
    text-align: center;
    color: #3a3a3a;
    font-size: 14px;
    .cancle-text {
      display: inline-block;
      width: 290px;
      font-size: 14px;
      font-weight: 600;
      padding-top: 13px;
      border: 0 solid #3a3a3a1a;
      border-top-width: 1px;
    }
  }
}
</style>
