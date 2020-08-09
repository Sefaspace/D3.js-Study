import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/data-filter',
        name: 'DataFilter',
        component: () => import('../views/DataFilter')
    },
    {
        path: '/data-sort',
        name: 'DataSort',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/DataSort')
    },
    {
        path: '/linear-scale',
        name: 'LinearScale',
        component: () => import('../views/LinearScale')
    },
    {
        path: '/time-scale',
        name: 'TimeScale',
        component: () => import('../views/TimeScale')
    },
    {
        path: '/ordinal-scale',
        name: 'OrdinalScale',
        component: () => import('../views/OrdinalScale')
    },
    {
        path: '/string-interpolate',
        name: 'String',
        component: () => import('../views/StringInterpolate')
    },
    {
        path: '/color-interpolate',
        name: 'String',
        component: () => import('../views/ColorInterpolate')
    },
    {
        path: '/*',
        redirect: '/home'
    }
]

const router = new VueRouter({
    routes
})

export default router
