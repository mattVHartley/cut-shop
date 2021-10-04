import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wood',
    name: 'Wood',
    component: () => import(/* webpackChunkName: "about" */ '../views/Wood.vue')
  },
  {
    path: '/plastic',
    name: 'Plastic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Plastic.vue')
  },
  {
    path: '/metal',
    name: 'Metal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Metal.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
