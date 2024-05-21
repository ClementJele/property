<template>
  <div class="container-fluid mt-5" style="font-family: 'Arial', sans-serif; background-color: #d4edda; padding: 20px;">
    <!-- Staff Complaints -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card mb-3" v-for="(complaint, index) in complaints" :key="index" style="background-color: #fff; border-radius: 10px;">
          <div class="card-header" @click="viewComplaint(complaint)" style="cursor: pointer; background-color: #28a745; color: #fff; border-radius: 10px 10px 0 0;">
            <h5 class="card-title">{{ complaint.title }}</h5>
          </div>
          <div class="card-body" v-if="complaint.expanded">
            <p class="card-text">{{ complaint.description }}</p>
            <p class="card-text"><small class="text-muted">From: {{ complaint.sender }}, Posted on: {{ complaint.postedDate }}, Department: {{ complaint.department }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      complaints: [
        {
          title: 'Complaint 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat dui eget eros ullamcorper, sit amet pharetra massa dapibus.',
          sender: 'John Doe',
          postedDate: '2024-05-01',
          department: 'Community Development',
          expanded: false
        },
        {
          title: 'Complaint 2',
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac ligula nunc.',
          sender: 'Jane Smith',
          postedDate: '2024-05-02',
          department: 'Customer Service',
          expanded: false
        },
        {
          title: 'Complaint 3',
          description: 'Nullam mollis interdum nisi, vel convallis odio sollicitudin nec. Duis nec commodo enim, vitae condimentum odio.',
          sender: 'Alice Johnson',
          postedDate: '2024-05-03',
          department: 'Environmental Services',
          expanded: false
        }
      ]
    }
  },
  methods: {
    viewComplaint (complaint) {
      // Navigate to another page to view and update the complaint
      // You can use Vue Router for navigation
      // Pass the complaint data to the new page via route params or state
      this.$router.push({ name: 'ComplaintDetails', params: { complaint } })
    }
  }
}
</script>
