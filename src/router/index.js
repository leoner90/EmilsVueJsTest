import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AddNews from '../views/AddNews.vue'
import students from '../views/Students.vue'
import error from '../views/error.vue'
import addStudent from '../views/AddStudent.vue'
import editStudent from '../views/editStudent.vue'
const routes = [
  {
    path: "/:catchAll(.*)",
    component: error,
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/AddNews',
    name: 'AddNews',
    component: AddNews,
  },

  {
    path: '/students/:id?',
    name: 'students',
    component: students,
  },

  {
    path: '/addStudent',
    name: 'addStudent',
    component: addStudent,
  },

  {
    path: "/editStudent/:id?",
    name: 'editStudent',
    component: editStudent,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router