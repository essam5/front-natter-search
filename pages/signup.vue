<template>
  <div class="main-container">
    <v-card style="min-width: 400px" elevation="2">
      <v-card-title>Sign in</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.username"
            label="Username"
            :rules="rules.nameRules"
            validate-on-blur
            counter
            placeholder=""
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="user.name"
            label="Name"
            placeholder=""
            outlined
            :rules="[rules.required]"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="user.email"
            label="Email"
            :rules="rules.emailRules"
            validate-on-blur
            placeholder=""
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="user.phone"
            label="Phone"
            placeholder=""
            :rules="[rules.required]"
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
            v-model="user.password_confirmation"
            label="Confirm Password"
            placeholder=""
            outlined
            :type="show1 ? 'text' : 'password'"
            :rules="[rules.required, rules.emailMatch]"
            validate-on-blur
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            counter
            @click:append="show1 = !show1"
            required
          >
          </v-text-field>
          <v-btn @click="onSubmit" block color="#3b9a80" style="color: white">
            Sign up
          </v-btn>
          <div class="space"></div>
          <v-btn to="/signin" plain block text> Sign in </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      show1: false,
      valid: false,
      user: {
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
      },
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () =>
          this.user.password === this.user.password_confirmation ||
          `The email and password you entered don't match`,
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => (v && v.length >= 3) || 'Name must be more than 3 characters',
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
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
    onSubmit(e, val) {
      e.preventDefault()
      if (this.validate()) {
        this.signIn(this.user)
      }
    },
  },
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
