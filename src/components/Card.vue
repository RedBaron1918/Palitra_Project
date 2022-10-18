<script>
export default {
    props: {
        post: {
            type: Object,
            default: function () {
                return {
                    userId: 0,
                    id: 0,
                    title: "",
                    body: "",
                    user: {
                        email: "",
                    },
                };
            },
        },
    },
};
</script>

<template>

    <div class="card" style="width: 18rem;">
        <RouterLink :to="'/post/'+post.id">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{post.user.name}}</h6>
            </div>
        </RouterLink>
    </div>

</template>