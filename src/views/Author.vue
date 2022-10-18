<template>
    <div class="Header p-3">
        <h1 class="text-primary">Author Info</h1>
    </div>
    <table class="table ">
        <tbody>
            <tr>
                <th scope="col">Name</th>
                <td>{{user.name}}</td>
            </tr>
            <tr>
                <th scope="col">Email</th>
                <td>{{user.email}}</td>
            </tr>
            <tr>
                <th scope="col">Phone</th>
                <td>{{user.phone}}</td>
            </tr>

        </tbody>
    </table>
    <div class="Header p-3">
        <h1 class="text-primary text-center">Other Posts Made By This Author!</h1>
    </div>
    <div class="flex-for-card">
        <div v-for="post in posts" :key="post.id">
            <Card class="item" :post=post>
            </Card>
        </div>
    </div>

</template>

<script>
import Card from "../components/Card.vue";
export default {
    data() {
        return {
            user: {},
            posts: null,
        };
    },
    components: {
        Card,
    },
    async created() {

        await Promise.all([
            this.$store.dispatch("fetchUser", this.$route.params.id),
            this.$store.dispatch("fetchPostByUser", this.$route.params.id),
        ]).then((response) => {
            console.log(response)
            this.user = response[0];
            this.posts = response[1];
            console.log(this.posts)
        });
    },
};
</script>

