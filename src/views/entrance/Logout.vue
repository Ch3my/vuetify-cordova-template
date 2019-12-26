<template>
  <div>
    <div style="display:block; margin: 0 auto; width:85px">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #505050;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
<script>
// Elimina la base de datos persistente. Luego redirecciona al inicio de Session
// import { deleteDB } from "idb";
import { openDB } from "idb";
// import LayoutLogin from "@/views/layouts/LayoutLogin.vue";

export default {
  name: "Logout",
  data: () => {
    return {};
  },
  created() {
    this.logout();
    // Al cambiar el Layout se renderizaba 2 veces. Se desativa para evitar ese error
    // this.$emit("update:layout", LayoutLogin);
  },
  mounted() {},
  methods: {
    logout: async function() {
      const db = await openDB("serv_app");
      await db.clear("data");
      this.$router.push({ name: "login" });
    }
  }
};
</script>