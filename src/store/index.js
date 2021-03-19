import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myName: 'asd',
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
    }
  },
  modules: {
  }
})
