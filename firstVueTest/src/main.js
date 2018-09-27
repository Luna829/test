import Vue from 'vue'
import App from './App'
import router from './router'
//引用独立时间工具组件
import utils from './utils/index.js'
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

Vue.prototype.$utils = utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
