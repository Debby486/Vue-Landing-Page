<template>
  <div class="container grid grid-cols-1 md:grid-cols-2 mx-auto pt-16 lg:gap-20 lg:px-40 px-4">
    <!-- left-viewport -->
    <div class="flex flex-col">
      <h2 class="text-3xl lg:text-5xl viewport mb-4 text-left text-primary-100 font-bold custom-breakpoint:leading-snug tracking-wide ">Professional <br class="hidden xl:block" /> Communication for <br class="hidden xl:block" />Your Team</h2>
      <p class="text-xl viewport lg:text-xl text-left text-primary-100 custom-breakpoint:leading-loose mt-3 custom-breakpoint:mt-5 md:w-4/5 xl:w-full">
        Get your blood tests delivered at let home collect<br class="hidden xl:block" /> sample from the victory of the managements that <br class="hidden xl:block" /> supplies best design system guidelines ever.
      </p>
      <div class="flex flex-start">
        <button class="button rounded-md bg-secondary-100 text-2xl font-bold text-white border-none mt-8 py-4 px-8">Explore Now</button>
      </div>
      <div class="flex gap-x-4 lg:gap-x-8 mt-8 h-9">
        <img src="../assets/images/paypal.png" alt="">
        <img src="../assets/images/google.png" alt="">
        <img src="../assets/images/dropbox.png" alt="">
      </div>
    </div>
    <!-- right-viewport -->
    <div>
      <img class="object-cover h-full" src="../assets/images/heropicture.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'HeroSection'
}
</script>

<style>
/* .viewport{
  line-height: 86px;
  margin-top: 3rem;
  font-size: 64px;
}
.button{
  transition: 0.3s ease-in-out 0s;
} */
</style>