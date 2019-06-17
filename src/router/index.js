import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddRecipes from '@/components/AddRecipes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-recipe',
      name: 'AddRecipe',
      component: AddRecipes
    }
  ]
})
