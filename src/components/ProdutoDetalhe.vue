<template>
  <div class="produto-detalhe">
    <h2 class="titulo">{{ produto.nome }}</h2>
    <div class="imagem">
      <v-img
        class="imagem"
        :src="produto.imagem"
        :alt="produto.nome"
      ></v-img>
    </div>
    <h3 class="valor row">R$ {{ produto.preco }}</h3>
    <div>
      <p class="texto-detalhe">
        Venha provar nosso delicioso {{ produto.nome }}, seu irresistível
        sabor {{ produto.sabor }} com certeza irá conquistar seu paladar e
        seu coração.
      </p>
    </div>
    <div class="localizacao">
      <h3>
        <v-icon>mdi-map-marker</v-icon>
        Localização:
      </h3>
    </div>
    <div class="endereco">
      <h4>Nome: {{ produto.local.nome }}</h4>
      <h4>Endereço: {{ produto.local.endereco }}</h4>
      <h4>CEP: {{ produto.local.cep }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdutoDetalhe',
  props: {
    produto: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.prod-detalhes {
  margin: 5px;
}
.titulo {
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 3px;
}
.imagem {
  border-radius: 5%;
  /* box-shadow: 2px 2px 2px rgb(209, 209, 209); */
  /* border: solid 1px rgb(199, 199, 199); */
  margin: 15px 0;
}
.valor {
  color: orange;
  font-weight: 500;
}
.texto-detalhe {
    margin: 10px;
    font-weight: 400;
}
.localizacao {
    margin-top: 18px;
    margin-bottom: 10px;
}
.endereco h4 {
    font-weight: 400;
    margin-left: 15px;
}
</style>