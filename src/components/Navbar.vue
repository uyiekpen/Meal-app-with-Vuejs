<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <routerlink :to="{ name: 'home' }" class="inline-flex items-center h-full px-5" >Home</routerlink>
        <div class="flex items-center gap-1">
          <router-link :to="{name:'byName'}" class=" px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">
            Search meals</router-link
          >
          <router-link :to="{name:'byletter'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">
            Meals by letter</router-link
          >
          <router-link :to="{name:'ingredients'}" class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors">
            Meals By Ingredients</router-link
          >
        </div>
      </header>
</template>