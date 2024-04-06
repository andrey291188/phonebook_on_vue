import { deleteRequest, getRequest, logIn, logOut, postRequest, signUp } from "@/service/createResponse"

export default {
    async signUpAction({ commit }, value) {
        try {
          commit('setError', '')
          commit('setIsLoading', true)
          const { user, token } = await signUp(value)
          commit('setUserAndToken', { user, token })
        } catch (error) {
          commit('setError', error.message)
        } finally {
          commit('setIsLoading', false)
        }
      },
      async loginAction({ commit }, value) {
        try {
          commit('setError', '')
          commit('setIsLoading', true)
          const { user, token } = await logIn(value)
          commit('setUserAndToken', { user, token })
        } catch (error) {
          commit('setError', error.message)
        } finally {
          commit('setIsLoading', false)
        }
      },
      async logoutAction({ commit }) {
        try {
          commit('setError', '')
          commit('setIsLoading', true)
          await logOut()
          const user = {
            name: ''
          }
          commit('setUserAndToken', { user, token: '' })
        } catch (error) {
          commit('setError', error.message)
        } finally {
          commit('setIsLoading', false)
        }
      },
      async getPhoneBookAction({ commit }) {
        try {
          commit('setError', '')
          commit('setIsLoading', true)
          const data = await getRequest()
          commit('setContactListData', data)
        } catch (error) {
          commit('setError', error.message)
        } finally {
          commit('setIsLoading', false)
        }
      },
      async deleteContactAction({ commit }, id) {
        try {
          commit('setError', '')
          commit('setIsLoading', true)
          await deleteRequest(id)
        } catch (error) {
          commit('setError', error.message)
        } finally {
          commit('setIsLoading', false)
        }
      },
      async addContactAction({ commit }, value) {
        try {
          commit('setError', '')
          commit('setIsLoading', true)
          await postRequest(value)
        } catch (error) {
          commit('setError', error.message)
        } finally {
          commit('setIsLoading', false)
        }
      },
}