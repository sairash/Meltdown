<template>
  <div class="mt-3 sm:mt-0 h-9 sm:h-8 flex flex-col justify-center sm:border-b-2 sm:border-0 px-4">
    <Flicking :options="{ moveType: 'freeScroll', bound: true }">
      <span class="button mr-2 text-sm font-semibold pt-1 capitalize cursor-pointer">Gym</span>
      <span class="button mr-2 text-sm font-semibold pt-1 capitalize cursor-pointer">Live</span>
      <span class="button mr-2  text-sm font-semibold pt-1 capitalize cursor-pointer">Sport</span>
      <span class="button mr-2  text-sm font-semibold pt-1 capitalize cursor-pointer">Events</span>
      <span class="button mr-2 text-sm font-semibold pt-1 capitalize cursor-pointer">Eat</span>
      <span class="button mr-2 text-sm font-semibold pt-1 capitalize cursor-pointer">Store</span>
      <span class="button mr-2 text-sm font-semibold pt-1 capitalize cursor-pointer">Sale</span>
      <span class="button mr-2 text-sm font-semibold pt-1 capitalize cursor-pointer">MeltDown</span>
      <span class="button  text-sm font-semibold pt-1 capitalize cursor-pointer">Care</span>
    </Flicking>
  </div>
</template>

<script>

export default {
  name: 'listCarousel',
  props: {
    msg: String
  },
}
</script>

