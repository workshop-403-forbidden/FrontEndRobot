import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Formular from '../components/Formular.vue';
import FakeAnalyse from '../components/FakeAnalyse.vue';

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
  },
  {
    path: '/analyse',
    name: 'Analyse',
    component: FakeAnalyse
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
