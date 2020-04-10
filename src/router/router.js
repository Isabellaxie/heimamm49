import VueRouter from 'vue-router'
import Vue from 'vue'

import login from '../view/login/login.vue'
<<<<<<< HEAD
import layout from '../view/home/layout.vue'
=======


>>>>>>> login

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

<<<<<<< HEAD
        {
            path: "/home",
            component: layout
        },

        // {
        //     path: "/heima_subject",
        //     component: heima_subject
=======
        // {
        //     path: "/home",
        //     component: layout
>>>>>>> login
        // },

    ]
})

export default router