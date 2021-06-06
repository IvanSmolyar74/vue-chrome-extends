<template>
  <v-theme-provider root>
    <v-app style="my-app">
      <Home />
    </v-app>
  </v-theme-provider>
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
