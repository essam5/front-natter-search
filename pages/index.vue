<template >
    <div  class="main-container">

      <img class="mr-3" :src="require('../assets/NatterSearch.png')" height="70"/>

        <search-bar />
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  components: {
    Logo,
    SearchBar,
  },
}
</script>

<style scoped>
.main-container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.mr-3 {
  background: linear-gradient(rgba(24, 20, 20, 0.822),rgba(53, 44, 44, 0.178));

}
</style>
