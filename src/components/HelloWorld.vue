<script setup lang="ts">
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
onMounted(() => {
  let copyBtns = document.querySelectorAll('.copy i');

  //This is a function to make copied text visible on click
  const visibleCopyText = (copyBtn) => {
    let copyText = copyBtn.previousElementSibling;
    copyText.style.opacity = '1';
    //This is a timeout to make the text invisible after 3 seconds
    setTimeout(() => {
      copyText.style.opacity = '0';
    }, 3000);
  }

  //This is to trigger elements on click and perform a task
  copyBtns.forEach((copyBtn, number) => {
    copyBtn.addEventListener('click', () => {
      console.log('Button clicked ', number);
      // visibleCopyText(copyBtn);

      //Here codes are to copy the code text when clicked
      let codeTag = copyBtn.closest('.box').querySelector('code');
      console.log(codeTag?.textContent);
      navigator.clipboard.writeText(codeTag.textContent)
        .then(() => {
          console.log('Code copied to clipboard');
          visibleCopyText(copyBtn);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  });
});



</script>

<template>
  <div class="background-img"></div>
  <div class="background"></div>
  <div class="" style="max-width:1800px;margin:0 auto;overflow:hidden;padding: 1rem;">
    <div class="logo fade-and-grow">
      <a target="_blank" href="https://github.com/bishwa-shah/vue-scroll-ease">
        <img src="../../assets/logo.png" alt="github-link-for-doc">
      </a>
    </div>
    <div class="heading">
      <div class="header-top fade-and-grow">
        <h1>Scroll To Animate</h1>
        <p>(Library)</p>
      </div>
      <div class="header-bottom">
        <p class="element">Scroll & See Magic</p>
      </div>
    </div>
    <div class="bottom reveal-from-bottom">Explore the Beautiful library</div>
    <div class="flex-wrapper" style="justify-content: flex-end;">
      <div class="box-1  box" v-scroll-ease="{ from: 200, rotate: 360, duration: 4, delay: 300 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 200, rotate: 360, duration: 4, delay: 300 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>

      </div>
    </div>
    <div class="" style="height:200px"></div>

    <div class="flex-wrapper">
      <div class="box-2 box" v-scroll-ease="{ from: 300, direction: 'right-bottom', duration: 2 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 300, direction: 'right-bottom', duration: 2 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="" style="height:200px"></div>
    <div class="flex-wrapper" style="justify-content: flex-end;">
      <div class="box-2 box" v-scroll-ease="{ from: 300, direction: 'left-bottom', duration: 5 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 300, direction: 'left-bottom', duration: 5 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="" style="height:200px"></div>
    <div class="flex-wrapper">
      <div class="box-3 box" v-scroll-ease="{ from: 300, direction: 'right-top', rotate: 30 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 300, direction: 'right-top', rotate: 30 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>

    <div class="flex-wrapper" style="justify-content: flex-end;">
      <div class="box-4 box" v-scroll-ease="{ from: 300, direction: 'left-bottom', rotate: -180, delay: 300 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 300, direction: 'left-bottom', rotate: -180, delay: 300 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="flex-wrapper">
      <div class="box-4 box" v-scroll-ease="{ from: 300, direction: 'left', rotate: -180, delay: 300 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 300, direction: 'left', rotate: -180, delay: 300 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="flex-wrapper" style="justify-content: flex-end;">
      <div class="box-4 box" v-scroll-ease="{ from: 500, direction: 'right', duration: 100 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 500, direction: 'right', duration: 100 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="flex-wrapper">
      <div class="box-4 box" v-scroll-ease="{ from: 300, direction: 'top', delay: 300, duration: 10 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 300, direction: 'top', delay: 300, duration: 10 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="flex-wrapper" style="justify-content: flex-end;">
      <div class="box-4 box" v-scroll-ease="{ from: 300, duration: 2 }">
        <pre class="styled-scrollbars"><code class="language-html">
&lt;div v-scroll-ease="{ from: 300, duration: 2 }"&gt;&lt;/div&gt;   
</code></pre>
        <div class="copy">
          <p>Copied!</p>
          <i class="fa-regular fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="" style="height:300px"></div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.background-img,
.background {
  margin: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: #007582d9;
  position: fixed;
  overflow: hidden;
  z-index: -1;
}

.background-img {
  background-image: url('../../assets/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
}

.logo {
  text-align: right;
  margin-top: 1rem;
}

.logo img {
  width: 4rem;
}

.heading {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 7rem auto 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 66vh;
  font-family: "Poppins", system-ui;
}

.heading .header-top h1 {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 3rem;
  font-family: inherit;
  color: #00360e;
}

.heading .header-top p {
  margin: 0;
  font-size: 1rem;
  text-align: center;
  font-family: inherit;
  color: #9cb0a4;
}

.heading .header-bottom p {
  font-weight: 500;
  font-size: 1.5rem;
  font-family: inherit;
  color: #9cb0a4;
}

.bottom {
  text-transform: capitalize;
  font-family: "Poppins", system-ui;
  text-align: right;
  font-size: 0.9rem;
  color: #eee683;
  margin-bottom: 3rem;
}

@keyframes fadeAndGrow {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes revealFromBottom {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes revealAndBounce {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }

  80% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    transform: translateY(-8px);
  }
}

@keyframes bounceOnly {

  0%,
  100% {
    transform: translateY(-8px);
  }

  50% {
    transform: translateY(0);
  }
}

.fade-and-grow {
  opacity: 0;
  transform: scale(0.6);
  animation: fadeAndGrow 1.2s ease-in-out forwards;
}

.reveal-from-bottom {
  animation: revealFromBottom 1.2s ease-out forwards;
}

.element {
  animation:
    revealAndBounce 1.2s ease-out forwards,
    bounceOnly 2s ease-in-out infinite 1.2s;
}

.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* Space between items */
  margin: 3rem;
}

.box {
  background-color: #fff;
  padding: 10px;
  width: 34%;
  height: 200px;
  border-radius: 5px;
  position: relative;
}

.box pre {
  background-color: #2f4858;
  height: 100%;
  width: 100%;
  border-radius: inherit;
}

pre {
  background-color: #1e1e1e;
  color: #dcdcdc;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}

code {
  display: block;
  /* Block display for proper formatting */
  white-space: pre;
  /* Preserve whitespace */
}

code[class*=language-],
pre[class*=language-] {
  text-shadow: none;
}

code[class*=language-],
pre[class*=language-] {
  margin: 0;
}

/* Scroll Bar Customization */
.styled-scrollbars {
  --scrollbar-foreground: #008c8b;
  --scrollbar-background: #33333300;
  scrollbar-color: var(--scrollbar-foreground) var(--scrollbar-background);

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-foreground);
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbar-background);
  }
}

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