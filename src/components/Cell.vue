<template>
  <div class="col-sm-4">
    <div class="row">
      <div class="col-4 block-play" @click="insertTicTac(0)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[0].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(1)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[1].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(2)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[2].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(3)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[3].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(4)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[4].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(5)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[5].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(6)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[6].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(7)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[7].el}}</h1></div>
      <div class="col-4 block-play" @click="insertTicTac(8)" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" ><h1>{{$store.state.position[8].el}}</h1></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  data () {
    return {
      soundX: 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
      soundO: 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
    }
  },
  methods: {
    insertTicTac (id) {
      if (this.$store.state.position[id].el === '') {
        console.log(id)
        this.$socket.emit('updateBoard', id)
      }
    },
    playSound (sound) {
      if (sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    }
  }
}
</script>

<style scoped>
.block-play{
  height: 120px;
  border : 3px solid #fff;
  cursor: pointer;
}
.block-play > h1{
  font-size: 72px
}
</style>
