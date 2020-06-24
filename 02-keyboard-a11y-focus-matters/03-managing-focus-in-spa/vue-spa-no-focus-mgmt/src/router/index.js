import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/why',
    name: 'Why',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Why.vue')
    }
  },
    {
      path: '/where',
      name: 'Where',
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Where.vue')
      }
    },
    {
      path: '/get',
      name: 'Get',
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Get.vue')
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Logic taken from https://router.vuejs.org/guide/advanced/scroll-behavior.html

    // Simulate the "scroll to anchor" behavior
    if (to.hash) {
      return { selector: to.hash };
    }

    // Return the savedPosition for a native-like behavior when navigating with back/forward buttons,
    if (savedPosition) {
      return savedPosition;
    }

    // Otherwise, scroll to top for all route navigations
    return { x: 0, y: 0 };
  }
})

export default router
