<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
    <br><br>
    <NameForm msg="Tic-Tac-Toe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NameForm from '@/components/NameForm.vue'

export default {
  name: 'Home',
  components: {
    NameForm
  }
}
</script>
