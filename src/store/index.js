import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador:0
  },
  mutations: {
    sumar: state=> { state.contador++ },
    restar: state=>{ state.contador-- },
    reset: state=>{ state.contador = 0 },
    agregar: (state,cantidadParaAgregar)=>{ state.contador += cantidadParaAgregar },
  },
  actions: {
    sumar:({commit})=>{commit('sumar')},
    restar:({commit})=>{commit('restar')},
    reset:({commit})=>{
      setTimeout(() => {
        commit('reset')  
      }, 2000); //2 segundos
    },
    agregar:({commit},cantidadParaAgregar)=>{
      commit('agregar',cantidadParaAgregar)
    }
  },
   getters:{
    getContador: state=>{ return state.contador}
  }
})
