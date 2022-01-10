import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Game from "./views/Game";

Vue.use(VueRouter); // vue router 를 사용하겠다 

const router = new VueRouter({ // router page config 
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "/game", component: Game},
    ]
});

export default router;