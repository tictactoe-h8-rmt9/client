<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <input class='form' type="text" placeholder="enter your name" id="name" name="name" required>
    <button type="submit" id="btn-name">OK</button>
  </div>
</template>

<script>
export default {
  name: 'NameForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
