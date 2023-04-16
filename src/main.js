import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./common/reset.css"
import"./common/rule.css"
import"./MOCK/mock"
import"@/router/gurad"

Vue.config.productionTip = false
Vue.use(ElementUI); 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
