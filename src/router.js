import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter); // vue router 를 사용하겠다 

const router = new VueRouter({ // router page config 
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "/about", component: About},
    ]
});

export default router;