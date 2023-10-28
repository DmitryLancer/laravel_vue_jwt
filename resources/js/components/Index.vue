<template>
    <div>
        <div>
            <nav class="justify-content-sm-between">
                <nav>
                    <router-link :to="{ name: 'fruit.index' }">List</router-link>
                </nav>
                <nav>
                    <router-link v-if="!accessToken" :to="{ name: 'user.login' }">Login</router-link>
                </nav>
                <nav>
                    <router-link v-if="!accessToken" :to="{ name: 'user.registration' }">Registration</router-link>
                </nav>
                <nav>
                    <router-link v-if="accessToken" :to="{ name: 'user.personal' }">Personal</router-link>
                </nav>
                <a href="" v-if="accessToken" @click.prevent="logout">Logout</a>
            </nav>

        </div>

        <router-view :key="$route.fullPath"/>

    </div>
</template>

<script>


// import api from "../api";
import axios from "axios";


export default {
    name: "Index",

    data() {
        return {
            accessToken: null,
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    },


    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },

        logout() {
            axios.post('/api/auth/logout')
            .then(res => {
                localStorage.removeItem('access_token');
                this.$router.push({name: 'user.login'})
            })
        },
    }
}
</script>

<style scoped>

</style>
