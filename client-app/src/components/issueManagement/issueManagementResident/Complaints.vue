<template>
  <div class="container-fluid mt-5" style="background-color: #215025;">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="text-center">Complaints</h2>
        <div v-for="issue in issues" :key="issue.id" class="complaint-item">
          <div class="row">
            <div class="col-md-5">
              <span>{{ issue.description }}</span>
            </div>
            <div class="col-md-2">
              <span>unit {{ issue.id }}</span>
            </div>
            <div class="col-md-2 text-right">
              <span>{{ issue.status }}</span>
            </div>
            <div class="col-md-3 text-right">
              <button class="btn btn-secondary btn-sm" @click="editIssue(issue.id)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteIssue(issue.id)">Delete</button>
            </div>
          </div>
          <div v-if="issue.photoURL" class="row mt-2">
            <div class="col-md-12">
              <img :src="issue.photoURL" alt="Issue photo" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="text-right mt-3">
          <router-link :to="{ name: 'IssueManager' }" class="btn btn-dark">Lodge Complaint</router-link>
        </div>
      </div>
    </div>

    <!-- Edit Issue Modal -->
    <div v-if="isEditing" class="modal" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Complaint</h5>
            <button type="button" class="close" @click="closeModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="editDescription">Description</label>
              <textarea class="form-control" id="editDescription" v-model="editDescription"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="saveEdit">Save changes</button>
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
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
      issues: [],
      isEditing: false,
      editIssueId: null,
      editDescription: ''
    }
  },
  mounted () {
    this.issues = JSON.parse(localStorage.getItem('submittedIssues')) || []
  },
  methods: {
    logIssue () {
      this.$router.push({ name: 'SubmitIssue' })
    },
    editIssue (id) {
      const issue = this.issues.find(issue => issue.id === id)
      if (issue) {
        this.editIssueId = id
        this.editDescription = issue.description
        this.isEditing = true
      }
    },
    closeModal () {
      this.isEditing = false
      this.editIssueId = null
      this.editDescription = ''
    },
    saveEdit () {
      const issueIndex = this.issues.findIndex(issue => issue.id === this.editIssueId)
      if (issueIndex !== -1) {
        this.issues[issueIndex].description = this.editDescription
        localStorage.setItem('submittedIssues', JSON.stringify(this.issues))
        this.closeModal()
      }
    },
    deleteIssue (id) {
      this.issues = this.issues.filter(issue => issue.id !== id)
      localStorage.setItem('submittedIssues', JSON.stringify(this.issues))
    }
  }
}
</script>

<style scoped>
.complaint-item {
  background-color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
h2 {
  margin-bottom: 20px;
  font-weight: bold;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  margin: 10% auto;
}
</style>
