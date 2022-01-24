import router from './router'
//import Router from 'vue-router'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.devtools = false;



//Vue.use(Router);
//const router = new Router();

new Vue({
    render: h => h(App),
   router
}).$mount('#app')

//export default router

