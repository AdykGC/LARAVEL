import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/blog",
        name: "blog",
        component: () => import("../views/Blog.vue"),
    },
    {
        path: "/shop",
        name: "Shop",
        component: () => import("../views/Shop.vue"),
    },
    {
        path: "/pages",
        name: "Pages",
        component: () => import("../views/Pages.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
    },
    {
        path: "/profile/login",
        name: "login",
        component: () => import("../views/Profile_Login.vue"),
    },
    {
        path: "/profile/register",
        name: "Register",
        component: () => import("../views/Profile_Register.vue"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Shop_Cart.vue"),
    },
    {
        path: "/wishlist",
        name: "Wishlist",
        component: () => import("../views/Shop_Wishlist.vue"),
    },
    {
        path: "/search",
        name: "Search",
        component: () => import("../views/Search.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
