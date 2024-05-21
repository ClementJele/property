<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand @click="goHome">
        <div class="d-flex align-items-center">
          <img src="./assets/home.svg" height="38" width="38" alt="logo" />
          <p class="mb-0 ml-2">HC Properties</p>
        </div>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav v-if="activeUser">
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/user-manager">User Management</b-nav-item>
          <b-nav-item to="/issue-manager">Complaints</b-nav-item>
          <!-- <b-nav-item to="/Complaints">View Complaints</b-nav-item> -->
          <b-nav-item to="/fines">Fines</b-nav-item>
          <b-nav-item to="/notices">Notices</b-nav-item>
          <b-nav-item to="/reports">Reports</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="activeUser">
          <b-nav-item @click.prevent="logout">
            <div class="flex flex-row">
              <img src="./assets/logout.svg" height="30" width="30" alt="logo" style="background-color: white; border-radius: 4px;"/>
              <span>Logout</span>
            </div>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-else>
          <div></div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth'

export default {
  name: 'app',
  data () {
    return {
      activeUser: null,
      auth: null
    }
  },
  created () {
    this.auth = getAuth()
    this.refreshActiveUser()
  },
  methods: {
    goHome () {
      if (this.activeUser) {
        this.$router.push({ name: 'home' })
      } else {
        alert('You need to log in to access the home page.')
      }
    },
    login () {
      signInWithRedirect(this.auth)
    },
    logout () {
      signOut(this.auth).then(() => {
        this.activeUser = null
        this.$router.push('/')
      })
    },
    refreshActiveUser () {
      onAuthStateChanged(this.auth, (user) => {
        this.activeUser = user
      })
    }
  }
}
</script>
