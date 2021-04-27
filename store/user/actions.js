export default {
  signUp(context, payload) {
    this.$axios
      .post('https://www.nattersearch.com/api/register', payload)
      .then((response) => {
        if (response.stats == 201) {
          context.commit('USER_ACCESS', response)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  signIn(context, payload) {
    this.$axios
      .post('https://www.nattersearch.com/api/login', payload)
      .then((response) => {
        if (response.status == 201) {
          context.commit('USER_ACCESS', response)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
