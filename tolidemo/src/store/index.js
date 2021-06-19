import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  listx:[]
  },
  mutations: {
	  get(state,payload){
		  state.listx=payload
	  }
  },
  actions: {
  },
  modules: {
  }
})
