import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import MemoGrid from "./views/MemoGrid";
import TypingGame from "./views/TypingGame";

Vue.use(VueRouter); // vue router 를 사용하겠다 

const router = new VueRouter({ // router page config 
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "/game/memoGrid", component: MemoGrid},
        {path: "/game/typingGame", component: TypingGame},
    ]
});

export default router;