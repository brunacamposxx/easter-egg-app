<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import AppTopBar from './components/shared/AppTopBar.vue'

export default {
  name: 'App',
  components:{
    AppTopBar
  }
}

</script>

<style>
#app {
  background-image: linear-gradient(#4d2600, #ffaa00);
}

.app-top-bar a {
  text-decoration: none;
}
</style>
