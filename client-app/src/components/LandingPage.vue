<template>
    <div class="landing-page">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title text-center">Welcome to HC Properties</h2>
                <router-link to="/sign-up" class="btn btn-primary btn-block mb-3">Sign Up</router-link>
                <router-link to="/sign-in" class="btn btn-secondary btn-block">Sign In</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage'
  }
  </script>
  
  <style scoped>
 .h2{
    margin-bottom: 20em;
 }
  </style>
  