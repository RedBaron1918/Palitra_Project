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
    <h2>{{title}}</h2>
</template>