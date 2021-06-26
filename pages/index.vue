<template >
    <div  class="main-container">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="logoSize"
    height="50"
    viewBox="0 0 724 118"
  >
    <text
      transform="translate(0 92)"
      fill="#3b9a80"
      font-size="100"
      font-family="NasalizationRg-Regular, Nasalization"
    >
      <tspan x="0" y="0">Natter</tspan>
      <tspan x="350" y="0" fill="#747474">Search</tspan>
    </text>
  </svg>

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
