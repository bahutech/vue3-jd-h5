<template>
  <div class="phoneRegisterTwo">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <router-link class="appeal-record" to="/register/emailRegister" tag="span">Email registration</router-link>
    </header>
    <div class="mall-logo">
      <img src="../../assets/image/setting/logo.png" />
    </div>
    <section class="register-info">
      <span class="phone-number">Set password</span>
      <p class="number-tips">6-20 digits, letters or characters</p>
      <van-cell-group class="info-list">
        <van-field
          v-model="phoneRegisterTwoForm.password"
          type="password"
          right-icon="eye-o"
          clearable
          placeholder="password"
        />
        <van-field
          v-model="phoneRegisterTwoForm.password"
          type="password"
          right-icon="closed-eye"
          clearable
          placeholder="Confirm password again"
        />
        <van-field class="temp-empty" />
      </van-cell-group>
    </section>
    <div class="login-register-btns">
      <span class="login-btn">Sure</span>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "phoneRegisterTwo",
  data() {
    return {
      phoneRegisterTwoForm: {
        password: ""
      },
      sms: "",
      value: "",
      showPicker: false,
      columns: ["Hangzhou", "Ningbo", "Wenzhou", "Jiaxing", "Huzhou"]
    };
  },
  created() {},
  methods: {
    onConfirm() {}
  }
};
</script>

<style scoped lang="scss">
.phoneRegisterTwo {
  height: 100%;
  padding: 0 16px;
  min-height: 667px;
  max-height: 812px;
  background: linear-gradient(#fdfdfd, #ffecf0);
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 44px;
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
    }
  }
  .mall-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
  }
  .register-info {
    padding: 25px 34px;
    .phone-number {
      font-size: 24px;
      color: #3a3a3a;
      font-weight: 600;
    }
    .number-tips {
      color: #949497;
      padding-top: 4px;
      padding-bottom: 32px;
      font-size: 11px;
    }
    ::v-deep .van-hairline--top-bottom::after {
      display: none;
    }
    ::v-deep .temp-empty {
      display: none;
    }
    ::v-deep .van-cell-group {
      background-color: transparent;
    }
    ::v-deep .van-cell {
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .login-register-btns {
    text-align: center;
    padding-top: 60px;
    .login-btn {
      display: inline-block;
      width: 275px;
      height: 44px;
      line-height: 44px;
      color: white;
      font-size: 17px;
      border: 1px solid #d8182d;
      border-radius: 4px;
      background-color: #d8182d;
    }
  }
}
</style>
