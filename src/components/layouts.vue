<template>
  <div>
    <app-header></app-header>
    <app-banner></app-banner>
    <app-nav></app-nav>
    <app-home></app-home>
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
</style>