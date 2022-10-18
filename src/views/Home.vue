<template>
    <div class="flex-for-card">
        <div v-for="post in getPosts" :key="post.id">
            <Card class="item" :post=post>
            </Card>
        </div>
    </div>


</template>

<script>
import { mapGetters } from "vuex";
import Card from '../components/Card.vue'
export default {
    components: {
        Card,

    },
    async created() {
        if (!this.getPosts) await this.$store.dispatch("fetchPostsAll");
    },
    computed: {
        ...mapGetters(["getPosts"]),
    },

}
</script>

<style>

</style>