import Layout from '@/layout'
export default {
  path: '/policy/index',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/policy'),
      meta: { title: '账单管理', icon: 'tree' },
    },
  ],
}
