<template>
    <img :src="image" class="w-full h-auto" alt="">
</template>

<script>
export default {
  name: 'productViewCarouselInnerMain',
  props: {
    image: String,
  },
}
</script>