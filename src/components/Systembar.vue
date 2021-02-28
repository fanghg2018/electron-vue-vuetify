<template>

  <v-system-bar height="36"
                fixed
                app
                style="-webkit-app-region: drag;"
                class="pr-0 ">
    <v-img class="ml-2"
           max-height="25"
           max-width="25"
           src="../assets/img/logo.png"></v-img>
    <span class="ml-3">测试</span>

    <v-spacer></v-spacer>
    <v-btn style="-webkit-app-region: no-drag"
           color="#e0e0e0"
           v-ripple="false"
           tile
           depressed>
      <v-img max-height="12"
             max-width="12"
             src="../assets/img/c33.png"
             @click="minimize"
             ></v-img>
    </v-btn>
    <v-btn style="-webkit-app-region: no-drag"
           color="#e0e0e0"
           width="12"
           v-ripple="false"
           tile
           depressed>
      <v-img max-height="12"
             max-width="12"
             src="../assets/img/c44.png"
             @click="maximize"
             ></v-img>
    </v-btn>
    <v-btn style="-webkit-app-region: no-drag"
           color="#e0e0e0"
           width="12"
           v-ripple="false"
           tile
           depressed
           id="system-bar-close">
      <v-img max-height="12"
             max-width="12"
             src="../assets/img/c11.png"
             @click="close"
             ></v-img>
    </v-btn>

  </v-system-bar>

</template>

<script>
export default {
  name: 'systembar',

  data: () => ({
    drawer: null,
    // 是最大化
    isMaximized: false
  }),
  methods: {
    maximize () {
      if (this.$win.isMaximized()) {
        this.$win.unmaximize()
      } else {
        this.$win.maximize()
      }
    },
    minimize () {
      this.$win.minimize()
    },
    close () {
      this.$win.close()
    }
  }

}
</script>

<style lang="scss" >
#system-bar-close:hover {
  background-color: red !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 50px;
  padding: 0 16px;
}
</style>
