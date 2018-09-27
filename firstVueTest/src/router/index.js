// 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
//1.@相当于src目录
//2.当用户访问根路径的时候给用户访问的是index
Vue.use (Router)
export default new  Router ({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/content/:id', //id：的意思是根据id来区分内容，这里使用了动态路由配置
      component: Content
    }
  ]
})
