import './bootstrap';
import '../sass/app.scss';
import {createApp} from "vue";
import {createRouter, createWebHistory} from 'vue-router';
import Index from './components/Index.vue';


const routes = [
    {
        path: '/fruits',
        name: 'fruit.index',
        component: () => import('./components/Fruit/Index.vue')
    },
    {
        path: '/users/login',
        name: 'user.login',
        component: () => import('./components/User/Login.vue')
    },
    {
        path: '/users/registration',
        name: 'user.registration',
        component: () => import('./components/User/Registration.vue')
    },

    {
        path: '/users/personal',
        name: 'user.personal',
        component: () => import('./components/User/Personal.vue')
    },

    {
        path: '/:catchAll(.*)', component: () => import('./components/User/Personal.vue'),
        name: '404',
    },


];


const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {

    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({
                name: 'user_login'
            })
        }
    }

    if (to.name === 'user.login' && accessToken) {
        return next({
            name: 'user.personal'
        })
    }

    next()
})

export default router


createApp(Index)
    .use(router)
    .mount('#app')
