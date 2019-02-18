import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import { runInNewContext } from 'vm';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/chats',
      component: Index,
      children: [
        {
          path: '/chats',
          name: 'chats',
          component: () => import('./views/Chats.vue')
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: () => import('./views/Contacts.vue')
        },

        {
          path: '/discover',
          name: 'discover',
          component: () => import('./views/Discover.vue')
        },

        {
          path: '/me',
          name: 'me',
          component: () => import('./views/Me.vue')
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      // 懒加载引入，箭头函数
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    }
  ]
})

router.beforeEach((to,from,next) => {
  const isLogin = localStorage.wxpyqToken ? true : false
  if(to.path == '/login' || to.path == '/register'){
    next()
  }
  else{
    isLogin ? next() : next('/login')
  }
})

export default router
