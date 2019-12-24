<template>
  <v-app id="inspire">
    <v-content class>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4" class="login-layout-margin-left">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<style>
@media (max-width: 600px) {
  .login-layout-margin-left {
    margin-left: 5%;
  }
}
</style>
<script>
export default {
  props: {
    source: String
  }
};
</script>