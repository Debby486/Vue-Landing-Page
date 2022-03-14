<template>
  <div
    class="single-faq flex items-center box px-6 py-5 w-full mb-10 cursor-pointer border-b-2 border-gray-300"
    :class="{ show }"
    @click="show = !show"
  >
    <div class="flex items-start flex-col">
      <div class="up relative z-30 flex gap-4 items-center justify-center">
        <div
          class="plus-minus-icon bg-secondary-100 rounded-xl px-2.5 py-2 flex items-center justify-center"
        >
          <svg
            v-show="show"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-show="!show"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="font-bold text-xl">{{
          faq.question
        }}</h3>
      </div>
      <transition name="slide">
        <div v-if="show" class="down mt-5 relative z-10">
          <h3 class="text-sm lg:text-lg leading-relaxed text-left pl-12">{{
            faq.answer
          }}</h3>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style scoped>
/* .single-faq {
  border-bottom: 2px solid #e8f6f7;
} */

/* .show {
  background: #fdfdff;
} */

.slide-enter-active {
  animation: slide 0.3s ease-in-out forwards;
}
.slide-leave-active {
  animation: slide 0.3s ease-in-out forwards alternate-reverse;
}

@keyframes slide {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
