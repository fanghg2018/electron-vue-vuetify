<template>
  <v-app class="app">
 <systembar/>
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
import Systembar from './components/Systembar.vue'
export default {
  components: { Navbar, Systembar }
}
</script>
<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
.main{
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
