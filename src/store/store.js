import { createStore } from 'vuex'
import action from './action'
import mutation from './mutation'

const store = createStore({
  state() {
    return {
      user: '',
      token: '',
      error: '',
      isLoading: false,
      filter: '',
      contactList: []
    }
  },
  mutations: mutation,
  getters: {
    gFilter(state) {
      return state.filter
    },
    userName(state) {
      return state.user
    },
    getContact(state) {
      return state.contactList
    }
  },
  actions: action,
})

export default store
