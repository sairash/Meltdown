<template>
  <Flicking :options="{ circular: true }" :plugins="plugins">
    <bigCarouselInnerMain v-for="item in list" :key="item" :image="item.image" :title="item.title" :discription="item.discription" :link="item.link" />
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

import bigCarouselInnerMain from "@/components/carousel/carouselComponents/bigCarouselInnerMain.vue";


export default {
  name: 'bigCarousel',
  props: {
    msg: String
  },
  components: {
    bigCarouselInnerMain
  },
  data() {
    return {
      plugins: [
        new Arrow(), 
        new Pagination({ type: 'bullet' }),
        new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })
      ],
      list:{
        '1':{
          'image':'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/holiday-fw21-ss22-ch1-fleece-logo-men-lp-mh-large-d_tcm221-799845.jpg',
          'title':'Adidas for men',
          'discription':'Give the joy of sport this season with the help of our Gift Guide.',
          'link':'/men/adidas'
        },
        '2':{
          'image':'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/holiday-fw21-ss22-ch1-fleece-logo-women-lp-mh-large-d_tcm221-799847.jpg',
          'title':'Adidas for women',
          'discription':'Give the joy of sport this season with the help of our Gift Guide.',
          'link':'/women/adidas'
        },
        '3':{
          'image':'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw21-kids-hoodies-kglp-mh-d_tcm221-795218.jpg',
          'title':'Adidas for kids',
          'discription':'Give the joy of sport this season with the help of our Gift Guide.',
          'link':'/kid/adidas'
        },
        '4':{
          'image':'https://brand.assets.reebok.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/reebok_enUS/Images/21FW_Floatride-Cold-Weather-Running_FD_Masthead-Large_HP_DT_tcm274-801198.jpg',
          'title':'Reebok for women',
          'discription':'Give the joy of sport this season with the help of our Gift Guide.',
          'link':'/women/reebok'
        },
        '5':{
          'image':'https://brand.assets.reebok.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/reebok_enUS/Images/21SS_Kids-FTW_Masthead-Small_FD_DT_tcm274-665153.jpg',
          'title':'Reebok for kids',
          'discription':'Give the joy of sport this season with the help of our Gift Guide.',
          'link':'/kid/reebok'
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
  .flicking-pagination-bullet-active {
    background-color: #f5bc25;
  }
</style>