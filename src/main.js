import Vue from 'vue'
import App from './App.vue'
//导入element-ui插件
import ElementUI from 'element-ui';
// 导入 element-ui样式
import 'element-ui/lib/theme-chalk/index.css';

// 注册element-ui
Vue.use(ElementUI);
// import login from './view/login/login.vue'
// // 导入 vue-router
// import VueRouter from 'vue-router'
// //注册 vue-router
// Vue.use(VueRouter)
// // 实例化
// const router = new VueRouter({
//   //这里就是路由的配制项
//   routes: [
//     {
//       path: '/',
//       component: login

//     }
//   ]
// })
import router from './router/router.js'





Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
