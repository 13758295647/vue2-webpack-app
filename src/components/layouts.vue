<template>
  <div class="main">
    <app-header></app-header>
    <div class="main-content">
      <app-banner></app-banner>
      <app-nav></app-nav>
      <app-home></app-home>
    </div>
    
  </div>
  
</template>
<script>
import Header from './common/Header.vue';
import Banner from './common/Banner.vue';
    import Nav from './common/Nav.vue';
    import Home from './home/Home.vue';
  export  default {
    components: {
            "app-header": Header,
            "app-banner": Banner,
            "app-nav": Nav,
            "app-home": Home
        }
  };
</script>
<style lang="less">
  @import './../../static/iconfonts/iconfont.css';
  .main{
    height:100%;
    .main-content{
      height: ~"calc(100% - 36px)";
      top: 2.55rem;
      position: fixed;
      width: 100%;
      overflow-y: auto;
    }
  }
  li{
    list-style: none;
  }
</style>