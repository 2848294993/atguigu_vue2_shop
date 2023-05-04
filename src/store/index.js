import Vue from "vue";
import Vuex from "vuex";
import home from "./Home/home";
import search from "./Search/search";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    search
  }
})

