export default {
  USER_ACCESS(state, payload) {
    state.signedIn = true
    state.token = payload.data.token
    state.user.name = payload.data.user.name
    state.user.phone = payload.data.user.phone
    state.user.email = payload.data.user.email
    state.user.username = payload.data.user.username
    console.log(JSON.stringify(state))
  },
}
