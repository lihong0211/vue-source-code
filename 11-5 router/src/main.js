// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Foo from './components/foo'
import Bar from './components/bar'
import VueRouter from 'vue-router/dist/vue-router.esm';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/foo',
    component: Foo,
    children: [
      {
        path: 'bar',
        component: Bar
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
