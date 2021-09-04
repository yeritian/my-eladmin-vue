import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import { getToken } from '../utils/auth'

// import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    name:'Login',
    component:Login
  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component:()=> import ('@/views/Home')
    // component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (getToken()){//已登录
        if (to.name === 'Login') next('/dashboard')
        else next()
    }else if (to.path!=='/')
        next({path:'/'})
    else next()
})

export default router
