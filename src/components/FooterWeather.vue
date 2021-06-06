<template>
  <div>
    <v-row justify="center">
      <v-col class="grey--text caption" cols="3">
        <v-icon>mdi-weather-night</v-icon>
        {{ data.temp.night | round() }}&deg;C
      </v-col>
      <v-col class="grey--text caption" cols="3">
        <v-icon>mdi-weather-windy</v-icon>
        {{ data.wind_speed | round() }} km/h
      </v-col>
      <v-col class="grey--text caption" cols="3">
        <v-icon>mdi-weather-sunset-up</v-icon>
        {{ data.sunrise | date("time") }}
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="grey--text caption" cols="3">
        <v-icon>mdi-weather-sunny</v-icon>
        {{ data.temp.eve | round() }}&deg;C
      </v-col>
      <v-col class="grey--text caption" cols="3">
        <v-icon>mdi-weather-pouring</v-icon>
        {{ (data.pop * 100 || "0") | round() }} %
      </v-col>
      <v-col class="grey--text caption" cols="3">
        <v-icon>mdi-weather-sunset-down</v-icon>
        {{ data.sunset | date("time") }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FooterWeather",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
