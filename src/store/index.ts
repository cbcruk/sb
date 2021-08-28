import { createStore } from 'vuex'

interface State {
  meta: null
  page: null
  component: null
}

const store = createStore<State>({
  state() {
    return {
      meta: null,
      page: null,
      component: null,
    }
  },
})

export default store
