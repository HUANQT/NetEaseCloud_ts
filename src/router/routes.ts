import type { RouteRecordRaw } from "vue-router";
import Search from "@/views/search.vue";
import Index from "@/views/index.vue";
import Community from "@/views/community.vue";
import MyUser from "@/views/myUser.vue";
import Home from "@/views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    component: Index,
    children: [
      { path: "/", component: Home },
      { path: "/community", component: Community },
      { path: "/myUser", component: MyUser },
    ],
  },

  { path: "/search", component: Search },
];

export default routes;
