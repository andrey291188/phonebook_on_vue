export default {
    filterContact(state, payload) {
      state.filter = payload
    },
    setUserAndToken(state, { user, token }) {
      state.user = user.name
      state.token = token
    },
    setError(state, error) {
      state.error = error
    },
    setIsLoading(state, payload) {
      state.isLoading = payload
    },
    setContactListData(state, payload) {
        state.contactList = payload
    }
  }