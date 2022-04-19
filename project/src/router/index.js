import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PageNotFound from '@/pages/PageNotFound'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: MainPage
    },
    {
      path: '/:notFound(.*)',
      component: PageNotFound
    }
  ]
})

export default router
