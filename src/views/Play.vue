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
  .block-play{
    height: 120px;
    border : 3px solid #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  .block-play > h1{
    font-size: 72px
  }
</style>
