<template>
  <v-container>
    <h1 class="text-h5 text-center mb-3 mt-5">Lojas Parceiras</h1>
    <div class="botoes-loja d-flex flex-column justify-center align-center container">
      <v-btn class="botoes"
        @click="delay"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
      >
        loja1</v-btn
      >
      <v-btn class="botoes"
        @click="delay"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
      >
        loja2</v-btn
      >
      <v-btn class="botoes"
        @click="delay"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
      >
        loja3</v-btn
      >
      <v-btn class="botoes"
        @click="delay"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
      >
        loja4</v-btn
      >
      <v-btn class="botoes"
        @click="delay"
        color="teal lighten-1"
        elevation="2"
        medium
        outlined
        rounded
      >
        loja5</v-btn
      >
    </div>
  </v-container>
</template>

<script>

</script>

<style scope>
	.botoes {
		width: 80vw;
		margin-bottom: 10%;
		
	}
	.container {
width: 100vw;
height: 80vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}

</style>