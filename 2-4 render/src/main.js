// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      message: 'hello vue'
    }
  },
  render(createElement) {
    return createElement('div',{
      attrs: {
        id: '#app1'
      }
    }, this.message)
  },
})
