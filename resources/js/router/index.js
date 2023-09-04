import { createWebHistory, createRouter } from "vue-router";

export const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("../pages/Home.vue"),
    },
    {
        name: "register",
        path: "/register",
        component: () => import("../pages/Register.vue"),
    },
    {
        name: "login",
        path: "/login",
        component: () => import("../pages/Login.vue"),
    },
    {
        name: "dashboard",
        path: "/dashboard",
        component: () => import("../pages/Dashboard.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
