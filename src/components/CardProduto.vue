<template>
    <div class="card-produto">
        <div>
            <v-container class="my-5">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4 lg3 v-for="produto of produtos" :key="produto.id" >
                            <v-card class="ma-6" color="orange">
                               
                                <v-img :src="produto.imagem"/>
                    
                                <v-card-text>
                                   <div><strong>{{produto.nome}}</strong></div> 
                                   <div>{{produto.sabor}}</div>
                                    <div >Valor: {{produto.preco}}</div>
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
    name: 'CardProduto',
    props: {
        produtos:{
            type: Array,
            required: true
        }
    }

}
</script>
<style scoped>

</style>