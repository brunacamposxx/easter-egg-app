<template>
  <div class="prod-detalhes">
    <h2 class="titulo">{{ ovosPascoa[0].nome }}</h2>
    <div class="imagem">
      <v-img
        class="imagem"
        :src="ovosPascoa[0].imagem"
        :alt="ovosPascoa[0].nome"
      ></v-img>
    </div>
    <h3 class="valor row">R$ {{ ovosPascoa[0].preco }}</h3>
    <div>
      <p class="texto-detalhe">
        Venha provar nosso delicioso {{ ovosPascoa[0].nome }}, seu irresistível
        sabor {{ ovosPascoa[0].sabor }} com certeza irá conquistar seu paladar e
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
      <h4>Nome: {{ ovosPascoa[0].local.nome }}</h4>
      <h4>Endereço: {{ ovosPascoa[0].local.endereco }}</h4>
      <h4>CEP: {{ ovosPascoa[0].local.cep }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoDetalhe",
  data() {
    return {
      ovosPascoa: [
        {
          id: 1,
          imagem:
            "https://todateen.com.br/wp-content/uploads/posts-astrallove/papobff/ovo-de-pascoa-ao-leite.jpg",
          local: {
            cep: "69098033",
            endereco: "Rua Taighum LLL, 566 - Paisagem Loud - Manaus - AM",
            id: 1,
            nome: "Posto Renoir",
          },
          nome: "Ovo delícias",
          preco: 16.8,
          sabor: "simples com chocolate ao leite",
        },
      ],
    };
  },
  //   created() {
  //     fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
  //       .then((resp) => resp.json())
  //       .then((json) => {
  //         this.ovosPascoa = json;
  //         console.log(this.ovosPascoa);
  //       });
  //   },
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