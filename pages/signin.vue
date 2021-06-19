<template>
  <div class="main-container">
    <v-card style="min-width: 400px" elevation="2">
      <v-card-title>Sign in</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.username"
            label="Email or your phone"
            :rules="[rules.required]"
            placeholder=""
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="user.password"
            label="Password"
            placeholder=""
            outlined
            :type="show1 ? 'text' : 'password'"
            :rules="[rules.required]"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            counter
            @click:append="show1 = !show1"
            required
          >
          </v-text-field>
           <v-text-field
            v-model="user.device_token"
            label="device token"
            placeholder=""
            outlined
            :rules="[rules.required]"
            required
          >
          </v-text-field>
          <v-btn @click="onSubmit" block color="#3b9a80" style="color: white">
            Submit
          </v-btn>
          <div class="space"></div>
          <v-btn to="/signup" plain block text> Sign up </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      show1: false,
      valid: false,
      user: {
        username: '',
        password: '',
        device_token: '',
      },

      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => `The email and password you entered don't match`,
      },
    }
  },
  methods: {
    ...mapActions({
      signIn: 'user/signIn',
    }),
    validate() {
      return this.$refs.form.validate()
    },
    async onSubmit(e) {
      if (this.validate()) {
        console.log("Currently at the method onSubmit! Step 1")
        console.log(this.user);
         await this.signIn(this.user)
         this.$router.push('/userProfile');
        // console.log('res from store again ', this.$store.state.user.name);
        console.log("I'm back at onSubmit! Step 5")
      }
    },
  },
  computed: {},
}
</script>

<style>
.main-container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.space {
  height: 10px;
}
</style>
