<template>
  <nav class="navbar">
    <div class="nav-items">
      <router-link :to="route.to" v-for="route in routes" :key="route.name" :class="{ active: route.name === route.name }">
        {{ route.text }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const routes = [
  { name: 'home', to: { name: 'home' }, text: 'Strona główna' },
  { name: 'register', to: { name: 'register' }, text: 'Rejestracja' },
  { name: 'login', to: { name: 'login' }, text: 'Logowanie' },
  { name: 'dashboard', to: { name: 'dashboard' }, text: 'Panel użytkownika' },
];

const route = useRoute();
</script>

<style>
.navbar {
  background-color: #333;
  color: #fff;
  height: 60px;
  display: flex;
}

.nav-items {
  margin: auto;
}
.nav-items a {
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;
}

.router-link-exact-active {
  font-weight: bold;
  color: #008000;
}
</style>