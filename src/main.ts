import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
//import 'dotenv/config';

createApp(App)
.use(VueQueryPlugin)
.use(router)
.mount('#app')
