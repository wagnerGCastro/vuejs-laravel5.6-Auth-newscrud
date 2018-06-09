<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <a class="navbar-brand" href="#">Portal</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link tag="li" class="nav-item" to="/"><a href="" class="nav-link">Home</a> </router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" to="/profile"><a href="" class="nav-link">Profile</a> </router-link>
            <router-link tag="li" class="nav-item" to="/login"><a href="" class="nav-link">Login</a> </router-link>
            <router-link tag="li" class="nav-item" to="/signup"><a href="" class="nav-link">Signup</a> </router-link>
            <router-link tag="li" class="nav-item" to="/news"><a href="" class="nav-link">News</a> </router-link>
          </ul>
        </div>
      </nav>

    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
@import '~vue-toastr-2/dist/vue-toastr-2.min.css';
</style>
