import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const state = {
  facts: []
}

export const getters = {
  facts: state => state.facts
}

export const mutations = {
  SET_FACTS_LIST: (state, list) => {
    //mutate state
    state.facts = list.result
  }
}

export const actions = {
  LOAD_FACTS_LIST({commit}, query) {
    axios.get('https://api.chucknorris.io/jokes/search?query=' + query)
  .then(response => {
    // JSON responses are automatically parsed.
    commit('SET_FACTS_LIST', response.data)
  })
  .catch(e => {
    this.errors.push(e)
  })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
