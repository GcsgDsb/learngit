import Vue from 'vue'
import VueRouter from 'vue-router'
import CSS from '../views/CSS/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CSS',
    component: CSS
  },
  {
    path: '/html',
    name: 'HTML',
    component: () => import('../views/HTML/main.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
