<template>
  <div class="cancel-order">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">Reason for cancellation</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span">Appeal record</router-link>
    </header>
    <div class="content-box">
      <span class="icon-svg" @click="$router.go(-1)">
        <svg-icon icon-class="sigh"></svg-icon>
      </span>
      <i>Order canceled successfully</i>
    </div>
    <section class="reason-list">
      <div class="item-content">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="After thinking about it, I don’t want it anymore" clickable @click="radio = '1'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="1" />
            </van-cell>
            <van-cell title="Buy Wrong purchase much/买错了" clickable @click="radio = '2'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="2" />
            </van-cell>
            <van-cell title="Problem with payment" clickable @click="radio = '3'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="3" />
            </van-cell>
            <van-cell title="Wrong address" clickable @click="radio = '4'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="4" />
            </van-cell>
            <van-cell title="other reasons" clickable @click="radio = '5'"></van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-field
          v-model="value"
          type="textarea"
          rows="4"
          @input="descInput"
          :autosize="{ maxHeight: 200, minHeight: 120 }"
          placeholder="请输入原因"
        >
          <span slot="right-icon">{{ remnant }}/100</span>
        </van-field>
      </div>
    </section>
    <div class="pay-btn">
      <div class="pay-count">Please select the reason for canceling the order to help us improve and improve our service</div>
      <van-button type="danger" size="large">submit</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CancelOrder",
  data() {
    return {
      columns: [
        "Think about it, I don't want it anymore",
        "Bought too much/bought the wrong thing",
        "There was a problem with payment",
        "Address filled in incorrectly",
        "other reasons"
      ],
      value: "",
      remnant: 0,
      radio: "1"
    };
  },
  created() {},
  methods: {
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
    },
    descInput(value) {
      var txtVal = this.value.length;
      this.remnant = 100 - txtVal;
      if (this.remnant < 0) {
        this.remnant = 0;
      }
      if (100 - txtVal < 0) {
        this.value = value.slice(0, 100);
        this.isDisInput = true;
      } else {
        this.isDisInput = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.cancel-order {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 667px;
  max-height: 812px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 0;
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

  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i {
      color: #3a3a3a;
      font-size: 14px;
      padding-top: 10px;
      padding-bottom: 44px;
    }
    .icon-svg {
      display: inline-block;
      padding-top: 30px;
      .svg-icon {
        width: 33px;
        height: 33px;
      }
    }
  }
  .reason-list {
    max-height: 376px;
    padding: 0 16px;
    margin-bottom: 55px;
    border-radius: 8px;
    background-color: white;
    .item-content {
      ::v-deep .van-cell:not(:last-child)::after {
        display: none;
      }
      ::v-deep .van-hairline--top-bottom::after {
        display: none;
      }
      ::v-deep .van-field__right-icon {
        position: absolute;
        bottom: 5px;
        right: 0;
      }
      ::v-deep .van-cell {
        padding: 10px 0;
        // padding-top: 20px;
      }
    }
  }
  .pay-btn {
    padding: 0 16px;
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    .pay-count {
      display: flex;
      justify-content: center;
      color: #949497;
      font-size: 14px;
      padding-bottom: 10px;
    }
    ::v-deep .van-button--danger {
      background-color: #d8182d;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
