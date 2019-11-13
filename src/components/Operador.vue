<template>
  <div>
    <button
      type="button"
      class="btn btn-secondary btn-lg btn-block"
      @click="sumar"
    >SUMAR</button>
    <button
      type="button"
      class="btn btn-secondary btn-lg btn-block"
      @click="restar"
    >RESTAR</button>
    <button
      type="button"
      class="btn btn-secondary btn-lg btn-block"
      @click="agregar(cantidadParaAgregar)"
    >AGREGAR {{cantidadParaAgregar}}</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return{
            cantidadParaAgregar: 10
        }
    },
  methods: {
    ...mapActions(["sumar", "restar"]),
    agregar(){
        this.$store.dispatch('agregar',this.cantidadParaAgregar)
    }
    // sumar(){
    //     this.contador++
    // },
    // restar(){
    //     this.contador--
    // }
  }
};
</script>

<style scoped>
div {
  background-color: #1db954;
  height: 400px;
}
</style>