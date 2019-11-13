<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Visualizador from '@/components/Visualizador.vue'
import Operador from '@/components/Operador.vue'

export default {
  name: 'home',
  components: {
     Visualizador,Operador
  }
}
</script>
