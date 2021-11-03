<template>
    <router-link  :to="link" class="product w-28 sm:w-40 md:w-56 p-2">
        <img :src="image" class="w-full img-non-hover">
        <img :src="hoverImage" class="w-full img-hover">
        <div class="text-center w-full text-xs font-semibold sm:text-sm">
          <div class="">{{title}}</div>
          <div class="text-gray-500 font-normal">{{color}}</div>
          <div class="font-normal">${{price}}</div>
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'productCarouselInnerMain',
  props: {
    image: String,
    hoverImage: String,
    title: String,
    color: String,
    price: String,
    link: String,
  },
}
</script>
<style>
.product .img-non-hover{
    display: block;
  }
  .product:hover .img-non-hover{
    display: none;
  }
  .product .img-hover{
    display: none;
  }
  .product:hover .img-hover{
    display: block;
  }
</style>