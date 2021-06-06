<template>
  <div>
    <CardWeather :data="day" />
    <v-divider />
    <FooterWeather :data="day" />
  </div>
</template>

<script>
import CardWeather from "@/components/CardWeather";
import FooterWeather from "@/components/FooterWeather";

export default {
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  components: {
    CardWeather,
    FooterWeather,
  },
};
</script>
