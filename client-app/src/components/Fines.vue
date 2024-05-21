<script>
// import axios from 'axios'
export default {
  data () {
    return {
      fines: [
        { id: 1, residentName: 'Joseph', amount: 50, description: 'Late rent payment', paid: false },
        { id: 2, residentName: 'Thobeka', amount: 25, description: 'Noise violation', paid: true },
        { id: 3, residentName: 'David', amount: 75, description: 'Unauthorized pet', paid: false },
        { id: 4, residentName: 'Emily', amount: 30, description: 'Improper trash disposal', paid: true },
        { id: 5, residentName: 'Michael', amount: 40, description: 'Parking in reserved spot', paid: false },
        { id: 6, residentName: 'Sophie', amount: 60, description: 'Excessive water usage', paid: false },
        { id: 7, residentName: 'Carlos', amount: 20, description: 'Smoking in non-smoking area', paid: true },
        { id: 8, residentName: 'Lina', amount: 35, description: 'Damaging common area property', paid: false },
        { id: 9, residentName: 'Ethan', amount: 45, description: 'Hosting unauthorized guests', paid: false },
        { id: 10, residentName: 'Aisha', amount: 55, description: 'Leaving belongings in common area', paid: true },
        { id: 11, residentName: 'Daniel', amount: 70, description: 'Disruptive behavior', paid: false },
        { id: 12, residentName: 'Maria', amount: 25, description: 'Failure to pick up mail', paid: false },
        { id: 13, residentName: 'Oliver', amount: 40, description: 'Vandalism', paid: true },
        { id: 14, residentName: 'Lily', amount: 30, description: 'Late utility bill payment', paid: false },
        { id: 15, residentName: 'Max', amount: 50, description: 'Unauthorized subletting', paid: true }
      ],
      isAuthenticated: false
    }
  }
  // mounted () {
  //   axios
  //     .get('http://localhost:3001/adminfines')
  //     .then(response => (this.fines = response))
  // }
}
</script>

<template>
  <div class="container">
    <h1 class="h1">Fines</h1>
    <b-button variant="success" to="/addFine">Fine Residents</b-button>
    <br>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="fine in fines" :key="fine.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ fine.residentName }}</h5>
            <p class="card-text">
              Amount: R{{ fine.amount }}<br>
              Description: {{ fine.description }}<br>
              Paid: <span :class="{ 'text-success': fine.paid, 'text-danger': !fine.paid }">{{ fine.paid ? 'Yes' : 'No' }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>