// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui' // 完整引入
// import { Button, Select } from 'element-ui' // 按需引入
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.baseURL = 'http://localhost:3001'
Vue.use(VueAxios, axios)

Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
