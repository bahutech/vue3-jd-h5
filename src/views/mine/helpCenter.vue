<template>
  <div class="help-center">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">Help Center</div>
    </header>
    <section class="message-card">
      <ul class="message-list">
        <li class="message-item">
          <div class="item-title">
            <svg-icon icon-class="product-help"></svg-icon>
            <span>Product help</span>
          </div>
          <router-link to="/mine/feedback" class="item-title" tag="div">
            <svg-icon icon-class="feedback-svg"></svg-icon>
            <span>Problem feedback</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="mine-content">
      <ul class="options-list">
        <li class="item-header">
          <span>Product help</span>
        </li>
        <li class="option-item">
          <van-collapse v-model="activeNames.values" class="collapse-box">
            <van-collapse-item title="Member Help" name="1">
              <template>
                <li class="help-item">How to change the login password?</li>
                <li class="help-item">Account login</li>
                <li class="help-item">What should I do if I find something unusual about my account?</li>
              </template>
            </van-collapse-item>
          </van-collapse>
        </li>
        <router-link to="/mine/messageCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>Support method</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>Return or exchange</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>Merchant help</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>Service commitment</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <span>Contact us</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "helpCenter",
  setup() {
    const activeNames = reactive({ values: ["1"] });
    return {
      activeNames
    };
  }
};
</script>

<style scoped lang="scss">
.help-center {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      background-color: white;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
    }
  }
  .message-card {
    margin-top: 10px;
    background: url("../../assets/image/back-show.png") no-repeat center center;
    background-size: 100% 100%;
    .message-list {
      .message-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        color: #3a3a3a;
        .item-title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          .svg-icon {
            width: 70px;
            height: 68px;
          }
          span {
            font-size: 15px;
            margin-top: 10px;
          }
        }
        .message-content {
          font-size: 13px;
        }
      }
    }
  }
  .mine-content {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      .item-header {
        font-size: 20px;
        margin-bottom: 16px;
      }
      .option-item {
        color: #3a3a3a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 17px;
        padding-bottom: 22px;
        .collapse-box {
          width: 100%;
          ::v-deep .van-collapse-item__content {
            padding-left: 0;
            padding-right: 0;
          }
          ::v-deep .van-cell {
            padding-left: 0;
            padding-right: 0;
          }
          ::v-deep .van-cell:not(:last-child)::after {
            border: none;
          }
          ::v-deep .van-cell__title {
            color: #3a3a3a;
            font-size: 17px;
          }
          ::v-deep .van-collapse-item__content {
            padding: 0;
            .help-item {
              padding: 5px 0;
              font-size: 15px;
              color: #949497;
            }
          }
        }
        ::v-deep .van-hairline--top-bottom::after {
          display: none;
        }
        .item-info {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
