import {createRouter, createWebHistory} from "vue-router";
import CollatzComponent from "@/components/CollatzComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import TablaMultiplicar from "@/components/TablaMultiplicar.vue";

var rutas=[
     {path:'/',component:HomeComponent},
     {path:'/collatz',component:CollatzComponent},
     {path:"/tablamultiplicar",component: TablaMultiplicar}
 ]

var routes= createRouter({
    history:createWebHistory(),
    routes:rutas,
})


export default routes