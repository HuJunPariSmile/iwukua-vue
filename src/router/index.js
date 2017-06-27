import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/site/Index'
import Register from '@/components/site/Register'
import Login from '@/components/site/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }

    ]
})
