import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../components/Home.vue";
import Detalle from "../components/Detalle.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/lugar/:id", component: Detalle, props: true }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
