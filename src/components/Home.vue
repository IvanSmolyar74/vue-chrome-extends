<template>
  <v-card class="mx-auto" min-width="400" height="100%">
    <v-tabs centered v-model="tab">
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
      <v-switch
        v-model="theme"
        @change="changeTheme"
        class="ml-auto mr-0"
      ></v-switch>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <CurrentCity :city="getCity" v-if="getCity" />
      <loader v-else />
      <v-divider />
      <v-tab-item v-for="item in items" :key="item.tab">
        <keep-alive>
          <component
            :is="item.content"
            :day="getDay(item.id)"
            v-if="getDay(item.id)"
          />
          <loader v-else />
        </keep-alive>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import CurrentWearher from "@/components/CurrentWeather";
import CurrentCity from "@/components/CurrentCity";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data: () => ({
    loading: true,
    tab: null,
    theme: false,
    items: [
      { id: "0", tab: "Сейчас", content: "CurrentWearher" },
      { id: "1", tab: "Завтра", content: "CurrentWearher" },
    ],
  }),
  computed: {
    ...mapGetters(["city", "daily"]),
    getCity() {
      return this.city;
    },
    getDay() {
      return (id) => this.daily[id];
    },
  },
  methods: {
    ...mapActions(["getWeather"]),
    changeTheme() {
      const currentTheme = this.theme ? "dark" : "light";
      this.$vuetify.theme.dark = this.theme;
      localStorage.setItem("theme", currentTheme);
    },
  },
  created() {
    this.getWeather();
  },
  mounted() {
    navigator.geolocation.watchPosition(this.getWeather);
  },
  components: {
    CurrentWearher,
    CurrentCity,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
