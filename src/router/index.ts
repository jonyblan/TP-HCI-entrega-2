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
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue'),
    },
    {
        path: '/change-password',
        name: 'changePassword',
        component: () => import('@/views/ChangePasswordView.vue'),
    },
    {
        path: '/frequent-products',
        name: 'frequent-products',
        component: () => import('@/views/FrequentProductsView.vue'),
    },
    {
        path: '/list-config',
        name: 'list-config',
        component: () => import('@/views/ListConfigView.vue'),
    },
    {
        path: '/list-history',
        name: 'list-history',
        component: () => import('@/views/ListHistoryView.vue'),
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('@/views/ProductView.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue'),
    },
    {
        path: '/recover-password',
        name: 'recover-password',
        component: () => import('@/views/RecoverPasswordView.vue'),
    },
    {
        path: '/session-closed',
        name: 'session-closed',
        component: () => import('@/views/SessionClosedView.vue'),
    },
    {
        path: '/pantries',
        name: 'pantries',
        component: () => import('@/views/PantriesView.vue'),
    },
    {
        path: '/pantries-config',
        name: 'pantries-config',
        component: () => import('@/views/PantriesConfigView.vue'),
    },
    {
        path: '/pantry',
        name: 'pantry',
        component: () => import('@/views/PantryView.vue'),
    },
    {
        path: '/pantry-config',
        name: 'pantry-config',
        component: () => import('@/views/PantryConfigView.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue'),
    },
  ],
})

export default router
