<template>
    <div class="my-main">
        <header>
            <i class="iconfont icon-shezhi"></i>
            <i class="iconfont icon-xin"></i>
            <i class="iconfont icon-zhuti"></i>
        </header>
        <div class="my-content">
            <a class="login-info" href="#/login">
                <i class="iconfont icon-renwu"></i>
                <strong>请点击登录</strong>
            </a>
            <div class="my-action">
                <router-link v-for="nav in actionList" :to="nav.path" :key="nav.id" class="public-menu action-menu">
                    <i class="iconfont" :class="nav.iconClass"></i>
                    <span>{{nav.text}}</span>
                </router-link>
            </div>
            <div class="wallet">
                <strong class="small-header">美团钱包</strong>
                <router-link v-for="nav in walletList" :to="nav.path" :key="nav.id" class="public-menu four-menu">
                    <i class="iconfont" :class="nav.iconClass"></i>
                    <span>{{nav.text}}</span>
                </router-link>
            </div>
            <div class="service">
                <strong class="small-header">美团服务</strong>
                <router-link v-for="nav in serviceList" :to="nav.path" :key="nav.id" class="public-menu four-menu">
                    <i class="iconfont" :class="nav.iconClass"></i>
                    <span>{{nav.text}}</span>
                </router-link>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../../components/footer/footer.vue";
export default {
  name: "My",
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
      ],
      walletList: [
        { id: 1, path: "/wallet", text: "我的钱包", iconClass: "icon-qianbao" },
        {
          id: 2,
          path: "/redpacket",
          text: "红包/卡券",
          iconClass: "icon-hongbao"
        },
        { id: 3, path: "/pass", text: "闪付", iconClass: "icon-quick-pass" },
        { id: 4, path: "/borrow", text: "借钱", iconClass: "icon-int" },
        {
          id: 5,
          path: "/creditcard",
          text: "美团信用卡",
          iconClass: "icon-quick-pass"
        },
        {
          id: 6,
          path: "/recharge",
          text: "手机充值",
          iconClass: "icon-shoujichongzhishi"
        },
        { id: 7, path: "/bus", text: "公交", iconClass: "icon-gongjiao" }
      ],
      serviceList: [
        { id: 1, path: "/wallet", text: "会员中心", iconClass: "icon-huiyuanzhongxin" },
        {
          id: 2,
          path: "/redpacket",
          text: "美团公益",
          iconClass: "icon-hongbao"
        },
        { id: 3, path: "/pass", text: "客服中心", iconClass: "icon-kefuzhongxin" },
        { id: 4, path: "/borrow", text: "免流用美团", iconClass: "icon-mianliuliangfuwu" },
        {
          id: 5,
          path: "/creditcard",
          text: "发票助手",
          iconClass: "icon-fapiao"
        },
        {
          id: 6,
          path: "/recharge",
          text: "我要合作",
          iconClass: "icon-hezuo-"
        },
        { id: 7, path: "/bus", text: "关于美团", iconClass: "icon-meituan" }
      ]
    };
  }
};
</script>

<style lang="less">
.my-main {
  header {
    background: mediumturquoise;
    i {
      float: right;
      margin-right: 1rem;
      display: inline-block;
      line-height: 2.55rem;
      font-size: 1.3rem;
      vertical-align: text-bottom;
      color: #fff;
    }
    .icon-shezhi {
      float: left;
      margin-left: 1rem;
    }
    .icon-zhuti {
      line-height: 2.2rem;
    }
  }
  .my-content {
    padding: 0 1.5rem;
    .login-info {
      padding-top: 2.55rem;
      height: 4.6rem;
      display: block;
      .iconfont {
        color: #aea7a7;
        font-size: 2.6rem;
        width: 100%;
        display: inline-block;
      }
      strong {
        font-size: 1rem;
        font-family: microsoft yahei;
        line-height: 1.8rem;
        color: #000;
        text-decoration: none;
      }
    }
    .my-action {
      height: 4rem;
      border-bottom: 1px solid #ccc;
      padding-top: 1.8rem;
      .action-menu {
        width: 33.3%;
        color: #000;
      }
    }
    .wallet {
      width: 100%;
      height: 12rem;
      border-bottom: 1px solid #ccc;
    }
    .service {
      width: 100%;
      height: 12rem;
    }
  }
}
</style>