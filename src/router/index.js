import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Search from "@/views/Search/Search.vue";

Vue.use(VueRouter);
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

//resolve为成功的回调函数
//reject为失败的回调函数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  }
  else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  }
  else {
    originReplace.call(this, location, () => { }, () => { });
  }
}
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  {
    path: '/search/:keyword?', component: Search, name: "Search"
  }

];
const router = new VueRouter({
  routes,
})

export default router;