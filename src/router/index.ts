import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PokedexPage from '../views/PokedexPage.vue'
import PokemonPage from '../views/PokemonPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Pokedex',
    component: PokedexPage,
  },
  {
    path: '/:pokemon',
    name: 'pokemon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/PokemonPage.vue')//
    component: PokemonPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
