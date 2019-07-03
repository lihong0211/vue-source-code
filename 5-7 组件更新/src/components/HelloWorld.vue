<template>
  <div v-if="flag" class="hello">
    此时flag为true
  </div>
  <ul v-else>
    <li>此时flag为false</li>
    <li>这两flag不同时新旧节点不同</li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['flag'],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
