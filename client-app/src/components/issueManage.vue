<template>
    

<div class="container-fluid mt-5">
  <!-- <h1 class="h1 text-center">Issue Management</h1>
  <p class="text-center">Only authenticated users should see this page</p> -->
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="form-group" >
        <label for="departmentSelect" class="float-right" style="font-weight: bold;">Department</label>
        <select class="form-control" id="departmentSelect" style="border-radius: 7px; border-width: 2px; border-color: rgb(168, 242, 218);">
          <option value="plumbing">Community Development</option>
          <option value="electricity">Customer Service</option>
          <option value="water">Environmental Services</option>
          <option value="water">Facilities Management</option>
          <option value="water">Maintenance</option>
          <option value="water">Public Works</option>
          <option value="water">plumbing</option>
          
        </select>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="form-group">
        <label for="issueDescription" class="large-font"  style="font-weight: bold;">Describe Your Issue in Detail</label>
        <textarea class="form-control" id="issueDescription" rows="5" placeholder="Enter issue description"></textarea>
      </div>
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-md-6">
      <button type="submit" class="btn btn-primary float-right">Submit Issue</button>
    </div>
  </div>
</div>


  </template>