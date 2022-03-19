<template>
  <v-container>
    <HomeCarousel :produtos="produtos"/>
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
