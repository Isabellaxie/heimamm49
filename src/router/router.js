import VueRouter from 'vue-router'
import Vue from 'vue'
// import heima_user from '../components/heima_user'
import login from '../view/login/login.vue'



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        // {
        //     path: "/",
        //     component: heima_user
        // },
        {
            path: "/",
            component: login
        },

        // {
        //     path: "/home",
        //     component: layout
        // },

    ]
})

export default router