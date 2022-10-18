<template>
    <PostDetail :title="post.title" :body="post.body" :user="user" />
    <CommentContainer :comments="comments" />
</template>

<script>
import PostDetail from '../components/PostDetail.vue'
import CommentContainer from '../components/CommentContainer.vue'

export default {
    components: {
        PostDetail,
        CommentContainer
    },

    data() {
        return {
            post: {},
            user: null,
            comments: null,
        };
    },
    async created() {
        await this.$store
            .dispatch("fetchPostById", this.$route.params.id)
            .then((res) => {
                this.post = res;
            })
            .catch((err) => {
                this.post = err;
            });
        if (!this.post.error) {
            await Promise.all([
                this.$store.dispatch("fetchUser", this.post.userId),
                this.$store.dispatch("fetchComments", this.post.id),
            ]).then((response) => {
                this.user = response[0];
                this.comments = response[1];
            });
        }
    },
};
</script>

<style>

</style>