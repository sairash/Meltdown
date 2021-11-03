<template>
  <div class="wrapper">
    <div class="flex flex-col-reverse w-full sm:flex-col">
      <listCarousel />
      <bigCarousel />
    </div>
    <div class="main w-full">
      <div class="p-4 pt-2 sm:pt-4 flex justify-between tracking-widest">
        <div class="text-xs sm:text-sm font-semibold">Latest Products</div>
        <router-link to="/product/men" class="text-xs sm:text-sm text-gray-500 hover:underline">View All</router-link>
      </div>
        <productCarousel />
        <productCarousel />
    </div>
  </div>
</template>
<script>
import bigCarousel from '@/components/carousel/bigCarousel.vue'
import listCarousel from '@/components/carousel/listCarousel.vue'
import productCarousel from '@/components/carousel/productCarousel.vue'
// import Flicking from "@egjs/vue3-flicking";

export default {
  name: 'Home',
  components: {
    bigCarousel,
    listCarousel,
    productCarousel
    // Flicking
  },
}
</script>
<style>
  *::-webkit-scrollbar-track
  {
    background-color: rgba(255, 255, 255, 0.0);
  }

  *::-webkit-scrollbar
  {
    width: 6px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.0);
  }

  *::-webkit-scrollbar-thumb
  {
    background-color: #8b8b8b;
    border-radius: 5px;
  }
</style>