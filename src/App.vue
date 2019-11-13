<template>
  <div id="app">
    <button
      type="button"
      class="btn btn-info btn-lg btn-block"
      @click="reset"
      v-if="contador != 0"
    >RESET desde App.vue</button>
    <app-visualizador></app-visualizador>
    <app-operador></app-operador>

  </div>
</template>

<script>
import Visualizador from "./components/Visualizador.vue";
import Operador from "./components/Operador.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["reset"])
     
  },
  computed: {
    ...mapGetters({ contador: "getContador" })
  },
  components: {
    appVisualizador: Visualizador,
    appOperador: Operador
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h1 {
  margin-top: 50px;
}
</style>
