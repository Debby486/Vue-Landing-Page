<template>
  <div class="flex justify-center items-center flex-col mt-12">
    <div>
      <h2 class="text-3xl custom-breakpoint:text-5xl pb-12 leading-loose font-bold text-black">Leading companies trust us to develop most  <br class="hidden xl:block" /> powerful software with our talent team</h2>
    </div>
    <div>
      <p class="text-lg custom-breakpoint:text-2xl  leading-loose">Every email, web page, and social media post makes an impression on your <br class="hidden xl:block" /> customers. With our software you can be confident it's impression.</p>
    </div>
    <a href="#" class="text-xl py-8 chevron text-blue-100"> Explore More <font-awesome-icon icon="fa-solid fa-chevron-right"  />
       </a>
    <div class="relative">
      <img src="../assets/images/videoimage.png" alt="">
      <button class="absolute bottom-12 left-20 sm:bottom-16 sm:left-44 lg:bottom-20 lg:left-96 text-white text-2xl">
        <font-awesome-icon icon="fa-solid fa-circle-play"  /> Watch full video
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoftwareSection'
}
</script>

<style scoped>
.chevron{
  transition: 0.3s ease-in-out 0s;
}
</style>

