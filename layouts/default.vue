<template>
  <v-app>
    <v-app-bar dense flat app color="black" class="nav">
      <router-link to="/">
        <v-app-bar-icon style="background-color:black;">
          <Logo :logoSize="300" />
        </v-app-bar-icon>
      </router-link>
      <v-spacer />
      <v-btn to="/userProfile" large text plain style="color:green;" v-if="$store.state.user.token"> Profile </v-btn>

      <v-btn to="/about" large text plain class="btn" style="color:green;" v-else>
       About
       </v-btn>

      <v-btn @click="onSubmit" large text plain class="btn" style="color:green;" v-if="$store.state.user.token">
         Log out </v-btn>


      <v-btn to="/signin" large text plain class="btn" style="color:green;" v-else> Sign In </v-btn>

    </v-app-bar>

    <v-main class="background">
      <nuxt />
    </v-main>

    <!-- <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapActions } from 'vuex'
import {mapGetters} from 'vuex'


export default {
  components: {
    Logo,
  },
  data() {
    return {
      title: 'NatterSearch',
      user: {
        token: '',
      },
    }
  },
  methods: {
    ...mapActions({
      logOut: 'user/logOut',
    }),
    ...mapGetters({
      signIn: 'user/signIn',
      signUp: 'user/signUp',

    }),
    async onSubmit(e) {
      e.preventDefault()
      console.log('res  token befor =>',this.$store.state.user.token);
      this.$store.state.user.token = null;
        await this.logOut(this.user)
        this.$router.push('/');


    },
  },
}
</script>

<style scoped>
.navbar {
  margin-left: 10px;
  margin-right: 10px;
  height: 60px;
}
.nav-items {
  margin-top: 6px;
}
.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.822),rgba(22, 18, 18, 0.7)) ,url("../assets/background.jpg");;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 1000vh;
  display: block;
}
.nav {
  background: linear-gradient(rgba(0, 0, 0, 0.822),rgba(22, 18, 18, 0.7));
}
.btn {
  background: rgb(27, 23, 19);

}
</style>
