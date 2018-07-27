// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false// 关闭生产模式下给出的提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注入路由配置
  components: { App },
  template: '<App/>'
})
