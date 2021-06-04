<template>
  <v-row justify="end">
    <v-list-item two-line>
      <v-list-item-content class="ml-2">
        <v-list-item-title class="headline">
          <v-icon>mdi-map-marker</v-icon>
          {{ city.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{
          date | date("datetime", false)
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-col
        align-self="start"
        justify="end"
        cols="auto"
        class="grey--text caption"
      >
        <v-icon>mdi-account-group</v-icon>
        {{ city.population | format() }}
      </v-col>
    </v-list-item>
  </v-row>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    date: new Date(),
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>