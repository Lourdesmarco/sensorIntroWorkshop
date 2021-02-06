export const state = () => ({    
    counter: 0
  })
  
  export const mutations = {

    //setCounter: (state) => (state.counter),
    increment(state) {
      state.counter++;
    }
  }

