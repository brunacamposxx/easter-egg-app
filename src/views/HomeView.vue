<template>
  <v-container>
    <HomeCarousel :produtos="produtos"/>
    <v-card color="brown darken-4 " dark>
      <v-card-title>A páscoa é uma época muito especial para a maioria dos brasileiros e a tradição de presentear amigos e familiares com chocolates ganha um sabor diferente com a oferta de ovos de Páscoa caseiros.

O fechamento de lojas e shoppings em diversas cidades do país, por causa da pandemia, pode favorecer o pequeno comerciante, que buscou na venda de chocolates uma fonte de renda extra para diminuir os impactos da crise econômica.

Navegue por nosso app e conheça nossos produtos caseiros para deliciar você a a todos seus entes queridos.</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
  import HomeCarousel from '../components/HomeCarousel.vue'

  export default {
    name: 'HomeView',
    components: {
      HomeCarousel,
    },
    data() {
      return {
        produtos: []
      }
    },
    created() {
      fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
      .then(res => res.json())
      .then(json => { this.produtos = json })
    }
  }

</script>

<style scope>

</style>


