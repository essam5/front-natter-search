<template>
  <div class="big">
    <svg
      id="Component_4_1"
      data-name="Component 4 – 1"
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="60"
      viewBox="0 0 981 78"
    >
      <g
        id="Rectangle_1"
        data-name="Rectangle 1"
        fill="#fff"
        stroke="#707070"
        stroke-width="1"
      >
        <rect width="981" height="78" rx="39" stroke="none" />
        <rect x="0.5" y="0.5" width="980" height="77" rx="38.5" fill="none" />
      </g>
      <g
        id="New_Text_Document"
        data-name="New Text Document"
        transform="translate(906.998 13.999)"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M81.738,180.734a1,1,0,1,0,1,1A1,1,0,0,0,81.738,180.734Zm0,0"
          transform="translate(-72.702 -162.74)"
          fill="#3b9a80"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M36.928,29.889a1,1,0,0,0-.7-.292,1.006,1.006,0,0,0-.7.292l-.7.7L32.53,28.306a17.918,17.918,0,1,0-4.224,4.224l2.287,2.287-.7.7a1,1,0,0,0,0,1.408L42.475,49.513a4.976,4.976,0,1,0,7.038-7.038ZM32,33.409l-2.131-2.131c.248-.222.49-.45.724-.684s.462-.476.684-.724L33.409,32ZM6.662,29.185a15.927,15.927,0,1,1,22.524,0,15.918,15.918,0,0,1-22.524,0ZM36.224,32l2.815,2.816-4.223,4.223L32,36.224Zm11.881,16.1a2.982,2.982,0,0,1-4.222,0l-7.659-7.659,4.223-4.223,7.659,7.659A2.981,2.981,0,0,1,48.106,48.106Zm0,0"
          transform="translate(0 0)"
          fill="#3b9a80"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M63.888,44.1a13.937,13.937,0,1,0,0,19.709,13.932,13.932,0,0,0,0-19.709ZM62.48,62.4a11.946,11.946,0,1,1,0-16.893,11.938,11.938,0,0,1,0,16.893Zm0,0"
          transform="translate(-36.11 -36.032)"
          fill="#3b9a80"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M94.335,80.043a9.951,9.951,0,0,0-9.421,6.739,1,1,0,0,0,1.885.64,7.959,7.959,0,0,1,7.535-5.388,1,1,0,1,0,0-1.991Zm0,0"
          transform="translate(-76.411 -72.073)"
          fill="#3b9a80"
        />
      </g>
    </svg>
    <form class="small" action="/search">
        <input
          style="z-index: 2"
          v-on:keyup.enter="submit"
          height="100"
          size="42"
          type="text"
          placeholder="Search"
          class="search-form"
          name="query"
        />
      </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {

    }
  },
  methods: {
    submit(e) {
      e.preventDefault();

    }
  }
}
</script>

<style>
.big {
  position: relative;
}
.small {
  position: absolute;
  bottom: 16px;
  left:18px;
}
.search-form {
  display: inline;
  background: rgba(255, 255, 255, 0);
  padding: 0;
  border: 0 none transparent;
  line-height: 0;
  /* position: absolute;
  left: 15px;
  top: 12px; */
  box-shadow: none;
}
.search-form:focus {
  /* background: rgba(255, 255, 255, 1); */
  color: #333;
  outline: none;
}

input[type='text'] {
  font-size: 24px;
  font-family: poppins, sans-serif;
}
.search-bar {
  width: 600px;
  margin: 0 auto;
}
.cls-1 {
  fill: #fff;
  stroke: #707070;
}

.cls-2 {
  stroke: none;
}

.cls-3 {
  fill: none;
}
</style>
