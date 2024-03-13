<template>
  <div class="p-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MeaLItemVue v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import MeaLItemVue from "../components/MeaLItem.vue";import { useRoute } from "vue-router";
import store from "../store";


const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  debugger;
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

