import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerMap'
// import "./gurad"//先用此链接，后写riuter （无法识别）
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
// router.beforeEach()//加导航守卫 阻止跳转。（单独文件夹创建）
export default router
