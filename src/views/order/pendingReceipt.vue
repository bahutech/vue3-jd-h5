<template>
  <!--  待收货 -->
  <div class="pending-receipt">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">Order details</div>
    </header>

    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>Store name</span>
          </div>
          <span>Awaiting receipt</span>
        </li>
        <li class="order-desc">
          <img />
          <div class="order-detail">
            <p class="info-one">
              <span>Nazha's new look</span>
              <i>Br. 222</i>
            </p>
            <p class="info-two">
              <span>Model; specification; color;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-total">
          <span>订单总价：</span>
          <i>$444</i>
        </li>
        <li class="order-count">
          <span>Actual payment:</span>
          <i>Br. 444</i>
        </li>
        <li class="order-btn">
          <router-link to="/order/viewLogistics" tag="span"
            >check logistics</router-link
          >
          <!-- <router-link to="/order/appeal" tag="span">商品申诉</router-link> -->
        </li>
      </ul>
    </section>
    <section class="order-info">
      <ul class="info-list">
        <li class="info-title">
          <svg-icon icon-class="order-info"></svg-icon>
          <span>Order information</span>
        </li>
        <li class="info-item">
          <label>Order number:</label>
          <span>201905211540350025</span>
        </li>
        <li class="info-item">
          <label>Payment order number:</label>
          <span>201905211540350025</span>
        </li>
        <li class="info-item">
          <label>Creation time:</label>
          <span>2019/05/01 13:40:40</span>
        </li>
        <li class="info-item">
          <label>Payment time:</label>
          <span>2019/05/01 13:40:40</span>
        </li>
        <li class="info-title">
          <svg-icon icon-class="message-round"></svg-icon>
          <span>联系卖家</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "pendingReceipt",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.pending-receipt {
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
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    .order-list {
      .order-item {
        display: flex;
        justify-content: space-between;
        & > span {
          color: #d8182d;
          font-size: 11px;
        }
        .store-info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 10px;
          .header-img {
            width: 24px;
            height: 24px;
          }
          span {
            color: #3a3a3a;
            padding-left: 3px;
            font-size: 11px;
          }
        }
      }
      .order-desc {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #d8182d;
          border-radius: 4px;
        }
        .order-detail {
          flex: 1;
          padding-left: 16px;
          padding-bottom: 4px;
          .info-one,
          .info-two {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            i {
              font-weight: 700;
            }
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-total {
        color: #949497;
        font-size: 11px;
        padding-bottom: 5px;
        display: flex;
        justify-content: flex-end;
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        i {
          color: #d8182d;
          padding-left: 5px;
          font-weight: 700;
        }
        span {
          color: #3a3a3a;
        }
      }
      .order-btn {
        display: flex;
        justify-content: flex-end;
        padding-top: 14px;
        span {
          height: 26px;
          line-height: 20px;
          border: 1px solid #949497;
          color: #949497;
          font-size: 11px;
          padding: 2px 15px;
          border-radius: 2px;
          margin-left: 10px;
        }
      }
    }
  }
  .order-info {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px;
    .info-list {
      color: #3a3a3a;
      .info-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          padding-left: 7px;
          font-weight: 700;
          font-size: 13px;
        }
      }
      .info-item {
        font-size: 11px;
        padding-left: 34px;
        padding-bottom: 6px;
      }
      .info-title:last-child {
        padding-top: 14px;
      }
    }
  }
}
</style>
