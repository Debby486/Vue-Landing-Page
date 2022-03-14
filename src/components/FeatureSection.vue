<template>
  <div class="container mx-auto px-4 md:px-40 mt-36">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-xl font-bold md:text-5xl text-secondary-300 py-8">Go Beyond Unlimited Features</h2>
      <p class="custom-breakpoint:text-2xl leading-relaxed tracking-wider text-secondary-200">Focus only on the meaning, we take care of the design. As soon as the meeting <br> end you can export in one click into your preferred format.</p>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-4 ml-32 xl:ml-0 content-center xl:content-start  gap-8 mt-20">
      <div v-for="x in features" :key="x.id" class="flex flex-col xl:justify-start xl:items-start sm:justify-center items-center">
        <img src="../assets/images/features/bulb.png" alt="" class="h-14 w-14 md:h-32 md:w-32 bg-secondary-400 rounded-full drop-shadow-xl md:p-6"/>
        <h3 class="text-2xl text-secondary-200 text-left py-8 font-bold tracking-wider">{{x.text}}</h3>
        <h5 class="custom-breakpoint:text-2xl leading-loose tracking-wider text-left  text-secondary-200">{{x.description}}</h5>
      </div>
      <!-- ... -->
  </div>
  </div>
</template>

<script>
export default {
  name:'FeatureSection',
  data: () => ({
    award: '../assets/images/features/award.png',
    bulb: '../assets/images/bulb.png',
    features:[ 
      {
        id: 1,
        text: 'Fast Performance',
        description: 'See where you’re making and spending money in real.',
        image: 'award.png'
      },
      {
        id: 2,
        text: 'Best Strategy',
        description: 'Send money with three clicks by wire, check, or ACH.'
      },
      {
        id: 3,
        text: 'Boost Performance',
        description: 'Choose the right tone and fast formality level.'
      },
      {
        id: 4,
        text: 'Award history',
        description: 'Keep secure with fluent 2-factor authentication full activity.'
      }
    ]
  }),
  methods: {
    imageUrl (name) {
      return `../assets/images/features/${name}`
    }
  }
}
</script>

<style>

</style>