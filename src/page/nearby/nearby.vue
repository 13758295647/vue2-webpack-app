<template>
  <div class="nearby-main">
    <header>
      <a href="#/address">
        <i class="iconfont icon-dingweiweizhi"></i>
        <span>{{place}}</span>
        <i class="iconfont icon-unfold"></i>
      </a>
      <div class="nearby-search">
        <input type="text" class="near-search" v-model="search" placeholder="找附近的吃喝玩乐" />
        <i class="iconfont icon-sousuo"></i>
      </div>
    </header>
    <div class="nearby-content">

    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/footer/footer.vue";
export default {
  name: "Nearby",
  components: { Footer },
  data() {
    return {
      place: "杭州",
      search:'',
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
.nearby-main {
  header {
    border-bottom: 1px solid #ccc;
    a {
      float: left;
      padding-left: 0.6rem;
      color: #6f6969;
      cursor: pointer;
      width: 5rem;
      font-size: 1rem;
      .icon-dingweiweizhi {
        color: #aca8a8;
      }
    }
    .nearby-search {
      position: absolute;
      right: 0.8rem;
      left: 6.2rem;
      input {
        width: 100%;
        border-radius: 0.8rem;
        border: none;
        background: #dddfe0;
        height: 1.6rem;
        text-align: center;
      }
      .icon-sousuo {
        position: absolute;
        /* text-align: center; */
        top: 0;
        left: 50%;
        margin-left: -5rem;
      }
    }
  }
  .nearby-content {
    padding: 0 1.5rem;
  }
}
</style>