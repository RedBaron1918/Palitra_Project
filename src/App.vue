<script>
import { RouterLink, RouterView } from 'vue-router'
import Card from './components/Card.vue';
import Header from './components/Header.vue';
import axios from 'axios'
export default {
  components: {
    Card,
    Header
  },
}
</script>

<template>
  <Header />
  <RouterView />
</template>



