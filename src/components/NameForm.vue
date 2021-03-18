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
.form {
  border-radius: 10px;
  border: 2px solid #73AD21;
  padding: 20px;
  width: 200px;
  height: 25px;
}
button {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}
</style>
