import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/post/:id",
      name: "Post",
      component: () => import("../views/Post.vue"),
    },
    {
      path: "/author/:id",
      name: "Auhtor",
      component: () => import("../views/Author.vue"),
    },
  ],
});

export default router;
