import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Plan',
      component: () => import('../views/PlanView.vue')
    },
    {
      path: '/paymentmethod/:id',
      name: 'paymentmethod.show',
      component: () => import('../views/PaymentMethodView.vue'),
      children: [
        {
          path: 'payment',
          name: 'Payment',
          component: () => import('../views/PaymentView.vue')
        },
        {
          path: 'details',
          name: 'Details',
          component: () => import('../views/DetailsView.vue')
        }
      ]
    }
  ]
})

export default router
