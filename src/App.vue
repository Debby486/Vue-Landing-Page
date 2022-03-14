<template>
  <div id="app">
    <HeroSection/>
    <FeatureSection/>
    <SmartJackpots/>
    <QuestionSection/>
    <TheFooter/>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import SmartJackpots from './components/SmartJackpots.vue'
import QuestionSection from './components/QuestionSection.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    FeatureSection,
    SmartJackpots,
    QuestionSection,
    TheFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
