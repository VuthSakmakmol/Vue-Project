<template>
  <nav class="bg-gray-800 text-white sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
      <router-link to="/" class="text-white text-xl font-semibold">IQIT</router-link>
      <button @click="toggle" class="sm:hidden text-white">
        <svg v-show="!showMenu" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-show="showMenu" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div :class="{'flex': showMenu, 'hidden': !showMenu}" class="sm:flex sm:items-center sm:space-x-4">
        <router-link to="/" class="block px-3 py-2 rounded hover:bg-gray-700">Home</router-link>
        <router-link to="/TestComputed" class="block px-3 py-2 rounded hover:bg-gray-700">About</router-link>
        <router-link to="/service" class="block px-3 py-2 rounded hover:bg-gray-700">Services</router-link>
        <router-link to="/contact" class="block px-3 py-2 rounded hover:bg-gray-700">Contact</router-link>
        <router-link to="/buynow" class="block px-3 py-2 rounded hover:bg-gray-700">Buy Now</router-link>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1280px;
}
@media (max-width: 640px) {
  .container {
    /* Adjust padding for smaller screens if necessary */
  }
  nav svg {
    display: block;
  }
}
.router-link-active {
  /* Replace with the color you want for active links */
  background-color: #4A5568; /* A darker shade of gray */
  color: #fff; /* White text color */
  font-weight: bold; /* Bolder font */
}

/* Optional: If you want to also style the exact active link, use .router-link-exact-active */
.router-link-exact-active {
  background-color: #2D3748; /* Even darker shade for exact match */
  color: #fff;
  font-weight: bold;
}
</style>
