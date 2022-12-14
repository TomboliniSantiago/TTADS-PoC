import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
