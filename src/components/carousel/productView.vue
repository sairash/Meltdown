<template>
  <Flicking :options="{ circular: true }" :plugins="plugins">
    <productViewCarouselInnerMain v-for="item in list" :key="item" :image="item.image"/>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
      <div class="flicking-pagination"></div>
    </template>
  </Flicking>
</template>

<script>
import { Pagination, AutoPlay, Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";

import productViewCarouselInnerMain from "@/components/carousel/carouselComponents/productViewCarouselInnerMain.vue";


export default {
  name: 'productView',
  props: {
    msg: String
  },
  components: {
    productViewCarouselInnerMain
  },
  data() {
    return {
      plugins: [
        new Arrow(), 
        new Pagination({ type: 'fraction' }),
        new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })
      ],
      list:{
        '1':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-11-2021_SI_BKAFWGD08-BR_1_1.jpg',
        },
        '2':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-11-2021_SI_BKAFWGD08-BR_2_1.jpg',
        },
        '3':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-11-2021_SI_BKAFWGD08-BR_3_1.jpg',
        },
        '4':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-11-2021_SI_BKAFWGD08-BR_4_1.jpg',
        },
        '5':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-11-2021_SI_BKAFWGD08-BR_7_1.jpg',
        },
        '6':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-11-2021_SI_BKAFWGD08-BR_8_1.jpg',
        },
        '7':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/2/02-11-2021_SI_BKAFWGD08-BR_m9_1.jpg',
        },
      },
    }
  }
}
</script>

<style>
  .flicking-object:hover .title{
    text-decoration: underline;
  }
  .flicking-arrow-prev::before,
  .flicking-arrow-prev::after,
  .flicking-arrow-next::before,
  .flicking-arrow-next::after {
    background-color: #f5bc25;
  }
</style>