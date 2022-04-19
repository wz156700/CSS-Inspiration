import { RouteRecordRaw, createRouter, Router, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: {
      name: "home"
    }
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
      level: 0
    },
    component: () => import("../components/home.vue")
  },
  
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
