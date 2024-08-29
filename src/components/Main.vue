<script setup lang="ts">
import { onMounted } from "vue";
import CodeBox from "./CodeBox.vue";
import Hero from "./Hero.vue";

const scrollOptions = [
  { from: 200},
  { from: 300, direction: "right"},
  { from: 300, direction: "left"},
  { from: 300, direction: "top" },
  { from: 300, direction: "left-top" },
  { from: 300, direction: "right-top" },
  { from: 300, direction: "left-bottom"},
  { from: 300, direction: "right-bottom"},
  { from: 300, direction: "left", rotate: 90 },
  { from: 300, direction: "right" ,delay: 300},
  { from: 300, duration: 2 },
  { from: 300, direction: "left", rotate: -90, delay: 300, duration: 2 },
];

</script>

<template>
  <div class="vse-main">
    <hero />

    <code-box
      v-for="(options, index) in scrollOptions"
      :key="index"
      :scrollEaseOptions="options"
    >
      &lt;div v-scroll-ease="{{ options}}"&gt;&lt;/div&gt;
    </code-box>
  </div>
</template>

<style scoped lang="scss">
.vse-main {
  max-width: 1450px;
  margin: 0 auto;
  overflow: hidden;
  padding:0 .4rem;
}
</style>