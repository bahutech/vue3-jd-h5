<template>
  <div class="person-info" id="person-info">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">personal data</div>
    </header>
    <section class="setting-content">
      <ul class="setting-list">
        <li class="setting-item">
          <van-field label="avatar" disabled />
          <img src="../../assets/image/product/store-headerM.png" class="header-img" />
        </li>
        <li @click="handlePhone" class="setting-item">
          <van-field label="Nick name" disabled placeholder="Nickname display" />
          <van-icon class="icon" name="arrow" />
        </li>
        <router-link class="setting-item" to="/mine/phoneNumberSetting" tag="li">
          <van-field label="Phone number" disabled placeholder="13547008799" />
          <van-icon class="icon" name="arrow" />
        </router-link>
        <router-link class="setting-item" to="/mine/settingMail" tag="li">
          <van-field label="Email number" disabled placeholder="not set" />
          <van-icon class="icon" name="arrow" />
        </router-link>
        <router-link class="setting-item" to="/mine/changePassword" tag="li">
          <van-field label="Change password" disabled placeholder />
          <van-icon class="icon" name="arrow" />
        </router-link>
      </ul>
    </section>

    <van-popup v-model="show" position="bottom" get-container="#person-info">
      <div class="popup-content">
        <div class="popup-title">
          <span>Fill in the nickname</span>
        </div>
        <van-cell-group>
          <van-field clearable v-model="name" placeholder="Please enter" />
        </van-cell-group>
      </div>

      <div class="popup-btns">
        <button @click="show = false" class="popup-btn">
          <span>Cancel</span>
        </button>
        <button @click="show = false" class="popup-btn right-btn">
          <span>confirm</span>
        </button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "personInfo",
  setup() {
    const show = ref(false);
    const name = ref("");

    const handlePhone = () => {
      show.value = true;
    };

    return {
      show,
      name,
      handlePhone
    };
  }
};
</script>

<style scoped lang="scss">
.person-info {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
  }
  .setting-content {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    .setting-list {
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        ::v-deep .van-cell {
          padding: 0;
        }
        ::v-deep .van-cell::after {
          border: none;
        }
        .header-img {
          width: 40px;
          height: 40px;
        }
        .icon {
          color: #949497;
          opacity: 0.5;
          font-size: 15px;
        }
        .setting-msg {
          color: #3a3a3a;
          font-size: 15px;
        }
      }
    }
  }
  .popup-content {
    padding: 16px;
    ::v-deep .van-field {
      border: 1px solid #949497;
      border-radius: 2px;
    }
    .popup-title {
      text-align: center;
      color: #3a3a3a;
      font-weight: 600;
      font-size: 14px;
      padding: 20px;
    }
  }
  .popup-btns {
    display: flex;
    border: 0 solid #ebedf0;
    border-top-width: 1px;
    justify-content: space-around;
    position: relative;
    font-size: 15px;
    .popup-btn {
      background-color: #fff;
      width: 50%;
      font-size: 15px;
      color: #3a3a3a;
      line-height: 50px;
    }
    .right-btn {
      border: 0 solid #ebedf0;
      border-left-width: 1px;
      span {
        color: #d8182d;
        font-size: 15px;
      }
    }
  }
}
</style>
