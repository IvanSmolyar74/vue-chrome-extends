import Vue from 'vue'
import Vuex from 'vuex'

const key = process.env.VUE_APP_KEY;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: {},
        daily: [],
        hourly: [],
    },
    mutations: {
        updateCity(state, responceweatherForecast) {
            state.city = responceweatherForecast.city;

        },
        updateOneCall(state, responceOneCall) {
            state.daily = [...responceOneCall.daily];
            state.hourly = [...responceOneCall.hourly];
        },
    },
    actions: {
        getWeather({ commit, state }) {

            navigator.geolocation.getCurrentPosition(async (position) => {

                let lat = position.coords.latitude;
                let long = position.coords.longitude;

                const weatherForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=ru`);
                const responceweatherForecast = await weatherForecast.json();

                const oneCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=ru`);
                const responceOneCall = await oneCall.json();
                console.log(position.coords.accuracy)
                commit('updateCity', responceweatherForecast);
                commit('updateOneCall', responceOneCall);
            }, (err) => {
                console.log(err)
            }, {
                enableHighAccuracy: true,
                timeout: 6000,
                maximumAge: Infinity
            })

        }
    },
    getters: {
        city: s => s.city,
        daily: s => s.daily,
        hourly: s => s.hourly
    },
    modules: {
    }
})
