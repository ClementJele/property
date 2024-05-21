
<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center">Login</h2>
  
              <!-- User login form -->
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
              <!-- End of user login form -->
  
              <!-- Signup link -->
              <p class="text-center mt-3">Not registered yet? <router-link to="/sign-up">Sign Up</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword } from 'firebase/auth'
  import { auth } from '../config/firebase'
  
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login () {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
          console.log('User logged in:', userCredential.user)
          // Optionally, you can redirect the user to another page upon successful login
          this.$router.push('/home')
        } catch (error) {
          console.error('Error logging in:', error)
        }
      }
    }
  }
  </script>
  