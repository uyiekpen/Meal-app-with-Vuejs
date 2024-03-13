import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
  .then(({ data }) => {
    debugger;
    commit('setSearchMeals', data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?s=${letter}`)
  .then(({ data }) => {
    debugger;
    commit('setmealsByLetter', data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`)
  .then(({ data }) => {
    debugger;
    commit('setmealsByIngredient', data.meals);
  });
}
