
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



];



const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(Index)
    .use(router)
    .mount('#app')
