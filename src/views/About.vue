<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-4">
          <div class="row">
            <div class="col-4 block-play" @click="insertTicTac(0)"><h1>{{$store.state.position[0].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(1)"><h1>{{$store.state.position[1].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(2)"><h1>{{$store.state.position[2].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(3)"><h1>{{$store.state.position[3].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(4)"><h1>{{$store.state.position[4].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(5)"><h1>{{$store.state.position[5].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(6)"><h1>{{$store.state.position[6].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(7)"><h1>{{$store.state.position[7].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(8)"><h1>{{$store.state.position[8].el}}</h1></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Board',
  methods: {
    insertTicTac (id) {
      console.log(id)
    }
  }
}
</script>
<style>
  .block-play{
    height: 120px;
    border : 2px solid #000000;
    cursor: pointer;
  }
  .block-play > h1{
    font-size: 72px
  }
</style>
