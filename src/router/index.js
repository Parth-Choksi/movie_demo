import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/signup.vue'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import MovieView from '../views/movie_view_page.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie_view_page',
    name: 'Movie page',
    component: MovieView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
