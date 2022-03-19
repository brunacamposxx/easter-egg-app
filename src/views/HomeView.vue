<template>
  <v-container>
    <HomeCarousel :ovos="ovos"/>
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
        ovos: []
      }
    },
    created() {
      fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
      .then(res => res.json())
      .then(json => { this.ovos = json })
    }
  }
</script>

<style scope>

</style>
