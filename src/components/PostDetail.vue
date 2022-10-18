<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        body: {
            type: String,
            default: "",
        },
        user: {
            type: Object,
            default: function () {
                return {
                    id: 0,
                    name: "",
                };
            },
        },
    },
};
</script>


<template>
    <nav class="mt-3 w-75 p-2">
        <div class="container-fluid mb-2">
            <h2 class="h2">{{title}}</h2>
        </div>
        <div class="d-flex gap-2 p-2">
            <span>Author:</span>
            <p>
                <RouterLink :to="'/author/'+user.id">{{ user.name}}</RouterLink>
            </p>
        </div>
    </nav>
    <div class="w-75 p-1 ml-1">
        {{body}}
    </div>
</template>


<style scoped>
.ml-1 {
    margin-left: 7px;
    margin-bottom: 10px;

}
</style>