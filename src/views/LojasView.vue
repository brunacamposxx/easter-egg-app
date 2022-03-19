<template>
<div class="lojas">
        <div>
            <v-container class="my-5">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4 lg3 v-for="produto of produtos" :key="produto.local.id" >
                            <v-card class="ma-6" color="brown darken-4" dark>
                    
                                <v-card-text>
                                   <div class="title"><strong>{{produto.local.nome}}</strong></div> 
                                   <div class="subtitle-1">{{produto.local.endereco}}</div>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                        
            </v-container>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'LojasView',

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