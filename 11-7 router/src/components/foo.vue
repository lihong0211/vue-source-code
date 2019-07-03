<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <router-link to="/foo/bar">跳转到bar</router-link>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data () {
    return {
      msg: 'foo 页面信息'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
