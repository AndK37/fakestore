import { createRouter, createWebHistory } from 'vue-router'

import AllView from '@/views/AllView.vue'
import CartView from '@/views/CartView.vue'

const routes = [
  {
    path: '/:category/:page',
    name: 'all',
    component: AllView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/',
    redirect: '/all/1',
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
