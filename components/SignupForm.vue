<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="user.name"
            label="Name"
            placeholder=""
            outlined
            :rules="[rules.required]"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="user.email"
            label="Email"
            :rules="[rules.email, rules.required]"
            validate-on-blur
            placeholder=""
            outlined
            required
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="user.phone_number"
            label="Phone"
            placeholder=""
            :rules="[rules.required]"
            counter
            outlined
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
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
        </v-col>
        <!-- <v-col>
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
        </v-col> -->
      </v-row>
    </v-container>

    <v-btn @click="onSubmit" block color="#3b9a80" style="color: white">
      Sign up
    </v-btn>
    <div class="space"></div>
    <v-btn to="/signin" plain block text> Sign in </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignupForm',
  data() {
    return {
      show1: false,
      valid: false,
      user: {
        name: '',
        device_token: 'newDevice',
        email: '',
        password: '',
        phone_number: '',
      },
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => (v && v.length) >= 3 || 'Min 3 characters',
        email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      },
    }
  },
  methods: {
    ...mapActions({
      signIn: 'user/signIn',
      signUp: 'user/signUp',
    }),
    validate() {
      return this.$refs.form.validate()
    },
    onSubmit(e, val) {
      e.preventDefault()
      if (this.validate()) {
        this.signUp(this.user)
        this.$router.push('/userProfile');

      }
    },
  },
}
</script>

<style>
</style>
