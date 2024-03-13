<template>
  <div>
    <div class="p-8">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-2 border-gray-200 w-full capitalize"
        placeholder="search for meals"
        @change="searchMeals"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MeaLItemVue  v-for="meal in meals"
      :key="meal.idMeal" :meal="meal"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import YoutubeButtonVue from "../components/YoutubeButton.vue";
import MeaLItemVue from "../components/MeaLItem.vue";

import store from "../store";
import { useRoute } from "vue-router";
const route = useRoute();
const meals = computed(() => store.state.searchMeals);

const keyword = ref("");

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
