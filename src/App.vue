<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
   <div class="main">
     <navbar/>
    <v-main class="ma-8">
     <router-view/>
    </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
<style scoped>
.main{
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
