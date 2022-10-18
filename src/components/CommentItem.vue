<template>
    <div class=" w-75 rounded comment-style">
        <p>{{ comment.email }}</p>
        <p>{{comment.body}}</p>
    </div>

</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            default: function () {
                return {
                    postId: null,
                    id: null,
                    name: "",
                    email: "",
                    body: "",
                };
            },
        },
    },
};
</script>

<style scoped>
.comment-style {
    margin-left: 1rem;
    padding: 10px;
    margin-top: 1rem;
    background-color: rgb(231, 231, 231);
}
</style>