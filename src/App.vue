<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/NavBar.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
