<template>
    <div class="order-main">
        <header>
            订单
        </header>
        <div class="ordermy-content">
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../../components/footer/footer.vue";
export default {
  name: "Order",
  components: { Footer },
  data() {
    return {
      actionList: [
        { id: 1, path: "/collect", text: "收藏", iconClass: "icon-shoucang" },
        {
          id: 2,
          path: "/evaluate",
          text: "评价",
          iconClass: "icon-daohangpingjia"
        },
        { id: 3, path: "/browse", text: "最近浏览", iconClass: "icon-zuji" }
      ]
    };
  }
};
</script>

<style lang="less">
.order-main {
  header {
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .order-content {
    padding: 0 1.5rem;
  }
}
</style>