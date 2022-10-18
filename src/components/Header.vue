<script setup>
const props = defineProps(['header_text'])
</script>
<template>
    <div class="Header">
        <h1 class="text-primary">
            <RouterLink :to="'/'">Best articles!</RouterLink>
        </h1>
    </div>

</template>
<style scoped>
h1 {
    text-align: center;
}

.Header {
    background-color: rgba(241, 241, 241, 0.5);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
}
</style>

