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
    background-image: url(https://i.pinimg.com/736x/b3/58/2d/b3582de870bfb83b5be9ccf433c2acce.jpg);
}

.app-top-bar a {
  text-decoration: none;
}
</style>
