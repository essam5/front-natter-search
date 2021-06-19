export default {
  signUp(context, payload) {
    this.$axios
      .post('https://www.natter.nattersearch.com/api/user/sign_up', payload)
      .then((response) => {
        if (response.data.success) {
          context.commit('USER_ACCESS', response.data.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  async signIn(context, payload) {
    try {
      const response = await this.$axios.post(
        'https://www.natter.nattersearch.com/api/user/login',
        payload
      )

      // console.log('res =>', response.data.data.user.name);
      if (response.data.success) {
        console.log(
          'Currently at the method action signIn and waiting for mutations to return! Step 2'
        )
        await context.commit('USER_ACCESS', response.data.data)
        this.$store.dispatch('USER_ACCESS', response.data.data)
        console.log(
          'Currently at the method action signIn and the mutations has returned! Step 4'
        )
      }
    } catch (error) {
      console.log(error)
    }
  },
  logOut(context, payload) {
    this.$axios
      .get('https://www.natter.nattersearch.com/api/logout', payload)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          context.commit('USER_ACCESS', response.data.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  async updateUser(context, payload) {
    try {
      const response = await this.$axios.post(
        `http://127.0.0.1:8000/api/profile/${payload.id}/edit`,
        payload
      )
      if (1) {
        console.log(
          'Currently at the method action updateUser and waiting for mutations to return! Step 2'
        )
        await context.commit('USER_ACCESS', response.data.data)
        console.log(
          'Currently at the method action updateUser and the mutations has returned! Step 4'
        )
      }
    } catch (error) {
      console.log(error)
    }
  },
}
