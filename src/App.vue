<template>
  <div id="app">
    <Navbar />
    
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue' 
// import Home from './components/Home.vue'
import { RouterView } from 'vue-router'
</script>

<style>
/* Global styles */
</style>
