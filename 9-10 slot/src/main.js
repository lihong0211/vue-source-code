// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

let AppLayout = {
  template: `<div class="container">
              <header><slot name="header"></slot></header>
              <main><slot >默认内容</slot></main>
              <footer><slot name="footer"></slot></footer>
            </div>`,
  
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<div>
              <app-layout>
                <h1 slot="header">{{title}}</h1>
                <p>{{msg}}</p>
                <p slot="footer">{{desc}}</p>
              </app-layout>
            </div>`,
  data() {
    return {
      title: '我是标题',
      msg: '我是内容',
      desc: '其他内容'
    }
  },
  components: { AppLayout },
})
