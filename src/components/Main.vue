<script setup lang="ts">
import { onMounted } from "vue";
import CodeBox from "./CodeBox.vue";
import Hero from "./Hero.vue"
</script>

<template>
  <div class="background-img"></div>
  <div class="background"></div>
  <div
    class=""
    style="max-width: 1800px; margin: 0 auto; overflow: hidden; padding: 1rem"
  >
    <hero />

    <div class="flex-wrapper" style="justify-content: flex-end">
      <code-box :scrollEaseOptions="{ from: 200, rotate: 360, duration: 4 }">
        &lt;div v-scroll-ease="{ from: 200, rotate: 360, duration: 4, delay: 300
        }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="" style="height: 200px"></div>

    <div class="flex-wrapper">
      <code-box
        :scrollEaseOptions="{
          from: 300,
          direction: 'right-bottom',
          duration: 2,
        }"
      >
        &lt;div v-scroll-ease="{ from: 300, direction: 'right-bottom', duration:
        2 }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="" style="height: 200px"></div>

    <div class="flex-wrapper" style="justify-content: flex-end">
      <code-box
        :scrollEaseOptions="{
          from: 300,
          direction: 'left-bottom',
          duration: 5,
        }"
      >
        &lt;div v-scroll-ease="{ from: 300, direction: 'left-bottom', duration:
        5 }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="" style="height: 200px"></div>
    <div class="flex-wrapper">
      <code-box
        :scrollEaseOptions="{
          from: 300,
          direction: 'right-top',
          rotate: 30,
        }"
      >
        &lt;div v-scroll-ease="{ from: 300, direction: 'right-top', rotate: 30
        }"&gt;&lt;/div&gt;
      </code-box>
    </div>

    <div class="flex-wrapper" style="justify-content: flex-end">
      <code-box
        :scrollEaseOptions="{
          from: 300,
          direction: 'left-bottom',
          rotate: -180,
          delay: 300,
        }"
      >
        &lt;div v-scroll-ease="{ from: 300, direction: 'left-bottom', rotate:
        -180, delay: 300 }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="flex-wrapper">
      <code-box
        :scrollEaseOptions="{
          from: 300,
          direction: 'left',
          rotate: -180,
          delay: 300,
        }"
      >
        &lt;div v-scroll-ease="{ from: 300, direction: 'left', rotate: -180,
        delay: 300 }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="flex-wrapper" style="justify-content: flex-end">
      <code-box
        :scrollEaseOptions="{
          from: 500,
          direction: 'right',
        }"
      >
        &lt;div v-scroll-ease="{ from: 500, direction: 'right'
        }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="flex-wrapper">
      <code-box
        :scrollEaseOptions="{
          from: 300,
          direction: 'top',
          delay: 300,
          duration: 5,
        }"
      >
        &lt;div v-scroll-ease="{ from: 300, direction: 'top', delay: 300,
        duration: 10 }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="flex-wrapper" style="justify-content: flex-end">
      <code-box
        :scrollEaseOptions="{
          from: 300,
          duration: 2,
        }"
      >
        &lt;div v-scroll-ease="{ from: 300, duration: 2 }"&gt;&lt;/div&gt;
      </code-box>
    </div>
    <div class="" style="height: 300px"></div>
  </div>
</template>

<style scoped>
.background-img,
.background {
  margin: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: #824e0063;
  position: fixed;
  overflow: hidden;
  z-index: -1;
}

.background-img {
  background-image: url("../../assets/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
}

.reveal-from-bottom {
  animation: revealFromBottom 1.2s ease-out forwards;
}

.element {
  animation: revealAndBounce 1.2s ease-out forwards,
    bounceOnly 2s ease-in-out infinite 1.2s;
}

.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* Space between items */
  margin: 3rem;
}
/* Scroll Bar Customization */


.box .copy {
  position: absolute;
  right: 30px;
  bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #008c8b;
}

.box .copy p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  opacity: 0;
}

.box .copy i {
  color: #008c8b;
  font-size: 1.2rem;
  cursor: pointer;
}

/* .box-1 {

  border-radius: 1rem;
} */

/* .box-2 {
  width: 300px;
  height: 150px;
  background: #008c8b;
  border-radius: 1rem;
} */

/* .box-3 {
  width: 300px;
  height: 150px;
  background: #41b883;
}

.box-4 {
  width: 300px;
  height: 150px;
  background: #008c8b;
  border-radius: 1rem;
} */
</style>