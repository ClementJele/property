<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center">Sign Up</h2>
            <!-- Role selection -->
            <div class="form-group">
              <label style="font-weight: bold;">Role</label>
              <div class="row">
                <div class="col">
                  <div
                    class="role-box student"
                    :class="{ 'selected': selectedRole === 'student' }"
                    @click="selectRole('student')"
                  >
                    Student
                  </div>
                </div>
                <div class="col">
                  <div
                    class="role-box staff"
                    :class="{ 'selected': selectedRole === 'staff' }"
                    @click="selectRole('staff')"
                  >
                    Staff
                  </div>
                </div>
              </div>
            </div>
            <!-- End of role selection -->

            <!-- User details -->
            <form @submit.prevent="signUp">
              <!-- <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username" required>
              </div> -->
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
            </form>
            <!-- End of user details -->

            <!-- Login link -->
            <p class="text-center mt-3">Already have An Account? <router-link to="/sign-in">Sign in</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.role-box {
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.role-box.selected {
  border-color: green;
}

.student {
  background-color: #f2f2f2;
}

.staff {
  background-color: #f2f2f2;
}

.staff.selected {
  opacity: 0.7; /* Dim the staff box when selected */
}
</style>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import router from '../router' /

export default {
  data () {
    return {
      selectedRole: null,
      email: '',
      password: ''
    }
  },
  methods: {
    selectRole (role) {
      this.selectedRole = role
    },
    async signUp () {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        console.log('User signed up:', userCredential.user)
        // Redirect to signin page upon successful signup
        router.push('/sign-in')
      } catch (error) {
        console.error('Error signing up:', error)
      }
    }
  }
}
</script>
