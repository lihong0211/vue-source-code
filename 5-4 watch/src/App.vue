<template>
  <div id="app">
    <p>{{name}}</p>
    <p>{{useless}}</p>
    <button @click="change">change</button>
    <button @click="changeLast">changeLast</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      firstName: 'Li',
      lastName: 'Hong',
      useless: 0,
      nested: {
        a: {
          b:1
        }
      }
    }
  },
  computed:{
    name() {
      if(this.useless > 0) {
        return this.firstName + ',' + this.lastName
      }
      return 'please click & change'
    },
  },
  methods: {
    change() {
      this.useless++
      this.nested.a.b = 2
    },
    changeLast(){
      this.lastName = 'Yao'
    }
  },
  watch: {
    useless(newVal) {
      console.log('useless:', newVal)
    },
    name: {
      immediate: true,
      handler(newVal) {
        console.log('name:', newVal)     
      }
    },
    nested: {
      deep: true,
      handler(newVal) {
        console.log('nested:', newVal.a.b)
      }
    }
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
