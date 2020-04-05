// 抽离路由
import Vue from 'vue'
//子组件
import login from '@/view/login/login.vue'
// 导入 vue-router
import VueRouter from 'vue-router'
//注册 vue-router
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
    //这里就是路由的配制项
    routes: [
        {
            path: '/',
            component: login

        }
    ]
})
export default router