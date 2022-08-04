import request from '@/utils/request'
import store from '@/store'

/**
 * 工单搜索  所有的列表。以及筛选
 * @param {*} params 参数可选
 * @returns Promise
 */

export function taskSearch() {
  return request({
    url: '/task-service/task/search',
    headers: {
      Authorization: store.state.user.token,
    },
  })
}
