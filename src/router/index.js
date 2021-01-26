import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

// 解决相同路径跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/Index.vue')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/history.vue')
      },
      {
        path: 'collect',
        name: 'collect',
        component: () => import('@/views/collect.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
