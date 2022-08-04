import request from '@/utils/request'
import store from '@/store'
/**
 *获取验证码图片的地址
 * @param {number} clientToken 随机数
 * @returns Promise
 */
export function loginImg(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    method: 'get',
  })
}
/**
 *登陆按钮
 * @param {object} data 参数
 * @returns
 */
export function login(data) {
  return request({
    url: `/user-service/user/login`,
    method: 'POST',
    data,
  })
}

/**
 * 获取用户基本信息
 * @param {*} id 用户id
 * @returns Promise
 */
export function getUserInfo(id) {
  return request({
    url: '/user-service/user/' + id,
    headers: {
      Authorization: store.state.user.token,
    },
  })
}
