import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      redirect: { name: "dashboard" },
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../views/pages/dashboardView.vue"),
        },
        {
          path: "/projects",
          name: "projects",
          component: () => import("../views/pages/projectsView.vue"),
          redirect: { name: "all-projects" },
          children: [
            {
              path: "/all-projects",
              name: "all-projects",
              component: () => import("@/components/projects/projectsList.vue"),
            },
          ],
        },
        {
          path: "/project",
          name: "project",
          component: () => import("../views/pages/projectView.vue"),
        },
        {
          path: "/support",
          name: "support",
          component: () => import("../views/pages/supportView.vue"),
        },
        {
          path: "/feedback",
          name: "feedback",
          component: () => import("../views/pages/feedbackView.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
