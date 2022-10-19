<script>
import { RouterLink, RouterView } from 'vue-router'
import Card from './components/Card.vue';
import Header from './components/Header.vue';
export default {
  components: {
    Card,
    Header
  },
}
</script>

<template>
  <Header class="sticky-top" />
  <RouterView />
</template>



