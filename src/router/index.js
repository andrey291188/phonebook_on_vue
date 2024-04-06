import { createRouter, createWebHistory } from 'vue-router'
import theHomepage from '../views/Homepage/theHomepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: theHomepage,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/Contacts/theContact.vue'),
    },
    {
      path: '/registered',
      name: 'registered',
      component: () => import('../views/Register/theRegister.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/theLogin.vue'),
    }
  ]
})

export default router
