<template>
  <div class="flex flex-col p-8">
    <h2 class="text-2xl">Random Meals</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3">
      <div
        class="bg-white shadow rounded-md"
        v-for="meal in meals"
        :key="meal.id"
      >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-md h-48 w-full object-cover"
          />
        </router-link>
        <div class="p-4">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>

          <div class="flex items-center justify-between">
            <YoutubeButtonVue :href="meal.strYoutube">Youtube</YoutubeButtonVue>
            <router-link
              to="/"
              class="px-3 py-2 rounded-md border-2 ml-3 hover:bg-purple-500 hover:text-white border-purple-600 transition-colors"
              >View</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
