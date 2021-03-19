import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Swal from 'sweetalert2'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    xo: 'O',
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
    enter (context, data) {
      // console.log(data)
      // const name = data.name
      router.push('/play')
      axios.post('/enter', data)
        .then(data => {
          // console.log(data)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Welcome ${data.data.name}`,
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/play')
        })
        .catch(({ err }) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
