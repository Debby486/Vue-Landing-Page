<template>
  <div class="mx-auto px-4 xl:px-40 mt-4">
    <div>
      <h2 class="text-3xl custom-breakpoint:text-5xl pb-12 leading-loose font-bold text-black">What deal suit you perfect</h2>
    </div>
    <div>
      <p class="text-lg custom-breakpoint:text-2xl  leading-loose">Focus only on the meaning, we take care of the design. As soon as the meeting <br class="hidden xl:block" /> end you can export in one click into your preferred format.</p>
    </div>
    <div class="flex justify-center gap-x-4 pt-6 mx-auto ">
      <div class="bg-secondary-500 flex rounded-md py-4 px-4">
        <div class="bg-white p-2">
        <h5 class="text-xl">Monthly Plan</h5>
      </div>
      <div class="p-2">
        <h5 class="text-xl">Annual Plan</h5>
      </div>
      </div>
      
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 py-12 sm:px-8 lg:px-32">
      <div class="border rounded-lg flex flex-col pl-2 sm:px-4 lg:px-8 py-12">
        <h3 class="text-left text-xl font-bold py-4 xl:pt-8">Free Plan</h3>
        <p class="text-left text-lg">For Small teams or office</p>
        <ul class="items-start flex flex-col px-4 py-4">
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Ultimate access to all course, exercises and assessments
          </li>
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Free access for all kind of exercise corrections with downloads.
          </li>
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Total assessment corrections with free download access system
          </li>
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Unlimited download of courses on the mobile app contents
          </li>
           <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Download and print courses and exercises in PDF
          </li>
        </ul>
        <div>
          <button class="button rounded-md bg-orange-50 hover:bg-orange-100 hover:text-white text-lg font-bold text-orange-400 border-none mt-8 py-4 px-4">Start Free Trial</button>
        </div>
      </div>
      <div class="border-2 border-secondary-100 rounded-lg flex flex-col px-8 pt-4 pb-12">
        <div class="left border rounded-lg px-2 py-2 bg-orange-100 xl:mr-48 ml-4">
          <h5 class="text-white xl:text-md">Recommended</h5>
        </div>
        <div class="flex justify-between">
          <div>
            <h3 class="text-left text-xl font-bold py-4">Premium</h3>
            <p class="text-left text-lg">For startup enterprise</p>
          </div>
          <div>
            <p class="text-left text-xl py-4">Starting from</p>
            <p class="text-left text-xl text-secondary-100">1070/mo</p>
          </div>
        </div>
        
        <ul class="items-start flex flex-col px-4 py-4">
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Ultimate access to all course, exercises and assessments
          </li>
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Free access for all kind of exercise corrections with downloads.
          </li>
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Total assessment corrections with free download access system
          </li>
          <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Unlimited download of courses on the mobile app contents
          </li>
           <li class="flex text-xl text-left leading-snug py-4 gap-x-4">
            <font-awesome-icon icon="fa-solid fa-check" class="bg-secondary-100 rounded-full p-2 text-white" />
            Download and print courses and exercises in PDF
          </li>
        </ul>
        <div>
          <button class="button rounded-md bg-orange-50 hover:bg-orange-100 hover:text-white text-lg font-bold text-orange-400 border-none mt-8 py-4 px-4">Subscribe Now</button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
name:'DealSection'
}
</script>

<style>

</style>