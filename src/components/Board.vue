<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-4">
          <div class="row">
            <div class="col-4 block-play" @click="insertTicTac(0)" @click.prevent="playSound(soundO)" ><h1>{{$store.state.position[0].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(1)" @click.prevent="playSound(soundX)" ><h1>{{$store.state.position[1].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(2)" @click.prevent="playSound(soundO)" ><h1>{{$store.state.position[2].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(3)" @click.prevent="playSound(soundX)" ><h1>{{$store.state.position[3].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(4)" @click.prevent="playSound(soundO)" ><h1>{{$store.state.position[4].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(5)" @click.prevent="playSound(soundX)" ><h1>{{$store.state.position[5].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(6)" @click.prevent="playSound(soundO)" ><h1>{{$store.state.position[6].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(7)" @click.prevent="playSound(soundX)" ><h1>{{$store.state.position[7].el}}</h1></div>
            <div class="col-4 block-play" @click="insertTicTac(8)" @click.prevent="playSound(soundO)" ><h1>{{$store.state.position[8].el}}</h1></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>