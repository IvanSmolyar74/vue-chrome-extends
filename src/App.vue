<template>
  <v-app style="my-app">
    <v-theme-provider root>
      <Home />
    </v-theme-provider>
  </v-app>
</template>

<script>
import Home from "@/components/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>
