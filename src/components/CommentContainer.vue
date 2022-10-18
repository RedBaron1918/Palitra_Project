<template>
    <p class="ml-1 ">Comments:</p>
    <div v-for="comment in comments" :key="comment.id">
        <CommentItem :comment="comment" />
    </div>
</template>

<script>
import CommentItem from '../components/CommentItem.vue'
export default {
    components: { CommentItem },
    props: {
        comments: {
            type: Array,
            default: null,
        },
    },
}
</script>

<style scoped>
.ml-1 {
    margin-left: 8px;
}
</style>