<template>
  <v-card-text>
    <v-row align="center">
      <v-col
        class="display-3 text-center font-weight-bold cyan--text text--darken-3"
        cols="6"
        >{{ data.temp.day | round() }}&deg;C</v-col
      >
      <v-col cols="6">
        <v-img
          :src="`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`"
          lazy-src="`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`"
          alt="Sunny image"
        ></v-img>
      </v-col>
      <v-col cols="6" class="text-center"
        >Ощущается как {{ data.feels_like.day | round() }}&deg;C</v-col
      >
      <v-col cols="6" class="text-center">{{
        data.weather[0].description | text()
      }}</v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: "CardWeather",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
