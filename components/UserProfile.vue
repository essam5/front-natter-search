<template>
  <!-- <div class="main-container">
    <v-card style="min-width: 1000px" elevation="2" v-if="$store.state.user.name">
      <v-card-title id="card">
        Your Profile
      </v-card-title>
      <v-card-text>
<p id="card"> <strong>
  {{$store.state.user.name}}
  </strong>
</p>
      </v-card-text>
    </v-card>
    <v-card v-else>
    </v-card>
  </div> -->
  <v-container >
    <v-row v-if="$store.state.user.token">
      <v-col>
        <v-card elevation="2" style="width:800px" >
          <v-card-title>
            <span class="headline" style="color:green;">{{ $store.state.user.name }} </span>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>

          <v-card-subtitle> <strong style="color:blue;" >
            {{ $store.state.user.name }} </strong> </v-card-subtitle
          >
          <v-divider class="mx-4"></v-divider>

          <v-card-subtitle> <strong style="color:blue;"> {{ $store.state.user.email }} </strong> </v-card-subtitle>
           <v-divider class="mx-4"></v-divider>

          <v-card-text> <strong style="color:blue;">{{ $store.state.user.phone }} </strong></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn text class="edit" v-bind="attrs" v-on="on"> Edit </v-btn>
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
                            v-model="user.name"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="your email"
                            v-model="user.email"
                            hint="click here to update"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="your phone"
                            v-model="user.phone"
                            hint="click here to update"
                            persistent-hint
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>update your profile</small>
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

      <v-col>
      <v-card  style="width:300px">
          <v-card-title>
            <span class="headline" style="color:green;">Topics </span>
          </v-card-title>
        <v-divider class="mx-4"></v-divider>
       <v-card-subtitle> <strong style="color:blue;"> soon... </strong> </v-card-subtitle>

      </v-card>
       <v-card  style="width:300px;margin-top:5px" >
          <v-card-title>
            <span class="headline" style="color:green;">Expert </span>
          </v-card-title>
        <v-divider class="mx-4"></v-divider>
       <v-card-subtitle> <strong style="color:blue;"> soon... </strong> </v-card-subtitle>
      </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>


<script>
import Logo from '../components/Logo.vue'
import SignupForm from '../components/SignupForm.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters} from 'vuex'


  export default {
    components:{
    Logo,
    SignupForm
      },
    name: 'UserProfile',
    data() {
      return {

      }
    },
 data: () => ({
    dialog: false,
    valid: false,
    user: {
      name:'',
      email:'',
      phone:'',
    }
  }),
   methods: {
    ...mapActions({
      signIn: 'user/signIn',
      signUp: 'user/signUp',
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
        // this.dialog = !this.dialog
        this.$router.push('/userProfile');
        console.log(this.$store.user);
      }
    },

    ...mapGetters({
      signIn: 'user/signIn',
      signUp: 'user/signUp',

    }),

   },
     computed: {
      ...mapState({
        user: (state) => state.user,
      }),
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

#card {
  margin: 0 auto;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.edit {
  background: chocolate;
}

 </style>
