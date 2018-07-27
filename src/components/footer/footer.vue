<template>
  <footer class="footer">
    <router-link v-for="nav in footerList" :to="nav.path" :key="nav.id" class="public-menu footer-menu">
        <i class="iconfont" :class="nav.iconClass"></i>
        <span>{{nav.text}}</span>
    </router-link>
  </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data(){
            return{
                footerList:[
                    {id:1,path:'/home',text:'首页',iconClass:'icon-homepage'},
                    {id:2,path:'/nearby',text:'附近',iconClass:'icon-fujin'},
                    {id:3,path:'/find',text:'发现',iconClass:'icon-im_faxian'},
                    {id:4,path:'/order',text:'订单',iconClass:'icon-dingdan'},
                    {id:5,path:'/my',text:'我的',iconClass:'icon-wode'}
                ]
            }
        }
    }
</script>

<style>
    .footer {
        background: #fcfcfc;
        height: 2.8rem;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 2;
        line-height: 2.5rem;
    }
    .footer-menu{
        width: 20%;
        color: #666;
    }
</style>
