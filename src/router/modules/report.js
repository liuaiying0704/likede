import Layout from '@/layout'
export default {
  path: '/report/index',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/report'),
      meta: { title: '对账管理', icon: 'tree' },
    },
  ],
}
