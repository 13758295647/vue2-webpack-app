<template>
  <nav class="nav">
        <router-link v-for="nav in navList" :to="nav.path" :key="nav.id" class="nav-menu">
        <i class="iconfont" :class="nav.iconClass"></i>
        {{nav.text}}
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return{
                navList:[
                    {id:1,path:'/food',text:'美食',iconClass:'icon-meishi1'},
                    {id:2,path:'/movie',text:'电影/演出',iconClass:'icon-live_fill'},
                    {id:3,path:'/hotel',text:'酒店住宿',iconClass:'icon-jiudian'},
                    {id:4,path:'/entertainment',text:'休闲娱乐',iconClass:'icon-qunfengxiuxianyulexian'},
                    {id:5,path:'/waimai',text:'外卖',iconClass:'icon-waimai'},
                    {id:6,path:'/taxi',text:'打车',iconClass:'icon-dache'},
                    {id:7,path:'/hair',text:'丽人/美发',iconClass:'icon-meifa'},
                    {id:8,path:'/travel',text:'周边游',iconClass:'icon-zhoubianyou'},
                    {id:9,path:'/plane',text:'机票/火车票',iconClass:'icon-guojijipiao'},
                    {id:10,path:'/merry',text:'结婚/摄影',iconClass:'icon-qianniudaidise'},
                    {id:11,path:'/run',text:'跑腿代购',iconClass:'icon-yundong'},
                    {id:12,path:'/ktv',text:'KTV',iconClass:'icon-ktvtianchong'},
                    {id:13,path:'/ticket',text:'景点/门票',iconClass:'icon-jingdian'},
                    {id:14,path:'/minsu',text:'榛果民宿',iconClass:'icon-minsu_'},
                    {id:15,path:'/all',text:'全部分类',iconClass:'icon-quanbufenlei'}
                ]
            }
        }
    }
</script>

<style>
    .nav {
        position: fixed;
        top: 12.55rem;
    }

    .nav-menu{
        float: left;
        display: inline-block;
        width: 20%;
        text-align: center;
        text-decoration: none;
        font-size: 0.8rem;
        margin-top: 1rem;
        color: #333;
        cursor: pointer;
    }

    .nav-menu .iconfont{
        font-size: 2rem;
        display: block;
        text-align: center;
        color: #5b98da;
    }
    
</style>
