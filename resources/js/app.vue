<template>
  <div>
    <Navigation /> <!-- Komponent nawigacji -->
    <router-view></router-view> <!-- Zawartość trasy wyświetlana tutaj -->
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './router'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
</script>
