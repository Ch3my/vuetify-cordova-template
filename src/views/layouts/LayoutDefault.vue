<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!-- dense was taken out from v-list -->
      <v-list>
        <template v-for="(menu, i) in testingMenu">
          <v-list-group v-if="menu.children.length" prepend-icon="mdi-account-circle" :key="i">
            <template v-slot:activator>
              <v-list-item-title>{{menu.text}}</v-list-item-title>
            </template>
            <template v-for="(child, j) in menu.children">
              <v-list-group v-if="child.grandChildren.length" no-action sub-group :key="j">
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{child.text}}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="(grandChildren, k) in child.grandChildren"
                  :key="k"
                  link
                  router
                  :to="grandChildren.route"
                >
                  <v-list-item-title>{{grandChildren.text}}</v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>{{grandChildren.icon}}</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
              <v-list-item v-else link :key="j" router :to="child.route">
                <v-list-item-icon>
                  <v-icon></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{child.text}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <v-list-item v-else link :key="i" router :to="menu.route">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{menu.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application Name</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <!-- Aqui viene slot. Donde se insertaran los componentes / otras funcionalidades de la pagina -->
      <slot />
    </v-content>

    <!-- <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    testingMenu: [
      {
        icon: "mdi-account",
        text: "Testing Menu",
        route: "",
        children: [
          {
            icon: "",
            text: "Have grandChildren",
            route: "",
            grandChildren: [{ icon: "", text: "Form", route: "/form" }]
          },
          {
            icon: "",
            text: "Geolocation",
            route: "/geolocation",
            grandChildren: []
          }
        ]
      },
      { icon: "", text: "Camera", route: "/camera", children: [] },
      { icon: "", text: "SplashScreen", route: "/splashscreen", children: [] }
    ]
  })
};
</script>