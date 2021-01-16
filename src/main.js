import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import fwflv from "fwflv";
import "fwflv/lib/fwflv.css";
import echarts from 'echarts'
import 'echarts/map/js/china'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = Axios
Vue.use(fwflv);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
