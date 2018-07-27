<template>
  <div class="main-home">
      <Header></Header>
      <div class="main-content">
        <div class="Banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }" :key="str.url"></div>
                </div>
                <div class="swiper-pagination swiper-pagination-white"></div> 
            </div>
        </div>
        <nav class="nav">
            <router-link v-for="nav in navList" :to="nav.path" :key="nav.id" class="nav-menu">
            <i class="iconfont" :class="nav.iconClass"></i>
            {{nav.text}}
            </router-link>
        </nav>
        <div class="activity">
            <ul>
                <li v-for="item in activityList" :key="item.id">
                    <a href="item.path">
                        <span class="li-header">{{item.title}}</span>
                        <strong>{{item.name}}</strong>
                        <label>{{item.type}}</label>
                        <span v-if="item.isReduce">22减22></span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="advitise">
            <img src="/static/img/Koala.jpg"/>
        </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
    import Header from '../../components/header/Header.vue'
    import Footer from '../../components/footer/footer.vue'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import '../../../static/iconfonts/iconfont.css';
    import { a, b, c, d, e } from '../../../static/outImg' //导入图片
    export default {
        name: 'Home',
        components:{Header,Footer},
        data(){
            return{
                activityList:[
                    {id:1,path:'/hyh',title:'狠优惠',name:'我爱牛腩饭（阿里巴巴店）',type:'外卖',isReduce:true},
                    {id:2,path:'/ygd',title:'有格调',name:'斗牛士牛排餐厅',type:'西餐',isReduce:false},
                    {id:3,path:'/wcyjj',title:'午餐要讲究',name:'Candy私家蛋糕',type:'面包甜点',isReduce:false},
                    {id:4,path:'/zmqne',title:'周末去哪儿',name:'杭州长乔极地海洋公园',type:'景点',isReduce:false}
                    
                ],
                listImg: [
                    {url: a}, {url: b}, {url: c}, {url: d}, {url: e}
                ],
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
        },
        mounted() {
            console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplayDisableOnInteraction :false,
                loop: true,
                speed: 500,
                autoplay: 1000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style lang="less">
    .main-home {
        padding-top: 0.6rem;
        height: auto;
        background: #fff;
        .activity{
            height: 250px;
            ul{
                margin: 0;
                padding: 0;
                li{
                    float: left;
                    width:50%;
                    height:110px;
                    margin-top:10px;
                    display: block;
                    a{
                        display: block;
                        margin:0 10px;
                        text-align: left;
                        font-size: 12px;
                        color: #333;
                        line-height: 22px;
                        text-decoration: none;
                        height: 100%;
                        background: #fdf1f2;
                        span{
                            display: inline-block;
                            padding-left: 5px;
                            padding: 0 7px;
                            background: #e47f7f;
                            color: #fff;
                            border-radius: 4px;
                            &.li-header{
                                background: #ef5e64;
                                padding: 0 12px;
                                font-size: 14px;
                                margin-bottom: 5px;
                            }
                        }
                        
                        strong{
                            display: block;
                            padding-left:5px;
                        }
                        label{
                            display: block;
                            padding-left:5px;
                        }
                    }
                    &:nth-child(1),&:nth-child(3){
                        a{
                            margin-right:0;
                        }
                    }
                }
            }
        }
    }
    .Banner{
        // position: fixed;
        // z-index: 10;
        width: 100%;
        height: 10rem;
        background: #fff;
        // top: 2.55rem;
    }
    .swiper-container {
        width: 100%;
        height: 10rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #007aff;
        }
    }
    .nav {
        /* position: fixed;
        top: 12.55rem; */
        height: 15rem;
        background: #fff;
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
    .advitise{
        width: 100%;
        height: 10rem;
        overflow: hidden;
        img{
            width:100%;
            height: 100%;
        }
    }
</style>
