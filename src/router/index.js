import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import LojasView from '../views/LojasView.vue'
import ProdutoView from  '../views/ProdutoView.vue'
import AboutView from  '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: ProdutosView
  },
  {
    path: '/produtos/:id',
    name: 'produto',
    component: ProdutoView
  },
  {
    path: '/lojas',
    name: 'lojas',
    component: LojasView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
