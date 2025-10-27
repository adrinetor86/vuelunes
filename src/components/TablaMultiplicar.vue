<template>
  <div>
    <h1>TABLA MULTIPLICAR</h1>
    <input type="number" v-model="numero"/>
    <button @click="generarTabla">Generar Tabla</button>
  </div>


  <div>

    <table>
      <thead>
      <tr>
        <th>Operacion</th>
        <th>Resultado</th>
      </tr>
      </thead>
      <tbody v-html="html">

      </tbody>
    </table>

    <table>
      <thead>
      <tr>
        <th>Operacion</th>
        <th>Resultado</th>
      </tr>
      </thead>
      <tbody v-if="numero !==0">
          <tr v-for="contador in 10" :key="contador">
            <td>
              {{numero +" * "+contador}}
            </td>
            <td>
              {{numero * contador}}
            </td>
          </tr>
      </tbody>
    </table>

    <table>
      <thead>
      <tr>
        <th>Operacion</th>
        <th>Resultado</th>
      </tr>
      </thead>

      <tbody v-if="numero !==0">
      <tr v-for="contador in 10" :key="contador">
        <td>{{$filters.getOperacion(numero,contador)}}</td>
        <td>{{$filters.getResultado(numero,contador)}}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>


export default {
  name:"TablaMultiplicar",

  methods:{
    generarTabla(){

      let aux="";

      for(let i=0;i<=10;i++){
        aux+="<tr>"
        aux+="<td>"+this.numero+"*"+ i+"</td>"
        aux+="<td>"+this.numero* i +"</td>"
        aux+="</tr>"
      }
      this.html=aux;

    }
  },
  data(){
    return{
      numero:0,
      tabla:"",
      html:"",
      arrTabla:[]
    }
  }
}
</script>

<style scoped>

</style>