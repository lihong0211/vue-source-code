<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log('mount: hello world')
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
