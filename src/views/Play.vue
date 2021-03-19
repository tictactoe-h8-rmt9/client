<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <Cell/>
      </div>
    </div>
  </section>
</template>
<script>
import Cell from '@/components/Cell.vue'

export default {
  name: 'Board',
  components: {
    Cell
  }
}
</script>

<style>

</style>
