<template>
  <div class="shop-cart">
    <header class="page-header">
      <div class="header-content">shopping cart</div>
      <span v-if="cartMode === false" class="appeal-record" @click="setCartMode">Finish</span>
      <span v-if="cartMode === true" class="appeal-record" @click="setCartMode">edit</span>
    </header>
    <section class="cart-empty" v-if="clearCart === true">
      <ul class="empty-content">
        <li class="img-cart">
          <svg-icon icon-class="shopping-cart"></svg-icon>
        </li>
        <li class="item-text">
          <p>Your shopping cart is empty~</p>
          <p>Go check out your favorite products~</p>
        </li>
        <li class="item-btn">
          <router-link to="/classify" class="hairline-btn" tag="span">Go shopping now</router-link>
        </li>
      </ul>
    </section>
    <div v-else>
      <section class="order-card">
        <van-checkbox v-model="checked" checked-color="#91C95B">
          <li class="checkbox-all">
            <div class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <span>Store name</span>
            </div>
          </li>
        </van-checkbox>
        <van-checkbox-group class="order-list" v-model="result">
          <ul v-for="(item, index) in list" :key="index">
            <div class="order-info">
              <li class="check-item">
                <van-checkbox :key="index" checked-color="#91C95B" :name="item"></van-checkbox>
              </li>
              <img src="../../assets/image/shopCart/购物车-1.png" />
              <li class="order-detail">
                <ul>
                  <li class="info-one">
                    <span>Three-color pre-sale new short skirt, lady skirt, lady skirt, lady skirt, lady skirt</span>
                  </li>
                  <li class="info-two">
                    <span>model;Specification;color;</span>
                  </li>
                </ul>
                <div class="info-count">
                  <span>Br. 200</span>
                  <van-stepper v-model="stepperValue" />
                </div>
              </li>
            </div>
            <div class="order-total">
              <label>total:</label>
              <span>123000</span>
            </div>
          </ul>
        </van-checkbox-group>
      </section>
      <section class="order-card">
        <van-checkbox v-model="checked" checked-color="#91C95B">
          <li class="checkbox-all">
            <div class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <span>Store name</span>
            </div>
          </li>
        </van-checkbox>
        <van-checkbox-group class="order-list" v-model="result">
          <ul v-for="(item, index) in lists" :key="index">
            <div class="order-info">
              <li class="check-item">
                <van-checkbox :key="index" checked-color="#91C95B" :name="item"></van-checkbox>
              </li>
              <img :src="item.imgSrc" />
              <li class="order-detail">
                <ul>
                  <li class="info-one">
                    <span>{{ item.desc }}</span>
                  </li>
                  <li class="info-two">
                    <span>{{ item.info }}</span>
                  </li>
                </ul>
                <div class="info-count">
                  <span>{{ item.price }}</span>
                  <van-stepper v-model="stepperValue" />
                </div>
              </li>
            </div>
            <div class="order-total">
              <label>total:</label>
              <span>{{ item.total }}</span>
            </div>
          </ul>
        </van-checkbox-group>
      </section>
    </div>
    <div v-if="clearCart === false">
      <section v-if="cartMode" class="options-edit">
        <van-submit-bar :price="2000" button-text="Settlement" @submit="submitSettlement">
          <van-checkbox v-model="checked" checked-color="#91C95B">Select all</van-checkbox>
        </van-submit-bar>
      </section>
      <section v-else class="options-delete">
        <van-submit-bar button-text="delete" @submit="submitDelete">
          <van-checkbox v-model="checked" checked-color="#91C95B">Select all</van-checkbox>
        </van-submit-bar>
      </section>
    </div>

    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"
    ></vue-pickers>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { onMounted, ref, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router';
export default {
  name: "shopCart",
  setup() {
    const { ctx } = getCurrentInstance();
    const $router = useRouter();

    const clearCart = ref(false);
    const columns = ref(1);
    const cartMode = ref(true);
    const show = ref(false);
    const checked = ref(false);
    const stepperValue = ref("");

    const close = () => {
      show.value = false;
    };

    const confirmFn = () => {
      show.value = false;
      ctx.$toast.loading({
        mask: true,
        duration: 1000, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: "spinner",
        message: "Paying..."
      });

      setTimeout(() => {
        $router.push("/order/transactionDetails");
      }, 1300);
    };

    const submitDelete = async () => {
      await ctx.$dialog.confirm({
        message: "Are you sure you want to delete these items?",
        confirmButtonColor: "#D8182D",
        cancelButtonColor: "#D8182D"
      });
      clearCart.value = true;
    };

    const submitSettlement = () => {
      show.value = true;
    };

    const setCartMode = () => {
      cartMode.value = !cartMode.value;
    };

    onMounted(() => {
      ctx.$eventBus.$emit("changeTag", 2);
    });

    return {
      clearCart,
      columns,
      cartMode, // 购物车的模式，true 是显示出编辑按钮 false 是显示完成按钮,默认是false;
      defaultData: [
        {
          text: "telebirr",
          value: "Top-Pay"
        }
      ],
      pickData: {
        data1: [
          {
            text: "Top-Pay",
            value: "Top-Pay"
          },
          {
            text: "Alipay",
            value: "Alipay"
          },
          {
            text: "telebirr",
            value: "WeChat"
          },
          {
            text: "Bank Card",
            value: "bank card"
          }
        ]
      },
      show,
      list: ["a"],
      lists: [
        {
          imgSrc: require("../../assets/image/shopCart/购物车-2.png"),
          info: "Model;Specification;Color;",
          price: "Br. 200",
          total: "123000",
          desc: "Three-color pre-sale new short skirt, lady skirt, lady skirt, lady skirt, lady skirt"
        },
        {
          imgSrc: require("../../assets/image/shopCart/购物车-3.png"),
          info: "Model;Specification;Color;",
          price: "Br. 200",
          total: "123000",
          desc: "Three-color pre-sale new short skirt, lady skirt, lady skirt, lady skirt, lady skirt"
        },
        {
          imgSrc: require("../../assets/image/shopCart/购物车-4.png"),
          info: "Model;Specification;Color;",
          price: "Br. 200",
          total: "123000",
          desc: "Three-color pre-sale new short skirt, lady skirt, lady skirt, lady skirt, lady skirt"
        },
        {
          imgSrc: require("../../assets/image/shopCart/购物车-5.png"),
          info: "Model;Specification;Color;",
          price: "Br. 200",
          total: "123000",
          desc: "Three-color pre-sale new short skirt, lady skirt, lady skirt, lady skirt, lady skirt"
        },
        {
          imgSrc: require("../../assets/image/shopCart/购物车-6.png"),
          info: "Model; specification; color;",
          price: "Br. 200",
          total: "123000",
          desc: "Three-color pre-sale new short skirt, lady skirt, lady skirt, lady skirt, lady skirt"
        },
        {
          imgSrc: require("../../assets/image/shopCart/购物车-7.png"),
          info: "Model; specification; color;",
          price: "Br. 200",
          total: "123000",
          desc: "Three-color pre-sale new short skirt, lady skirt, lady skirt, lady skirt, lady skirt"
        }
      ],
      checked,
      stepperValue,
      result: ["a", "b"],
      close,
      confirmFn,
      submitSettlement,
      submitDelete,
      setCartMode
    };
  }
};
</script>

<style scoped lang="scss">
.shop-cart {
  padding: 0 16px;
  margin-bottom: 100px;
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 10px;
      font-weight: 600;
      color: #3a3a3a;
    }
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
    }
  }
  .cart-empty {
    .empty-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 40px;
      padding-bottom: 50px;
      .img-cart {
        margin-bottom: 50px;
        .svg-icon {
          width: 156px;
          height: 161px;
        }
      }
      .item-text {
        color: #3a3a3a;
        font-size: 17px;
      }
      .item-btn {
        margin-top: 18px;
        .hairline-btn {
          width: 150px;
          height: 44px;
          font-size: 17px;
          color: #d8182d;
          border: 1px solid #d8182d;
          padding: 10px 32px;
          border-radius: 4px;
        }
      }
    }
  }
  .options-edit {
    ::v-deep .van-checkbox {
      padding-left: 24px;
      .van-checkbox__label {
        font-size: 9px;
        color: #949497;
      }
    }
    ::v-deep .van-submit-bar {
      .van-submit-bar__bar {
        height: 34px;
        line-height: 34px;
      }
      bottom: 50px;
      .van-submit-bar__text {
        font-size: 12px;
        color: #333333;
      }
    }
    ::v-deep .van-submit-bar__price {
      color: #d8182d;
      font-size: 12px;
      font-weight: 200;
      padding-left: 5px;
    }
  }
  .options-delete {
    ::v-deep .van-checkbox {
      padding-left: 24px;
      float: left;
      .van-checkbox__label {
        font-size: 9px;
        color: #949497;
      }
    }
    ::v-deep .van-submit-bar {
      .van-submit-bar__bar {
        display: flex;
        justify-content: space-between;
        height: 34px;
        line-height: 34px;
      }
      bottom: 50px;
      .van-submit-bar__text {
        font-size: 12px;
        color: #333333;
      }
    }
  }
  ::v-deep .van-button--danger {
    background-color: #d8182d;
    height: 34px;
    line-height: 34px;
    .van-button__text {
      font-size: 12px;
    }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 20px;
    ::v-deep .van-checkbox {
      padding-left: 0;
      .van-checkbox__label {
        font-size: 13px;
        color: #949497;
      }
    }
    .checkbox-all {
      .store-info {
        display: flex;
        justify-content: center;
        align-items: center;
        .header-img {
          width: 24px;
          height: 24px;
        }
        span {
          color: #3a3a3a;
          font-size: 11px;
          padding-left: 4px;
        }
      }
    }
    .order-list {
      .order-info {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 16px;
        display: flex;
        justify-content: flex-start;
        .check-item {
          display: flex;
          align-items: center;
        }
        img {
          margin-left: 5px;
          width: 100px;
          height: 100px;
          display: inline-block;
          background-color: #d8182d;
          border-radius: 4px;
        }
        .order-detail {
          width: 55%;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info-one,
          .info-two {
            display: flex;
            padding-top: 4px;
            justify-content: space-between;
            font-size: 13px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            span {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .info-two {
            color: #949497;
          }
          .info-count {
            color: #d8182d;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ::v-deep .van-stepper__input {
              width: 31px;
              height: 22px;
              padding: 0;
              color: #949497;
              font-weight: normal;
              background-color: transparent;
              border: 1px solid #dbdbdb;
            }
            ::v-deep .van-stepper__plus {
              border: 1px solid #dbdbdb;
              background-color: transparent;
              width: 16px;
              height: 22px;
              border-radius: 0;
            }
            ::v-deep .van-stepper__minus {
              border-radius: 0;
              border: 1px solid #dbdbdb;
              background-color: transparent;
              width: 16px;
              height: 22px;
            }
          }
        }
      }
      .order-total {
        color: #949497;
        font-size: 14px;
        text-align: right;
        span {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
