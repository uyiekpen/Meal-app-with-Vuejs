<template>
  <div class="bg-white shadow rounded-md">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-md h-48 w-full object-cover"
      />
    </router-link>
    <div class="p-4">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum has no intelligible meaning. It is simply a display of
        letters to be viewed as a sample with given graphical elements in a
        file. “Lipsum” (a portmanteau of lorem and ipsum)
      </p>
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
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
