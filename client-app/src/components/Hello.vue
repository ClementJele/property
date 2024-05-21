<template>
  <div class="hero">
    <div>
      <h1 class="display-3">Welcome to HC Properties</h1>
      <p class="lead">Find Your Perfect Space with Us.</p>
      <div class="image-grid">
        <img class="property-image" src="@/assets/prop1.jpeg" alt="Property 1" height="150" width="150">
        <img class="property-image" src="@/assets/prop2.jpeg" alt="Property 2" height="150" width="150">
        <img class="property-image" src="@/assets/prop3.jpeg" alt="Property 3" height="150" width="150">
        <img class="property-image" src="@/assets/prop4.jpeg" alt="Property 4" height="150" width="150">
        <img class="property-image" src="@/assets/prop5.jpeg" alt="Property 5" height="150" width="150">
        <img class="property-image" src="@/assets/prop6.jpeg" alt="Property 6" height="150" width="150">
      </div>
    </div>
  </div>
</template>

<style>
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url('~@/assets/background2.jpeg');
    background-size: cover;
    background-position: center;
    color: rgb(119, 243, 187);
    padding: 20px;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 40px;
  }
  .property-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
</style>
