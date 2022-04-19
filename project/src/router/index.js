import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PageNotFound from '@/pages/PageNotFound'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
