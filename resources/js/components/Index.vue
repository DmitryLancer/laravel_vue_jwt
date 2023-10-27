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
            </nav>

        </div>

        <router-view :key="$route.fullPath" />

    </div>
</template>

<script>
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
        }
    }
}
</script>

<style scoped>

</style>
