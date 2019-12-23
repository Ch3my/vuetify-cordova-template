<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <v-card class="mx-auto" max-width="500" raised>
      <v-card-title>Welcome to our App</v-card-title>
      <v-container>
        <v-form ref="loginForm" @submit.prevent="handleParsingLoginForm">
          <v-text-field v-model="formData.userName" label="Nombre de Usuario" required></v-text-field>
          <v-text-field v-model="formData.password" label="Contraseña" required></v-text-field>
          <v-btn class="mr-4 primary">Ingresar</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>
<script>
// @ is an alias to /src
import LayoutDefault from "@/views/layouts/LayoutDefault.vue";

export default {
  name: "login",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  data() {
    return {
      formData: {}
    };
  },
  components: {},
  methods: {
    handleParsingLoginForm: function(){

    }
  }
};
</script>
