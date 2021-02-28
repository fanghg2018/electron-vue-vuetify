<template>
  <div class="mt-8">
    <v-navigation-drawer permanent
                         v-model="drawer"
                         :mini-variant.sync="mini"
                         width="200">
      <v-list-item class="px-2 pt-2">
        <v-list-item-avatar>
          <v-img src="../assets/img/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon
               @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-list nav
              dense
              v-for="item in items"
              :key="item.title">
        <v-list-item link
                     :to="item.route">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </div>
</template>
<script>
export default {

  data: () => ({
    drawer: true,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
      { title: 'Projects', icon: 'mdi-image', route: 'projects' },
      { title: 'Team', icon: 'mdi-help-box', route: 'team' }
    ],
    mini: true
  })
}
</script>
