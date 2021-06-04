<template>
  <v-expansion-panels multipl min-width="400">
    <v-expansion-panel v-for="(hour,i) in formatingHourly" :key="i">
      <v-expansion-panel-header class="d-flex align-start justify-space-between pt-0 pb-0">
        <div d-flex flex-column>
          <v-row class="subtitle-2">{{ hour.dt | date('time') }}</v-row>
          <v-row
            class="caption"
            v-for="item in hour.weather"
            :key="item.id"
          >{{ item.description | text()}}</v-row>
        </div>
        <div class="d-flex align-center justify-end" v-for="item in hour.weather" :key="item.id">
          <div class="caption p-0" style="color:#03A9F4">{{ hour.pop * 100 }}%</div>
          <v-img
            :src="`http://openweathermap.org/img/wn/${item.icon}@2x.png`"
            alt="Sunny image"
            max-width="40"
          ></v-img>
          <div>
            <div class="caption">{{ hour.temp | round() }}&deg;C</div>
          </div>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-simple-table>
          <table>
            <tr class="caption">
              <td class="grey--text">Ветер</td>
              <td class="pl-4">{{ hour.wind_speed }} км.ч</td>
            </tr>
            <tr class="caption">
              <td class="grey--text">Влажность</td>
              <td class="pl-4">{{ hour.humidity }} %</td>
            </tr>
            <tr class="caption">
              <td class="grey--text">Вероятность дождя</td>
              <td class="pl-4">{{ hour.pop * 100 }} %</td>
            </tr>
            <tr class="caption">
              <td class="grey--text">Давление</td>
              <td class="pl-4">{{ hour.pressure}} мм.рт.ст</td>
            </tr>
          </table>
        </v-simple-table>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    items: [],
  }),
  computed: {
    ...mapGetters(["hourly"]),
    formatingHourly() {
      let arr = this.hourly.filter((d, i, ar) => i > 23 && i % 3 == 0);
      return arr;
    },
  },
};
</script>