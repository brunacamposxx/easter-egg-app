<template>
  <v-app>
    <v-app-bar class="d-flex align-center" app
      color="deep-orange lighten-1"
      dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      
     <v-spacer> <v-toolbar-title><span class="font-weight-bold">Easter Egg</span></v-toolbar-title> </v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list 
        nav
        dense
      >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/produtos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Produtos</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/lojas">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lojas Parceiras</v-list-item-title>
            </v-list-item>
          </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
       drawer: false,
      group: null,
    }
    
  },
};
</script>

<style>
#app {
  background-image: linear-gradient(#4d2600, #ffaa00);
}
</style>
