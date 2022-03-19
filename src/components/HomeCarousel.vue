<template>
  <div class="home-carousel">
    <v-carousel bordered cycle height="30vh">
      <v-carousel-item v-for="ovo of algunsOvos" :key="ovo.id">
        <v-img :src="ovo.imagem" :alt="ovo.nome"/>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeCarousel',
  props: {
    ovos: {
      type: Array,
      required: true
    }
  },
  computed: {
    algunsOvos() {
      // deep copy
      const algunsOvos = [ ...this.ovos ]

      return algunsOvos.filter(ovo => [6, 7, 10].includes(ovo.id))
    }
  }
}
</script>

<style scoped>

</style>
