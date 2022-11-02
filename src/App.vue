<template>
  <v-app>
    <!-- App bar -->
    <v-app-bar
      app
      color="#1e5397"
      dark
    >
    <!-- Home -->
    <router-link to="/Index">
      <v-btn icon title="Index" aria-label="Index">
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
    </router-link>
    <v-toolbar-title>Pokémon</v-toolbar-title>
    <v-spacer></v-spacer>

    </v-app-bar>

    <!-- Content -->

    <v-main class="main-content">
      <router-view/>
    </v-main>
  
  </v-app>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
.main-content {
  background-color: #e6e6e6;
}
</style>