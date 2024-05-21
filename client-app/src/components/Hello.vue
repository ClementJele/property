<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="display-3">Welcome to HC Properties</h1>
      <p class="lead">Find Your Perfect Space with Us..</p>
      <div class="image-grid">
        <img class="property-image" src="@/assets/prop1.jpeg" alt="Property 1" height="150" width="150">
        <img class="property-image" src="@/assets/prop2.jpeg" alt="Property 2" height="150" width="150">
        <img class="property-image" src="@/assets/prop3.jpeg" alt="Property 3" height="150" width="150">
        <img class="property-image" src="@/assets/prop4.jpeg" alt="Property 4" height="150" width="150">
        <img class="property-image" src="@/assets/prop5.jpeg" alt="Property 5" height="150" width="150">
        <img class="property-image" src="@/assets/prop6.jpeg" alt="Property 6" height="150" width="150">
      </div>
      <!-- Testimonials Section -->
      <!-- <div class="testimonials">
        <div class="testimonial">
          <img class="testimonial-image" src="@/assets/person1.jpeg" alt="Testimonial 1" height="30" width="30">
          <p class="testimonial-text">Testimonial 1</p>
        </div>
        <div class="testimonial">
          <img class="testimonial-image" src="@/assets/person2.jpeg" alt="Testimonial 2">
          <p class="testimonial-text">Testimonial 2</p>
        </div>
        <div class="testimonial">
          <img class="testimonial-image" src="@/assets/person3.png" alt="Testimonial 3">
          <p class="testimonial-text">Testimonial 3</p>
        </div>
        <div class="testimonial">
          <img class="testimonial-image" src="@/assets/person4.jpeg" alt="Testimonial 4">
          <p class="testimonial-text">Testimonial 4</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style>
  @keyframes slideIn {
    from {
      opacity: 0.7;
      transform: translateY(-50px); 
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }

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
    animation: slideIn 3s ease-out, fadeIn 3s ease-out;
  }
  .hero-content {
    padding-top: 60px; 
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
  /* Testimonials Section */
  .testimonials {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    margin-top: 40px;
    padding: 20px;
    scroll-snap-type: x mandatory;
  }
  .testimonial {
    flex: 0 0 auto;
    width: 150px;
    text-align: center;
    scroll-snap-align: start;
  }
  .testimonial-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  .testimonial-text {
    margin-top: 10px;
    color: #fff;
  }
</style>
