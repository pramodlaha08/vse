<template>
  <div class="code_box">
    <div class="code_box--box" v-scroll-ease="scrollEaseOptions">
      <pre class="code_box--code">
      <code class="code_box--text language-html">
        <slot></slot>
      </code>
       </pre>
      <div class="code_box__copy" @click="handleCopy">
        <p class="code_box--copy--text" v-if="copied">Copied!</p>
        <i class="fa-regular fa-copy"></i>
      </div>
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

<style scoped lang="scss">
.code_box {
  padding: 50px 0;
  max-width: 550px;
  min-width: 300px;
  width: 100%;
  &:nth-child(even) {
    margin-left: auto;
  }
  &--box {
    background-color: #fff;
    padding: 10px;
    width: 100%;
    height: 200px;
    border-radius: 5px;
    position: relative;
  }
  &--code {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  &--text {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
  &__copy {
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
    &--text {
      font-size: 0.7rem;
    }
    i {
      font-size: 1.2rem;
    }
  }
}
</style>
