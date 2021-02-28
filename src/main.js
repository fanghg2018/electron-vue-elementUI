import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import { shell } from 'electron'
const ipcRenderer = require('electron').ipcRenderer

Vue.config.productionTip = false

Vue.prototype.$shell = shell
Vue.prototype.$ipcRenderer = ipcRenderer

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
