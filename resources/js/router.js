import { createWebHistory, createRouter } from "vue-router";
import Home from "./Components/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
