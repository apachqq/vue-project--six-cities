import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PageNotFound from '@/pages/PageNotFound'
import LoginPage from '@/pages/LoginPage'
import PropertyPage from '@/pages/PropertyPage'
import index from '@/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/:notFound(.*)', name: 'PageNotFound', component: PageNotFound },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/offer/:id', name: 'PropertyPage', component: PropertyPage }
  ]
})

router.beforeEach((to, from, next) => {
  if (!index.state.isAuth && to.name === 'MainPage') {
    alert('Не авторизован!')
    next('/login')
  } else {
    next()
  }
})

export default router
