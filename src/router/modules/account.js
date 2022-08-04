import Layout from '@/layout'
export default {
  path: '/account',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/account'),
      meta: { title: '账单管理', icon: 'tree' },
    },
  ],
}
