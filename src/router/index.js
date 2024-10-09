import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Results from '@/components/Results.vue'
import About from '@/components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Results',
      component: Results
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
