<template>
    <router-link  :to="link" class="w-screen h-94 md:h-110 bg-cover bg-center italic text-white flicking-object" :style="'background-image: url('+image+')'">
      <div class="h-full w-full flex flex-col md:block md:py-20 md:text-6xl justify-center px-16 font-bold text-center tracking-widest uppercase md:text-left text-3xl">
        <div> 
          <div class="my-0 md:my-2 title"> {{title}} </div>
          <div class="not-itallic no-underline hidden sm:block text-base max-w-xl">{{discription}}</div>
          <div class="w-full flex justify-center md:block"><div class="w-16 h-16"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg></div></div>
          <!-- <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Visit</button> -->
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: 'bigCarouselInnerMain',
  props: {
    image: String,
    title: String,
    discription: String,
    link: String,
  },
}
</script>