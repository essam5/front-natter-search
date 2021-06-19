<template>
  <div class="main-container">
    <v-card style="min-width: 700px" elevation="2">
      <v-card-title>Sign up</v-card-title>
      <v-card-text>
        <signup-form  />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'


export default {
  components:{
    SignupForm
  },
  data() {
    return {

    }
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
