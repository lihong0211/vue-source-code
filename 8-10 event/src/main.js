// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */

let Child = {
  template: '<button @click="clickHandler($event)">' + 'click me' + '</button>',
  data() {
    return {
      test: '我是test'
    }
  },
  methods: {
    clickHandler(e) {
      console.log('Button clicked', e)
      this.test = '我是test变化了'
      console.log(meiyou)
      this.$emit('select')
    }
  }
}


new Vue({
  el: '#app',
  template: '<div><child @select="selectHandler" @click.native.prevent="clickHandler" /></div>',
  components: {
    child: Child
  },
  methods: {
    clickHandler() {
      console.log('Child clicked')
    },
    selectHandler() {
      console.log('Child select')
    }
  }
})
