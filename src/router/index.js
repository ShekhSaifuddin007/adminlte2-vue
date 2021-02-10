import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home2.vue";

Vue.use(Router);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/home",
        name: "Home2",
        component: Home2
    }
];

const router = new Router({
    mode: "history",
    routes
});

export default router;