<template>
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LayoutDefault from "@/views/layouts/LayoutDefault.vue";

export default {
  name: "home",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  components: {
    HelloWorld
  }
};
</script>
