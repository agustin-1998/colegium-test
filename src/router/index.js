import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: ':id(\\d+)',
          component: () => import('@/views/HomeView.vue'),
          props: true
        }
      ]
    }
  ]
})

export default router
