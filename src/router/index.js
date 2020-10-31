import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requireAuth: false },
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: { requireAuth: false },
  },
]

const router = new VueRouter({
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // const isLogin = localStorage.isLogin
  const isLogin = localStorage.isLogin ? true : false
  if (to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
