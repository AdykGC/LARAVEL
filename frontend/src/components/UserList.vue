<template>
    <div>
        <h2>Users</h2>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
        <p v-else>Loading users...</p>
    </div>
</template>

<script>
    import apiClient from "../http-common.js"

    export default {
        name: "UserList",
        data() {
            return {
                users: [],
            }
        },
        async mounted() {
            try {
                const response = await apiClient.get("/users")
                this.users = response.data
            } catch (error) {
                console.error("API Error:", error)
            }
        },
    }
</script>
