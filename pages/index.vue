<template>
    <div class="main-container">
      <Logo :logoSize="500"/>
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
</style>
