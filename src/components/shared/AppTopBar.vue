<template>
  <v-app>
    <v-app-bar class="d-flex align-center" app
      color="brown darken-4"
      dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      
      <v-toolbar-title><span class="font-weight-bold">Easter Egg</span></v-toolbar-title>
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
        <v-list-item-group active-class="orange--text text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
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
                <v-icon>mdi-store</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lojas Parceiras</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/sobre">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
  </v-app>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      drawer: false
    }
  }
}
</script>
