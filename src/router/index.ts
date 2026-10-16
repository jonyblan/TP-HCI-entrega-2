import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
        path: '/fixed-list',
        name: 'fixed-list',
        component: () => import('@/views/FixedListView.vue'),
    },
    {
        path: '/special-list',
        name: 'special-list',
        component: () => import('@/views/SpecialListView.vue'),
    },
    {
        path: '/new-list',
        name: 'new-list',
        component: () => import('@/views/NewListView.vue'),
    },
  ],
})

export default router
