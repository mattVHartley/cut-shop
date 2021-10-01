<template>
  <div class="container">
    <Header />
    <Sidebar />
    <router-view/>
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
  max-width: 100%;
  min-height: 100vh;
  margin: auto;
}
</style>
