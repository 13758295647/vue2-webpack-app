<template>
    <div class="find-main">
        <header>
            发现
        </header>
        <div class="find-content">
            
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../../components/footer/footer.vue";
export default {
  name: "Find",
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
.find-main {
  header {
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .find-content {
    padding: 0 1.5rem;
  }
}
</style>