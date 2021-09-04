import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.scss'
import request from '@/utils/request'

Vue.use(ElementUI)
Vue.prototype.$request=request;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
