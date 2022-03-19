<template>
  <v-container>
    <ProdutoDetalhe :produto="produto"/>
  </v-container>
</template>

<script>
  import ProdutoDetalhe from '../components/ProdutoDetalhe.vue'

  export default {
    name: 'ProdutoView',
    components:{
      ProdutoDetalhe,
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
    },
    computed: {
      produto() {
        return this.produtos.find(p => p.id === Number(this.$route.params.id))
      }
    }
  }
</script>

<style scope>

</style>
