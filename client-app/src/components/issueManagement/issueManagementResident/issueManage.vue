<template>
  <div class="container-fluid mt-5" style="background-color: #215025; min-height: 100vh;">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="form-group">
          <label for="departmentSelect" class="float-right" style="font-weight: bold;">Department</label>
          <select v-model="department" class="form-control" id="departmentSelect" style="border-radius: 7px; border-width: 2px; border-color: rgb(168, 242, 218);">
            <option value="community_development">Community Development</option>
            <option value="customer_service">Customer Service</option>
            <option value="environmental_services">Environmental Services</option>
            <option value="facilities_management">Facilities Management</option>
            <option value="maintenance">Maintenance</option>
            <option value="public_works">Public Works</option>
            <option value="plumbing">Plumbing</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="form-group">
          <label for="issueDescription" class="large-font" style="font-weight: bold;">Describe Your Issue in Detail</label>
          <textarea v-model="description" class="form-control" id="issueDescription" rows="5" placeholder="Enter issue description"></textarea>
        </div>
      </div>
    </div>

    <!-- this is where the photo comes in -->
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="form-group">
          <label for="photoInput" class="large-font" style="font-weight: bold;">Attach Photo</label>
          <input type="file" id="photoInput" class="form-control-file" accept="image/*" @change="handleFileUpload">
        </div>
      </div>
    </div>

    <div class="row justify-content-end">
      <div class="col-md-6">
        <button type="button" class="btn btn-primary float-right" @click="submitIssue">Submit Issue</button>
        <button type="button" class="btn btn-secondary float-right mr-2" @click="viewComplaints">View Complaints</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      department: 'community_development',
      description: '',
      photoFile: null
    }
  },
  methods: {
    handleFileUpload (event) {
      this.photoFile = event.target.files[0]
    },
    submitIssue () {
      const department = this.department
      const description = this.description
      const photoFile = this.photoFile

      if (description.trim() === '') {
        alert('Please enter a description for your issue.')
        return
      }

      let issues = JSON.parse(localStorage.getItem('submittedIssues')) || []
      const newIssue = {
        id: issues.length + 1,
        department: department,
        description: description,
        photoURL: photoFile ? URL.createObjectURL(photoFile) : null,
        status: 'submitted'
      }

      issues.push(newIssue)
      localStorage.setItem('submittedIssues', JSON.stringify(issues))

      this.department = 'community_development'
      this.description = ''
      this.photoFile = null
      this.$router.push({ name: 'Complaints' })
    },
    viewComplaints () {
      this.$router.push({ name: 'Complaints' })
    }
  }
}
</script>
