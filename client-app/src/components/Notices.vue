<template>
  <div>
    <!-- Button to create a new notice -->
    <button @click="toggleCreateForm" class="create-button">Create New Notice</button>
    <!-- Form to create/update a notice (Initially hidden) -->
    <div v-if="showCreateFormFlag" class="create-form">
      <h2>{{ formMode === 'create' ? 'Create New Notice' : 'Update Notice' }}</h2>
      <label for="noticeTitle">Title:</label>
      <input type="text" id="noticeTitle" v-model="newNotice.title" placeholder="Enter title">
      <label for="noticeContent">Content:</label>
      <textarea id="noticeContent" v-model="newNotice.content" placeholder="Enter content"></textarea>
      <button @click="formMode === 'create' ? addNotice() : updateNotice()" class="submit-button">
  {{ formMode === 'create' ? 'Submit' : 'Update' }}
</button>

    </div>

    <!-- List/container view to display all current notices -->
    <div class="notice-list">
      <h2>Notices</h2>
      <div v-for="(notice, index) in notices" :key="index" class="notice-item">
        <span @click="showNoticeContent(notice)">{{ notice.title }}</span>
        <select v-model="selectedOption" @change="handleOptionChange(selectedOption, notice)">
          <option disabled value="">Options</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showCreateFormFlag: false,
      formMode: 'create', // 'create' or 'update'
      newNotice: {
        title: '',
        content: ''
      },
      notices: [
        // Sample notices data
        { id: 1, title: 'Notice 1', content: 'Content of Notice 1' },
        { id: 2, title: 'Notice 2', content: 'Content of Notice 2' },
        { id: 3, title: 'Notice 3', content: 'Content of Notice 3' }
      ],
      selectedOption: ''
    }
  },
  methods: {
    toggleCreateForm () {
      this.showCreateFormFlag = !this.showCreateFormFlag
      this.formMode = 'create' // Reset form mode to 'create' when toggling form visibility
      this.clearForm() // Clear form fields when toggling form visibility
    },
    addNotice () {
      if (this.newNotice.title && this.newNotice.content) {
        const newId = this.notices.length + 1 // Generate new ID for the notice
        this.notices.push({
          id: newId,
          title: this.newNotice.title,
          content: this.newNotice.content
        })
        this.clearForm() // Clear form fields after adding notice
        this.showCreateFormFlag = false // Hide create form after submitting
      } else {
        alert('Please fill in both title and content fields.')
      }
    },
    updateNotice () {
      // Find the index of the notice to update
      const index = this.notices.findIndex(notice => notice.id === this.selectedNotice.id)
      if (index !== -1) {
        // Update the notice with new data
        this.notices[index].title = this.newNotice.title
        this.notices[index].content = this.newNotice.content

        this.clearForm() // Clear form fields after updating notice
        this.showCreateFormFlag = false // Hide create form after submitting
      }
    },
    deleteNotice () {
      // Filter out the selected notice from the notices array
      this.notices = this.notices.filter(notice => notice.id !== this.selectedNotice.id)
    },
    showNoticeContent (notice) {
      // Show notice content when clicked
      alert(`Title: ${notice.title}\nContent: ${notice.content}`)
    },
    handleOptionChange (option, notice) {
      // Handle option change (Update or Delete)
      if (option === 'update') {
        // Set form mode to 'update' and populate form fields with selected notice data
        this.formMode = 'update'
        this.newNotice = { ...notice }
        this.selectedOption = notice.id
        this.selectedNotice = notice
        this.showCreateFormFlag = true // Show create form for updating
      } else if (option === 'delete') {
        // Set selectedNotice to the notice being deleted
        this.selectedOption = notice.id
        this.selectedNotice = notice

        // Call deleteNotice method to delete the selected notice
        this.deleteNotice()
      }
    },
    clearForm () {
      // Clear form fields
      this.newNotice.title = ''
      this.newNotice.content = ''
    }
  },
  computed: {
    selectedNotice () {
      // Find the selected notice based on selectedOption
      return this.notices.find(notice => notice.id === this.selectedOption)
    }
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
.create-button {
  margin-top: 0px;
  margin-right: 15px;
  float: right;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


.create-button:hover {
  background-color: #45a049;
}

/* Form styles */
.create-form {
  margin-top: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.create-form h2 {
  margin-top: 0;
}

.create-form label {
  display: block;
  margin-bottom: 5px;
}

.create-form input[type="text"],
.create-form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

.create-form button.submit-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.create-form button.submit-button:hover {
  background-color: #45a049;
}

/* Notice list styles */
.notice-list {
  margin-top: 20px;

}

.notice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer; /* Add cursor pointer for notices */
}


.notice-item select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
}

/* Dropdown styles */
.notice-item select:focus {
  outline: none;
}

/* Styles for update and delete options */
.notice-item select option {
  background-color: #fff;
  color: #000;
}
</style>
