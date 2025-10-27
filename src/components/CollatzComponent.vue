<template>
  <div>
    <h1>Collatz</h1>

    <h2>{{ numero }}</h2>
    <input type="number" v-model="numero">
    <button @click="realizarCollatz()">Collatz</button>

        <ul>
          <li v-for="num of arrNumeros" :key="num" v-html="$filters.comprobarNumero(num)"></li>
        </ul>

<!--    <ul v-html="mostrarCollatz">

    </ul>-->
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  computed: {
    mostrarCollatz() {
      var data = [];
      var i = 0;
      var numCollatz = ""
      for (var numero of this.arrNumeros) {

        if (this.$filters.comprobarNumero(numero)) {
          numCollatz = "<li style='color:green'>" + numero + "</li>";
        } else {
          numCollatz = "<li style='color:red'>" + numero + "</li>";
        }
        console.log(data)
        data[i] = numCollatz;
        i++;
      }
      return data;
    }
  },
  data() {
    return {
      numero: -1,
      arrNumeros: []
    }
  },
  methods: {
    realizarCollatz() {
      this.arrNumeros = []
      while (this.numero !== 1) {

        if (this.numero % 2 === 0) {
          console.log("ENTRA PAR")
          this.numero = this.numero / 2
        } else {
          console.log("ENTRA IMPAR")
          this.numero = (this.numero * 3) + 1
        }
        this.arrNumeros.push(this.numero)
        console.log(this.arrNumeros)

      }
    }
  }
}
</script>

<style scoped>

</style>