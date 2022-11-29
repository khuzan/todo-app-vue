<template>
  <v-app id="app">
    <TheNavbar></TheNavbar>
    <v-main class="mx-4">
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  name: 'App',
  components: {
    TheNavbar
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
#app {
  background-color: #f5f5f5;
}
</style>
