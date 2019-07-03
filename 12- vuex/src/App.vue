<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <!-- <router-link to="/foo">跳转到foo</router-link> -->
      vuex
      <foo />
    </p>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>

import Foo from '@/components/foo.vue'

export default {
  name: 'App',
  components: {
    Foo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
