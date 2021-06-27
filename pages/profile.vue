<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="2">
          <v-card-title>
            <span class="headline">{{ this.user.name }} </span>
          </v-card-title>
          <v-card-subtitle>
            {{ this.user.username }} || {{ this.user.email }}</v-card-subtitle
          >
          <v-divider class="mx-4"></v-divider>
          <v-card-text> {{ this.user.phone }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on"> Edit </v-btn>
              </template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card>
                  <v-card-title>
                    <span class="headline">User Profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Name"
                            v-model="newUser.name"
                            :rules="[rules.min]"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal middle name"
                            v-model="newUser.username"
                            :rules="[rules.min]"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal last name*"
                            v-model="newUser.phone"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="onSubmit"

                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    valid: false,
    newUser: {
      name:'',
      username:'',
      email:''
    },
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => (v && v.length) >= 3 || 'Min 3 characters',
      email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      emailMatch: () =>
        this.user.password === this.user.password_confirmation ||
        `The email and password you entered don't match`,
    },
  }),
  methods: {
    ...mapActions({
      updateUser: 'user/updateUser',
    }),
    validate() {
      return this.$refs.form.validate()
    },
    onSubmit(e, val) {
      e.preventDefault()
      console.log(this.validate());
      if (this.validate()) {
        this.updateUser(this.user)
        this.dialog = !this.dialog
      }
    },
  },
  computed: {
      ...mapState({
        user: (state) => state.user,
      }),
    },
    mounted() {
      console.log(this.$route.path)
    },
}
</script>

<style>
</style>
