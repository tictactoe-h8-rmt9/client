import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myName: '',
    pemain: {},
    position: [
      {
        el: ''
      },
      {
        el: ''
      },
      {
        el: ''
      },
      {
        el: ''
      },
      {
        el: ''
      },
      {
        el: ''
      },
      {
        el: ''
      },
      {
        el: ''
      },
      {
        el: ''
      }
    ]
  },
  mutations: {
    insertName (state, data) {
      state.myName = data
    },
    fetchPemain (state, data) {
      state.pemain = data
    },
    insertTicTac (state, { id, value }) {
      state.position[id].el = value
    },
    fetchData (state, value) {
      state.position = value
    }
  },
  actions: {
    SOCKET_fetchDataBoard (context, data) {
      context.commit('fetchData', data)
    },
    SOCKET_fetchPemain (context, data) {
      context.commit('fetchPemain', data)
    }
  },
  modules: {
  }
})
