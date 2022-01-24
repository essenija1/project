import Vue from 'vue'
import VueRouter from 'vue-router'
//import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
     mode: 'history',
     routes: [
       {
        path: '/',
        component: Home,
       },
       {
         path: '/todos',
         component: () => 
         import("../views/Todos.vue") 
       }
     ]
})

//const routes = [
 // {
  //  path: '/',
  //  name: 'Home',
  //  component: Home, 
  
  //},
 // {
    
    //  path: '/todos',
    //  component: () => 
    //  import("../views/Todos.vue") 
  
  //}
//]

//const router = new Router({
//history: createWebHistory(process.env.BASE_URL),
 // router
//})


//export default VueRouter
