import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IdealGasGenSimView from '../views/IdealGasGenSimView.vue'
import IdealGasSimView from "@/views/IdealGasSimView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/IdealGas',
      name: 'IdealGas',
      component: IdealGasGenSimView
    }
    ,
    {
      path: '/IdealGasNew',
      name: 'IdealGasNew',
      component: IdealGasSimView
    }
  ]
})

export default router
