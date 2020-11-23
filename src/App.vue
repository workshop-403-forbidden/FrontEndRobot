<template>
  <!-- <Home /> -->
  <Formular />
</template>

<script>
import Home from './components/Home.vue'
import Formular from './components/Formular.vue'

export default {
  name: 'App',
  components: {
    Home,
    Formular
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
