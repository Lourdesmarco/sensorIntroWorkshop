export const state = () => ({
    counter: []
  })
  
  export const mutations = {
    setCounter: (state, list) => (state.counter = list),
    increment(state) {
      state.counter++
    }
  }

  export const actions = {
    async nuxtServerInit({ commit }, { $content }) {
      const counter = await $content('counter').fetch()
  
      await commit('setCounter', counter)
    },
  }