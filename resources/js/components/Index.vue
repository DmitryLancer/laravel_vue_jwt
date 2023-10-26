<template>
    <div>
        <div>
            <nav class="justify-content-sm-between">
                    <nav>
                        <router-link :to="{ name: 'fruit.index' }">List</router-link>
                    </nav>
                    <nav>
                        <router-link :to="{ name: 'user.login' }">Login</router-link>
                    </nav>
                    <nav>
                        <router-link :to="{ name: 'user.registration' }">Registration</router-link>
                    </nav>
                <nav>
                    <router-link :to="{ name: 'user.personal' }">Personal</router-link>
                </nav>
                </nav>

        </div>

        <router-view/>

    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
