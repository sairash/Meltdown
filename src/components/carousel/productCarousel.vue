<template>
  <div class="mt-3 sm:mt-0 flex flex-col justify-start px-4">
    <Flicking :options="{ moveType: 'freeScroll', bound: true }">
    <productCarouselInnerMain v-for="item in list" :key="item" :image="item.image" :title="item.title" :color="item.color" :link="item.link" :price="item.price" :hoverImage="item.hoverImage" />
    </Flicking>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import productCarouselInnerMain from "@/components/carousel/carouselComponents/productCarouselInnerMain.vue";

export default {
  name: 'productCarousel',
  data() {
    return {
      list:{
        '1':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/0/1/01-11-2021_TH_CB-WMUP-CRW-CRL_1_1.jpg',
          'hoverImage':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/1/01-11-2021_ML_CB-WMUP-HDY-CRL_m9_1.jpg',
          'title':'Comme des Garçons Homme Plus Print Pattern Crew Knit',
          'color':'red',
          'price':'159',
          'link':'/product'
        },
        '2':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/7/27-10-2021_TH_HH-K101-001-BLK_m1_1.jpg',
          'hoverImage':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-10-2021_TH_HH-K101-001-BLK_5_1.jpg',
          'title':'Comme des Garçons Homme x New Balance Suede M5740',
          'color':'black',
          'price':'409',
          'link':'/product'
        },
        '3':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/0/1/01-11-2021_RC_PH-K503-051-WH_m1_1.jpg',
          'hoverImage':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/1/01-11-2021_RC_PH-K503-051-WH_2_1.jpg',
          'title':'Comme des Garçons Homme Plus Logo Sock',
          'color':'white',
          'price':'49',
          'link':'/product'
        },
        '4':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/0/1/01-11-2021_ML_PH-T031-051-1_1_1.jpg',
          'hoverImage':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/1/01-11-2021_ML_PH-T031-051-1_7_1.jpg',
          'title':'Comme des Garçons Homme Plus Whip Stitch Tee',
          'color':'black',
          'price':'399',
          'link':'/product'
        },
        '5':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/0/1/01-11-2021_JB_PH-T018-051_1_1.jpg',
          'hoverImage':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/1/01-11-2021_JB_PH-T018-051_4_1.jpg',
          'title':'COMME DES GARÇONS HOMME PLUS SHOES PRINT 2 TEE',
          'color':'white',
          'price':'235',
          'link':'/product'
        },
        '6':{
          'image':'https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/7/27-10-2021_SI_PH-B021-051_1_1.jpg',
          'hoverImage':'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/7/27-10-2021_SI_PH-B021-051_m9_1.jpg',
          'title':'Comme des Garçons Homme Plus Broad Striped Panel Shirt',
          'color':'black',
          'price':'479',
          'link':'/product'
        },
      }, 
    }
  },
  props: {
    msg: String
  },
  components: {
    Flicking,
    productCarouselInnerMain
  },
}
</script>

