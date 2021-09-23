import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:slug',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/type_charts',
    name: 'Type Charts',
    component: () => import('../views/TypeCharts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
