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
                  <small v-if="passwordError" class="text-danger">{{ passwordError }}</small>
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
        password: '',
        passwordError: ''
      }
    },
    methods: {
      validatePassword (password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}[\]~]{12,}$/
        return passwordRegex.test(password)
      },
      async login () {
        this.passwordError = ''
        if (!this.validatePassword(this.password)) {
          this.passwordError = 'Password must be at least 12 characters long, include an uppercase letter, a number, and a special character.'
          return
        }
  
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
          console.log('User logged in:', userCredential.user)
          
          this.$router.push('/home')
        } catch (error) {
          console.error('Error logging in:', error)
        }
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  