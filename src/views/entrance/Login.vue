<template>
  <div>
    <!-- <v-spacer /> -->
    <LoginForm></LoginForm>
  </div>
</template>
<script>
// @ is an alias to /src
import LayoutLogin from "@/views/layouts/LayoutLogin.vue";
import LoginForm from "@/components/entrance/LoginForm.vue";

export default {
  name: "login",
  created() {
    this.$emit("update:layout", LayoutLogin);
  },
  data() {
    return {
      formData: {}
    };
  },
  components: {
    LoginForm
  },
  methods: {
    handleParsingLoginForm: function() {}
  }
};
</script>
