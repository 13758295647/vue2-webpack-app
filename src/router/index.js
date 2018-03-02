import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/components/layouts'

Vue.use(Router) // 全局注册Router组件，它会绑定到vue实例里面

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layouts',
      component: layouts
    }
  ]
})
