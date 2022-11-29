import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoDashboard from '../views/TodoDashboard.vue'
import TodoProjects from '../views/TodoProjects.vue'
import TodoTeam from '../views/TodoTeam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: TodoDashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: TodoProjects
  },
  {
    path: '/team',
    name: 'team',
    component: TodoTeam
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
