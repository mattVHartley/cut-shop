<template>
  <div class="container">
    <Header class="header" />
    <Sidebar class="sidebar" />
    <router-view class="router-view"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Nunito', sans-serif;
}

.container {
  display: grid;
  height: 100vh;
  grid-template-rows: min-content 1fr;
  grid-template-columns: min-content 1fr;
  grid-template-areas: 
    "header header header"
    "sidebar router-view router-view"
  ;
}

.header {
  grid-area: header;
  background-color: red;
}

.sidebar {
  grid-area: sidebar;
}

.router-view {
  grid-area: router-view;
  background-color: blue;
}

</style>
