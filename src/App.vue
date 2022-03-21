<template>
  <div id="app">
    <TheNavbar/>
    <HeroSection/>
    <FeatureSection/>
    <SmartJackpots/>
    <SoftwareSection/>
    <UsefulFeature/>
    <WidgetSection/>
    <DealSection/>
    <QuestionSection/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import SmartJackpots from './components/SmartJackpots.vue'
import SoftwareSection from './components/SoftwareSection.vue'
import UsefulFeature from './components/UsefulFeature.vue'
import WidgetSection from './components/WidgetSection.vue'
import DealSection from './components/DealSection.vue'
import QuestionSection from './components/QuestionSection.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    HeroSection,
    FeatureSection,
    SmartJackpots,
    SoftwareSection,
    UsefulFeature,
    WidgetSection,
    DealSection,
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
}
</style>
