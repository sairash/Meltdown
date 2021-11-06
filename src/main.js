import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import Flicking from "@egjs/vue3-flicking";
import { VueCookieNext } from 'vue-cookie-next'
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";


const app = createApp(App);
app.use(router);
app.use(VueCookieNext);
app.component("Flicking", Flicking);
app.mount('#app')


// set default config
VueCookieNext.config({ expire: Infinity })

var themeData = VueCookieNext.getCookie('theme');
document.documentElement.classList.add('dark')
if(themeData == null || themeData == 'light'){
    VueCookieNext.setCookie('theme', 'light')
    document.documentElement.classList.remove('dark')
}