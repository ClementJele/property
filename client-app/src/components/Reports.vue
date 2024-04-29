<template>
  <div class="container-fluid mt-4">
    <h1 class="h1"> Reports </h1>
    <p>Only authenticated users should see this page</p>
    
    <!-- Fines Management Box -->
    <div class="management-box">
      <h2>Fines Management</h2>
      <p>Here you can manage fines for users (outstanding and history).</p>
      <button>Download CSV</button>
      <button>View Report</button>
    </div>
    
    <!-- Maintenance Management Box -->
    <div class="management-box">
      <h2>Maintenance Management</h2>
      <p>Here you can manage maintenance tasks (open vs closed) over time period.</p>
      <button>Download CSV</button>
      <button>View Report</button>
    </div>

    <!-- General Issue Management Box -->
    <div class="management-box">
      <h2>General Issue Management</h2>
      <p>Here you can manage general issues.</p>
      <button>Download CSV</button>
      <button>View Report</button>
    </div>
  </div>
</template>

<style scoped>
  /* Styles specific to this component */
  .management-box {
    border: 1px solid #ccc;
    padding: 20px;
    margin-top: 20px;
    background-color: #f9f9f9;
  }
  .management-box button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #035638;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .management-box button:hover {
    background-color: #035638;
  }
</style>
