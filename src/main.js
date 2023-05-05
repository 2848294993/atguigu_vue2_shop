import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import Typenav from '@/components/Typenav/Typenav.vue'
import store from '@/store/index'

Vue.config.productionTip = false


Vue.component(Typenav.name, Typenav);
new Vue({
  router,//组件身上都挂载了$route和$router
  store,//组件上挂载了$store
  render: h => h(App),
}).$mount('#app')

