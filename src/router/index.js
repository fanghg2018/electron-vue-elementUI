import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Msgs from '../views/msgs.vue'
import List from '../views/List.vue'
import Setting from '../views/setting/index.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/msgs',
    name: 'Msgs',
    component: Msgs
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  }
]

const router = new VueRouter({
  routes
})

export default router
