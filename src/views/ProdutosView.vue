<template>
  <v-main>
    <CardProduto :produtos="produtos"/>
  </v-main>
</template>

<script>
  import CardProduto from '../components/CardProduto.vue'
  export default {
    name: 'ProdutoView',
    components:{
      CardProduto,
    },

    data(){
       return{
            produtos: []
       }
    },

    created(){
      fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
      .then(resultado => resultado.json())
      .then(json => {
        this.produtos = json;
      });
      
    }

  }
</script>

<style scope>
</style>
