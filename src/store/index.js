import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    xo: 'X',
    position: [
      {
        id: 1, el: ''
      },
      {
        id: 2, el: ''
      },
      {
        id: 3, el: ''
      },
      {
        id: 4, el: ''
      },
      {
        id: 5, el: ''
      },
      {
        id: 6, el: ''
      },
      {
        id: 7, el: ''
      },
      {
        id: 8, el: ''
      },
      {
        id: 9, el: ''
      }
    ]
  },
  mutations: {
    insertTicTac (state, { id, value }) {
      state.position[id].el = value
    }
  },
  actions: {
  },
  modules: {
  }
})
