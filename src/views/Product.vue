<template>
  <div class="w-full h-full flex flex-col sm:flex-col-reverse overflow-y-hidden  px-3 ">
    <div class="flex-1 overflow-y-auto">
      <div class="w-full flex justify-center">
        <div class="w-full max-w-8xl flex flex-col md:flex-row justify-start md:justify-between">
          <div class="w-full flex justify-center">
            <div class="w-full max-w-xs sm:max-w-sm md:max-w-md pt-0 xs:pt-3">
              <productView/>
            </div>
          </div>
          <div class="w-full p-3 flex justify-center">
            <div class="container text-center text-sm md:text-lg">
              <div class="font-semibold md:font-bold">ADER ERROR CUT & SEW CARDIGAN</div>
              <div class="font-light mt-2">BROWN</div>
              <div class="price mt-2">
                <span class="font-semibold md:font-bold">USD$625</span> / 
                <span>NPR74,473</span>
              </div>
              <div class="text-gray-500 font-semibold text-sm mt-2"> You will be charged in NPR. <router-link to="/details/price" class="text-black uppercase border-b-2 border-black border-dotted dark:text-white dark:border-white">Details</router-link> </div>
              <div class="w-full flex justify-center my-2 md:text-sm cursor-pointer mt-6">
                <div class="text-left">
                  <div class="text-xs text-gray-500 mb-2">Select your size:</div>
                <div class="flex">
                  <div class="p-2 border border-black border-r-0 hover:bg-gray-500 hover:text-white hover:border-gray-500">SMALL</div>
                  <div class="p-2 border border-black border-r-0 hover:bg-gray-500 hover:text-white hover:border-gray-500">MEDIUM</div>
                  <div class="p-2 border border-black border-r-0 hover:bg-gray-500 hover:text-white hover:border-gray-500">LARGE</div>
                  <div class="p-2 border border-black hover:bg-gray-500 hover:text-white hover:border-gray-500">X-LARGE</div>
                </div>
                </div>
              </div>
              <div class="text-sm mb-8"><span class="font-semibold">Order now</span> to receive <span class="text-meltprimary font-semibold">Mon 8 Nov - Tue 9 Nov</span></div>
              <span class="border border-black py-3 px-5 cursor-pointer hover:bg-gray-500 hover:text-white hover:border-gray-500">ADD TO CART</span>
              <div class="w-full flex justify-center my-2 md:text-sm mt-10">
                <div class="text-left w-full max-w-md">
                  <div class="flex">
                    <div class="text-sm px-2 font-bold" v-for="(item, index) in info" :key="index">
                      <div :class="activeTab===index ? 'text-meltprimary border-b-2 border-meltprimary':'cursor-pointer'" @click="activeTab = index">{{item.name}}</div>
                    </div>
                  </div>
                  <div class="text-sm px-2" v-for="(item, index) in info" :key="index">
                    <div v-show="activeTab===index">{{item.text}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between md:pt-3" >
      <div class="cursor-pointer" @click="goBack()"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" /></svg></div>
      <div class="flex">
        <div class="mr-1 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z" fill="currentColor"/></svg></div>
        <div class="mx-1 cursor-pointer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z" fill="currentColor" /></svg></div>
        <div class="ml-1 cursor-pointer"><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18.01L12.01 17.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"/></svg></div>
      </div>
    </div>
  </div>
</template>
<script>
import productView from "@/components/carousel/productView.vue";
export default {
  name: 'productVue',
  data: function(){
    return{
      activeTab: '0',
      info:{
        0:{
          name:'Discription',
          text:'ADER Error showcases its creative side with this cardigan by constructing it from a combination of different fabrics and textures.',
        },
        1:{
          name:'Sizing',
          text:'Model is 6ft 2in/1.88m with a 35”/89cm chest.',
        },
        2:{
          name:'Shipping',
          text:'USD$30.00 via FEDEX Priority Service Order now to receive Mon 8 Nov - Tue 9 Nov',
        },
      }
    }
  },
  components: {
    productView
  },
  methods: {
    goBack: function goBack() {
      window.history.back();
    }
  }
}
</script>
