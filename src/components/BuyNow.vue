<template>
    <div>
      <!-- Navbar or total price display -->
      <NavBar :totalPrice="totalPrice" />
      <!-- Item listing with buy now buttons -->
      <ItemListing @addToTotal="addToTotal" />
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        totalPrice: 0,
        props: ['totalPrice'],
      };
    },
    
    methods: {
      addToTotal(price) {
        this.totalPrice += Number(price);
      },
    },
  }
  </script>
  