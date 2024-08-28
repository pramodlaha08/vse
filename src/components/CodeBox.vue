<template>
  <div class="box" v-scroll-ease="scrollEaseOptions">
    <pre class="styled-scrollbars">
      <code class="language-html">
        <slot></slot>
      </code>
    </pre>
    <div class="copy" @click="handleCopy">
      <p class="copied" v-if="copied">Copied!</p>
      <i class="fa-regular fa-copy"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useCopyCode } from "../composable/useCopyCode";

const { copied, copyCode } = useCopyCode();


const props = defineProps({
  scrollEaseOptions: {
    type: Object,
    required: true,
  },
});

const handleCopy = () => {
  const codeText = (document.querySelector("code") as HTMLElement)?.textContent;
  if (codeText) {
    copyCode(codeText);
  }
};
</script>

<style scoped>
.box {
  background-color: #fff;
  padding: 10px;
  width: 34%;
  height: 200px;
  border-radius: 5px;
  position: relative;
}

.copy {
  position: absolute;
  right: 40px;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  color: #008c8b;
  cursor: pointer;
  width: 3rem;
}

.copy p{
  font-size: 0.7rem;
}

.copy i{
  font-size: 1rem;
}
</style>
