// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<div><ul :class="bindCls" class="list" v-if="isShow">' + 
  '<li v-for="(item, index) in data" @click="clickItem(index)">{{item}}: < {{index}}</li></ul>' + 
  '<div><p>111</p></div><p>222</p></div>',
  data() {
    return {
      bindCls: 'a',
      isShow: true,
      data: ['A', 'B', 'C', 'D']
    }
  },
  methods: {
    clickItem(index) {
      console.log(index)
    }
  }
})
