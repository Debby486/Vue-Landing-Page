<template>
<div>
  <section
      class="faq-header px-4 md:px-8 lg:px-12 xl:px-16 relative"
    >
      <div class="pt-8 relative xl:pt-14 pb-8 xl:pb-14">
        <div class="flex justify-center items-center flex-col ">
          <h2
            class="text-3xl xl:text-4xl custom-breakpoint:text-5xl text-center text-black font-bold drop-shadow-sm about-us"
            >Do you have any question</h2
          >
          <c-text
            class="text-base mt-5 md:text-xl xl:text-xl custom-breakpoint:text-2xl text-black max-w-3xl text-center"
            >Our support team is ready to help you, please contact with them</c-text
          >
        </div>
      </div>
    </section>
    <!-- FAQS -->
    <section
      class="faqs relative sm:pb-12 lg:pb-24 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center mt-14 lg:mt-8"
    >
      <div class="w-full md:w-4/5 xl:w-3/5">
        <single-faq
          v-for="(faq, index) in faqs"
          :key="index"
          :faq="faq"
        ></single-faq>
      </div>
    </section>
    </div>
</template>

<script>
export default {
 name:'QuestionSection',
 components: {
    SingleFaq: () => import('../components/single-faq/SingleFaq.vue')
  },
  data: () => ({
    faqs: [
      {
        question: 'How to contact with riders emergency ?',
        answer:
          'Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.'
      },
      {
        question: 'App installation failed, how to update system information?',
        answer:
          'Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects. '
      },
      {
        question: 'Website response taking time, how to improve?',
        answer:
          'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.'
      },
      {
        question: 'New update fixed all bug and issues',
        answer:
          'If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.'
      },
    ]
  })
}
</script>

<style>

</style>