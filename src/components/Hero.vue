<template>
   <div class="logo fade-and-grow">
      <a target="_blank" href="https://github.com/bishwa-shah/vue-scroll-ease">
        <img src="../../assets/logo.png" alt="github-link-for-doc" />
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
</template>
<script setup lang="ts">
</script>

<style scoped>
@import "../assets/animation.css";
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
}

.heading .header-top h1 {
    margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 3rem;
  font-family: inherit;
  color: #fff;
}

.heading .header-top p {
    margin: 0;
  font-size: 1rem;
  text-align: center;
  font-family: inherit;
  color: #f9f9f9;
}

.heading .header-bottom p {
    font-weight: 500;
  font-size: 1.5rem;
  font-family: inherit;
  color: #f9f9f9;
}

.bottom {
    text-transform: capitalize;
  text-align: right;
  font-size: 0.9rem;
  color: #eee683;
  margin-bottom: 3rem;
}

.fade-and-grow {
    opacity: 0;
  transform: scale(0.6);
  animation: fadeAndGrow 1.2s ease-in-out forwards;
}
</style>