// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.config.productionTip = false
Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters:{
    computedCount(state) {
      return state.count + 1
    }
  }
}
const moduleB = {
  namespaced: true,
  state: {
    countB: 1
  },
  mutations: {
    increment(state) {
      state.countB++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters:{
    computedCount(state) {
      return state.countB + 1
    }
  }
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    count: 1
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
