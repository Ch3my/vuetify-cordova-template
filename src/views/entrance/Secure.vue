<template>
  <div>
    <div class="my-2">
      <v-btn color="warning" dark @click="sendRequest">Normal Button</v-btn>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    sendRequest: function() {
      axios
        .get("https://zenitx.loginto.me:1337/api/v1/secure")
        // .then(response => {
        //   // console.log(response);
        // });
    }
  }
};
</script>