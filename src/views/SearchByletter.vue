<template>
  <div>
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byletter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MeaLItemVue v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MeaLItemVue from "../components/MeaLItem.vue";

const route = useRoute();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
