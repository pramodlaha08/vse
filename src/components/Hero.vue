<template>
  <div class="hero_container">
    <div class="hero_container--link">
      <a target="_blank" href="https://github.com/bishwa-shah/vue-scroll-ease">
        <img class="hero_container--link--logo" src="https://i.postimg.cc/7ZwPmP4G/logo.png"
          alt="github-link-for-doc" />
      </a>
    </div>
    <div class="hero_container__heading">
      <div class="hero_container__heading--top header-top">
        <h1>Scroll To Animate</h1>
        <p>(Library)</p>
      </div>
      <div class="header-bottom hero_container__heading__bottom">
        <p class="element">Scroll & See Magic</p>
      </div>
    </div>
    <div class="hero_container__reveal">Explore the Beautiful library</div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/animation.css";

.hero_container {
  &--link {
    text-align: right;
    margin-top: 1rem;
    opacity: 0;
    transform: scale(0.6);
    animation: fadeAndGrow 1.2s ease-in-out forwards;
    animation-delay: 0.5s;

    &--logo {
      width: 4rem;
    }
  }

  &__heading {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 7rem auto 0 auto;
    justify-content: space-between;
    align-items: center;
    height: 66vh;
    color: #fff;
    @media (max-width: 768px) {
          margin-top: 11rem;
          height: 52vh;
          margin-bottom: 3rem;
        }

    &--top {
      opacity: 0;
      transform: scale(0.6);
      animation: fadeAndGrow 1.2s ease-in-out forwards;
      animation-delay: 0.5s;
      font-size: 2rem;

      h1 {
        margin: 0;
        padding: 0;
        font-weight: 800;
        font-size: 1.7em;
        font-family: inherit;

        @media (max-width: 768px) {
          font-size: 1.1em;
          text-wrap: nowrap;
        }
      }

      p {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 0.7em;
        font-family: inherit;

        @media (max-width: 768px) {
          font-size: 0.65em;
          text-wrap: nowrap;
        }
      }
    }

    &__bottom {
      p {
        font-weight: 500;
        font-size: 1.5rem;
        font-family: inherit;
        animation: revealAndBounce 1.2s ease-out forwards,
          bounceOnly 2s ease-in-out infinite 1.2s;
        text-wrap: nowrap;

        @media (max-width: 768px) {
          font-size: 1.3rem;
        }
      }
    }
  }

  &__reveal {
    text-transform: capitalize;
    text-align: right;
    font-size: 0.9rem;
    color: #eee683;
    margin-bottom: 3rem;
    animation: revealFromBottom 1.2s ease-out forwards;
    padding-right: 0.7rem;

    @media (max-width: 768px) {
          font-size: 0.75rem;
          text-wrap: nowrap;
        }
  }
}
</style>