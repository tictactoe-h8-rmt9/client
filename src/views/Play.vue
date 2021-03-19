<template>
  <section>
    <div class="container">
      <div class="d-flex w-100 justify-content-center mb-3">
        <h1 class="mx-2">{{$store.state.pemain.p1.name}}</h1>
        <h1>vs</h1>
        <h1 class="mx-2">{{$store.state.pemain.p2.name}}</h1>
      </div>
      <div class="row justify-content-center">
        <Cell/>
      </div>
    </div>
  </section>
</template>
<script>
import Cell from '@/components/Cell.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Board',
  components: {
    Cell
  },
  sockets: {
    pemenang (data) {
      console.log(data)
      Swal.fire(data.name + ' WIN')
    }
  }
}
</script>

<style>

</style>
