<script setup lang="ts">
import Main from "./components/Main.vue";
</script>

<template>
  <div class="background-img"></div>
  <div class="background"></div>
  <Main />
</template>
<style scoped>
.background-img,
.background {
  margin: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: -1;
}

.background-img {
  background-image: url('https://i.postimg.cc/sxWf0v1S/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.background {
  background-color: #824e0063;
}
</style>
