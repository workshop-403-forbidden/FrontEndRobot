import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Formular from '../components/Formular.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formular',
    name: 'Formular',
    component: Formular
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
