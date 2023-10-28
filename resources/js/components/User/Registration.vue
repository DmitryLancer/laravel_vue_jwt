<template>
    <div class="w-25">
        <input v-model="name" type="text" class="form-control mt-3 mb-3" placeholder="Name">
        <input v-model="email" type="email" class="form-control mt-3 mb-3" placeholder="Email">
        <input v-model="password" type="password" class="form-control mt-3 mb-3" placeholder="Password">
        <input v-model="password_confirmation" type="password" class="form-control mt-3 mb-3" placeholder="Confirm password">
        <div class="text-danger">{{ error }}</div>
        <input v-if="error" @click.prevent="store" type="submit" class="btn btn-primary">
    </div>
</template>

<script>
export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            error: null,
        }
    },

    mounted() {
        console.log(localStorage.getItem('access_token'));
    },

    methods: {
        store(){
            axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation})
            .then( res => {
                localStorage.setItem('access_token', res.data.access_token)
                this.$router.push({name: 'user.personal'})
            })
                .catch( error => {
                    this.error = error.response.data.error
                })
        }
    },
}
</script>

<style scoped>

</style>
