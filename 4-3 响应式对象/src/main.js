// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      message: {
        one: '测试'
      }
    }
  },
  mounted() {
    console.log(this)
  }
})
