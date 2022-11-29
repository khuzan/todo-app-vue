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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
