<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:19:50
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 16:20:57
 * @FilePath: /refactor-with-vue3/src/views/mine/addAddress.vue
-->
<template>
  <div class="add-address">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">Add new region</div>
    </header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-cell title="联系人" />
          <div class="address-name">
            <van-field v-model="userName" placeholder="Please enter name" />
            <div class="gender-tags">
              <van-tag color="#E96258" plain>Miss</van-tag>
              <van-tag color="#3A3A3A" plain>men</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-cell title="Telephone" />
          <div class="address-name">
            <van-field v-model="phoneNum" placeholder="phone number" />
          </div>
        </li>
        <li class="address-item">
          <van-cell title="所在地区" />
          <div class="address-name" @click="show = true">
            <van-field v-model="are" disabled placeholder="Please select a province or city" />
            <div>
              <svg-icon icon-class="arrow"></svg-icon>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-cell title="地址" />
          <div class="address-name">
            <van-field v-model="room" placeholder="Such as: road, house number, community, building number, unit room, etc." />
          </div>
        </li>
        <li class="address-item">
          <van-cell title="标签" />
          <div class="address-tags">
            <van-tag color="#E96258" plain>Home</van-tag>
            <van-tag color="#E96258" plain>School</van-tag>
            <van-tag color="#E96258" plain>company</van-tag>
          </div>
        </li>
      </ul>
    </section>

    <div class="address-btn">
      <router-link to="/mine/addAddress">
        <van-button type="danger" size="large">keep</van-button>
      </router-link>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-area
        :area-list="areaList"
        @cancel="handleCancel"
        @confirm="handleConfirm"
        value="110101"
      />
    </van-popup>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import areaList from "../../mock/area";
export default {
  name: "addAddress",
  setup() {
    const { ctx } = getCurrentInstance();
    const userName = ref("gk");
    const phoneNum = ref(15797802021);
    const are = ref("gd");
    const room = ref(110);
    const show = ref(false);
    const parentAreaId = ref(0);

    const handleCancel = () => {
      show.value = false;
    };

    const handleConfirm = () => {
      show.value = false;
    };

    return {
      userName,
      phoneNum,
      are,
      room,
      show: false,
      handleCancel,
      handleConfirm,
      areaList
    };
  }
};
</script>

<style scoped lang="scss">
.add-address {
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
  .address-content {
    margin-top: 20px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    .address-list {
      .address-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        ::v-deep .van-cell {
          padding-left: 0;
        }
        ::v-deep .van-cell__title span {
          font-size: 14px;
          color: #3a3a3a;
        }
        ::v-deep .van-cell:not(:last-child)::after {
          border: none;
        }
        .address-name {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .gender-tags {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            ::v-deep .van-tag::after {
              border-radius: 8px;
            }
            ::v-deep .van-tag {
              width: 40px;
              text-align: center;
              height: 22px;
              margin-right: 10px;
            }
          }
        }
        .address-tags {
          ::v-deep .van-tag {
            margin-right: 20px;
            width: 40px;
            text-align: center;
          }
        }
      }
    }
  }
  .address-btn {
    position: fixed;
    bottom: 10px;
    width: 92%;
    color: #fff;

    ::v-deep .van-button--large {
      height: 44px;
      line-height: 44px;
    }
    ::v-deep .van-button--danger {
      background-color: #d8182d;
    }
    ::v-deep .van-button__text {
      color: #fff;
    }
  }
}
</style>
