/* 
* Vuex
* Viene a ser como el Redis de Sailsjs. Solo que utiliza window.sessionStorage
* o window.localStorage segun se defina
* To use the store in your components:
* this.$store.state.propertiesName
*
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      // Inital State of User
      isLoggedIn: false
    },
    config: {}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
