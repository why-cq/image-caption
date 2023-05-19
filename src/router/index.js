import Vue from 'vue'
import VueRouter from 'vue-router'

import UserLists from '../components/UserLists.vue'
import Caption from "@/views/Caption.vue";
import RegisterForm from "@/views/RegisterForm.vue";
import Test from "@/components/ImageCaption.vue";
import MainBody from "@/components/MainBody.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mainbody',
    name: 'MainBody',
    component: MainBody
  },
  {
    path: '/userlists',
    name: 'UserLists',
    component: UserLists
  },
  {
    path: '/',
    name: 'Caption',
    component: Caption
  },
  {
    path: '/registerform',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },

  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },

]

const router = new VueRouter({
  routes
})

export default router
