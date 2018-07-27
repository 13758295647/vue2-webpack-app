import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home'
import my from '../page/my/my'
import login from '../page/login/login'
import nearby from '../page/nearby/nearby'
import find from '../page/find/find'
import order from '../page/order/order'

Vue.use(Router) // 全局注册Router组件，它会绑定到vue实例里面

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/nearby',
      component: nearby
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/order',
      component: order
    }
  ]
})
