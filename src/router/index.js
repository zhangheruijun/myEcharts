import Vue from 'vue'
import Router from 'vue-router'
import echartsRunInHole from '@/components/echarts/EchartsMapChRunInHole.vue'
Vue.use(Router);
export default new Router({
  mode:'history',
  routes:[
    {
      path:"/echartsRunInHole",
      name:'echartsRunInHole',
      component:echartsRunInHole
    }
  ]
});