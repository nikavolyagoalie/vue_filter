import { createStore } from 'vuex'
import axios from 'axios'
const ESTATE_URL = 'http://widget-server.m2lab.ru/getVillage/4985be39-cbea-4393-beef-2115868487ef'

export default createStore({
  state: {
    auth_key: '',
    type1: [],
    type2: [],
    pricesArea: [],
  },

  getters: {
    min(state) {
      if (state.pricesArea.length > 0) {
        return Math.min(...state.pricesArea)
      }
      
    },

    max(state) {
      if (state.pricesArea.length > 0) {
        return Math.max(...state.pricesArea)
      }
    },
  },

  mutations: {
    setType1(state, payload) {
      state.type1 = payload
    },

    setType2(state, payload) {
      state.type2 = payload
    },

    setPricesArea(state, payload) {
      state.pricesArea = payload
    },
  },

  actions: {
    async fetchInfo({ commit }) {
      try {
        const res = await axios.get(ESTATE_URL)
        
        let data = res.data

        let prices = data[0]["price"].split(',').map(item => +item)
        commit('setPricesArea', prices)

        let rooms = data[0]["rooms"].split(',')
        commit('setType2', rooms)

        let realEstateTypes = data[0]["realEstateTypes"].split(',')
        commit('setType1', realEstateTypes)

      } catch (e) {
        console.log(e)
      }
    },
  }
})
