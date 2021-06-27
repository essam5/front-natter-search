<template>
  <!-- <svg
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

  </svg> -->
          <img class="mr-3" :src="require('../assets/NatterSearch.png')" height="60"/>


</template>

<script>
export default {
  props: {
    logoSize: Number,
  }
}
</script>

<style>
.mr-3 {
  background: linear-gradient(rgba(0, 0, 0, 0.822),rgba(22, 18, 18, 0.7));

}
</style>
