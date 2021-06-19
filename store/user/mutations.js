export default {
  USER_ACCESS(state, payload) {
    console.log("Currently at the mutation USER_ACCESS! Step 3")
    state.token = payload.user.token
    state.name = payload.user.name
    state.phone = payload.user.phone_number
    state.email = payload.user.email
    state.image = payload.user.image
    // state.info.name = payload.user.phone

    console.log(JSON.stringify(state))
    return "done!";
  },
}
