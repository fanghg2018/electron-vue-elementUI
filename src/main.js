import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import { shell } from 'electron'
const remote = require('electron').remote

Vue.config.productionTip = false

Vue.prototype.$shell = shell
Vue.prototype.$win = remote.getCurrentWindow()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
