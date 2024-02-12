import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
   
    {
      path: '/TestComputed',
      name: 'TestComputed',
      component: () => import('../views/TestComputed.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/buynow',
      name: 'buynow',
      component: () => import('../components/BuyNow.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../components/Service.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../components/Contact.vue')
    },
  ]
})

export default router
