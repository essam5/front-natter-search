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

            <!-- <v-dialog v-model="dialog" persistent max-width="600px">
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
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal middle name"
                            v-model="newUser.username"
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
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog> -->
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
    <v-row v-else>
      <v-card id="card" style="background-color:red;">
     <p style="margin: 50px;">The given data was invalid <br> you should login or signup</p>
     </v-card>
    </v-row>
  </v-container>

</template>


<script>
import Logo from '../components/Logo.vue'
import SignupForm from '../components/SignupForm.vue'
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
   methods: {
    ...mapActions({
      signIn: 'user/signIn',
      signUp: 'user/signUp',
    }),

    ...mapGetters({
      signIn: 'user/signIn',
      signUp: 'user/signUp',

    }),

   },
     computed: {
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

 </style>
