import { createApp } from 'vue'
import App from './App.vue'
import router from "@/Router";

var app =createApp(App)

app.config.globalProperties.$filters={
    comprobarNumero(numero){

        if(numero % 2 ===0){
            return "<span style='color:green'>"+numero+"</span>"
        }else{
            return "<span style='color:red'>"+numero+"</span>"
        }

    },
    getOperacion(numero,multi){
        return numero +" * "+ multi
    },
    getResultado(numero,multi){
        return numero * multi
    }
}
app.use(router).mount('#app')
