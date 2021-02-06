export const state = () => ({
    counter: []
    //counter: 0
  })
  
  export const mutations = {
    setCounter: (state, list) => (state.counter = list),
    //setCounter: (state) => (state.counter),
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