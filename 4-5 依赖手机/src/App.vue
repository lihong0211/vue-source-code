<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-if="flag">
      {{msg}}
    </div>
    <div v-else>
      {{msg1}}
    </div>
    <p>{{test.nest}}</p>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      flag: true,
      msg: 'hello world',
      msg1: 'hellow vue',
      test: {
        nest: '深度监听'
      }
    }
  },
  watch: {
    test:{
        handler:function(val,oldval){
          console.log(val.name)
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
  },
  methods: {
    change() {
      this.msg = '老子变了'
    },
    toggle() {
      this.flag = !this.flag
      this.test.nest = '深度监听成功'
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
