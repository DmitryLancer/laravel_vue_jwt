
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




];



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

createApp(Index)
    .use(router)
    .mount('#app')
