<template>
    <div class="home">
      <section class="hero">
        <div class="hero-inner">
          <h1>Hello Kon MaMa...!!</h1>
          <p>This is a simple homepage built with Vue.js</p>
          <router-link to="/about" class="btn">Learn More</router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    // Component-specific logic goes here.
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .hero {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .hero-inner h1 {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }
  
  .hero-inner p {
    font-size: 1.25rem;
    margin-bottom: 1em;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #2980b9;
  }
  </style>
  