<template>
  <div class="navbar fixed-top d-flex flex-column flex-wrap justify-content-center">
    <div class="navbar-brand">
      <router-link to="/"><img src="./assets/img/pokeicon-white.png" alt="" style="text-decoration: none; color: inherit"></router-link>
      <router-link class="btn btn-primary" to="/" style="text-decoration: none; color: inherit"><h1>Pok&eacute; Dex</h1></router-link>
    </div>
    <div class="navbar-nav d-flex flex-row justify-content-around">
      <router-link class="nav-item btn btn-primary" to="/type_charts">Type Charts</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style src='./assets/css/main.css'></style>
<style>@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Staatliches&display=swap');</style>
<style>@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");</style>
