import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue"
import SearchByletter from "../views/SearchByletter.vue"
import SearchByName from "../views/SearchByName.vue"
import SearchByIngredients from "../views/SearchByIngredients.vue"
import GuestLayout from "../components/GuestLayout.vue"
import MealDetails from "../views/MealDetails.vue"
import Ingredient from "../views/Ingredient.vue";

const routes = [
  {
    path:"/",
    component: DefaultLayout,
    children:[
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byletter",
        component: SearchByletter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: SearchByName,

      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredient,
      },
      {
        path: "/by-ingredients/:ingredient?",
        name: "byIngredient",
        component: SearchByIngredients,
      },
      {
        path: "/mealDetails/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ]
  },
  {
    path:"/auth",
    component: GuestLayout 
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
