<template>
  <div class="container">
    <form @submit.prevent="issueFine" class="fine-form">
      <label for="residentName">Resident Unit Number:</label>
      <input type="text" id="residentName" v-model="residentName" required>
      <label for="amount">Fine Amount:</label>
      <input type="number" id="amount" v-model="amount" required>
      <label for="description">Description:</label>
      <input type="text" id="description" v-model="description" required>
      <button type="submit">Issue Fine</button>
    </form>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.fine-form {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f8ff; /* Light blue background */
}

.fine-form label {
  display: block;
  margin-bottom: 8px;
}

.fine-form input[type="text"],
.fine-form input[type="number"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.fine-form button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50; /* Green */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.fine-form button:hover {
  background-color: #45a049; /* Darker green on hover */
}
</style>