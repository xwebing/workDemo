import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
     // component: () => import('@/App.vue'),
      children: [
        // {
        //   path: '/',
        //   name: 'home',
        //   component: () => import('@/components/home/index.vue')
        // },
        {
          path: '/text-overflow',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/components/text/textOverflow/index.vue')
        },
        {
          path: '/text-tooltips',
          component: () => import('@/components/text/hover/tooltips.vue')
        }
      ]
    },
  ]
})

export default router
