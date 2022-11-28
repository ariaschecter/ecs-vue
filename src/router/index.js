import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import EmailVerify from '../views/EmailVerify.vue'
import DashBoard from '../views/users/DashboadView.vue'
import ProFile from '../views/users/ProfileView.vue'
import ClassMapel from '../views/users/Class.vue'
import newPassword from '../views/users/NewPasswordView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProFile
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/:id/mapel/:mapel_id/:mapel_slug/:list',
    name: 'list-mapels',
    component: ClassMapel,
  },
  {
    path: '/email-verify',
    name: 'email-verify',
    component: EmailVerify
  },
  {
    path: '/new-password',
    name: 'new-password',
    component: newPassword,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
