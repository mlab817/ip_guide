
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/chapters',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '1', component: () => import('pages/Chapter1.vue')
      },
      {
        path: '2', component: () => import('pages/Chapter2.vue')
      },
      {
        path: '3', component: () => import('pages/Chapter3.vue')
      },
      {
        path: '4', component: () => import('pages/Chapter4.vue')
      },
      {
        path: '5', component: () => import('pages/Chapter5.vue')
      },
      {
        path: '6', component: () => import('pages/Chapter6.vue')
      },
      {
        path: '7', component: () => import('pages/Chapter7.vue')
      },
      {
        path: '8', component: () => import('pages/Chapter8.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
