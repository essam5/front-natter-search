<template>
  <v-app>
    <v-app-bar class="navbar" dense flat app color="white">
      <v-app-bar-title>
        <Logo :logoSize="300" />
      </v-app-bar-title>
      <v-spacer />
      <v-btn to="/signin" large text plain> Sign In </v-btn>
      <v-btn large text plain> About </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      title: 'NatterSearch',
    }
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
</style>
