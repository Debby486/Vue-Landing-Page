<template>
<div class="bg-secondary-500">
  <div class="container grid lg:grid-cols-2 grid-cols-1 py-16 mx-auto xl:px-40 px-2 gap-8">
    <!-- left-viewport -->
    <div class="wrapper grid grid-cols-2 sm:gap-12">
      <div class="grid gap-8 mb-8 mt-20 px-2 sm:px-0">
        <div class="box-1 bg-secondary-400 px-2 py-8 sm:py-28 sm:px-8 rounded-lg flex flex-col items-center">
          <h5 class="text-6xl font-bold text-blue-300">80K+</h5>
          <p class="text-xl">We have more customers</p>
        </div>
        <div class="box-2 bg-secondary-400 sm:py-28 px-8 rounded-lg flex flex-col items-center">
          <h5 class="text-6xl text-orange-200 font-bold">90+</h5>
          <p class="text-xl">Daily updated blog post maintain</p>
        </div>
      </div>
      <div class="grid">
        <div class="box-3 bg-secondary-400 py-28 px-8 rounded-lg flex flex-col items-center mb-12">
          <h5 class="text-6xl text-orange-500 font-bold">150+</h5>
          <p class="text-xl">Free online tutorials videos available</p>
        </div>
        <div class="box-4 bg-secondary-400 py-24 px-8 rounded-lg flex flex-col items-center">
          <h5 class="text-6xl text-secondary-100 font-bold">&3M</h5>
          <p class="text-xl">Job posted everyday`s with qualification</p></div>
      </div>
    </div>    
    <!-- right-viewport -->
    <div>
      <h5 class="text-6xl text-left font-bold leading-relaxed">Smart Jackpots <br class="hidden xl:block" />  that you may love this anytime & anywhere</h5>
      <p class="text-xl viewport lg:text-2xl text-left text-primary-100 custom-breakpoint:leading-loose mt-3 custom-breakpoint:mt-5 md:w-4/5 xl:w-full">Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
      <ul class="items-start flex flex-col px-4 py-4">
        <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
          <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-sm text-white" />
          Unlimited design possibility
        </li>
        <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
          <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-sm text-white" />
          Completely responsive features
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SmartJackpots'
}
</script>

<style scoped>
.wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
}
/* .box-1{

}
.box-2{
  
}
.box-3{
  
}
.box-4{
  
} */
</style>