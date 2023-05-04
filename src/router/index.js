import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Search from "@/views/Search/Search.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: '/search', component: Search }

];
const router = new VueRouter({
  routes,
})

export default router;