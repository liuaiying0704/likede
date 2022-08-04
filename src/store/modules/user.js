import { loginImg, login, getUserInfo } from '@/api/user'
export default {
  namespaced: true,
  state: {
    // 获取验证码
    imgUrl: '',
    // 获取token
    token: '',
    // 获取userId
    userId: '',
    // 获取用户信息
    userInfo: {},
  },
  mutations: {
    // 获取验证码
    setImgUrl(state, payload) {
      state.imgUrl = payload
    },
    // 获取token
    setToken(state, payload) {
      state.token = payload
    },
    setUserId(state, payload) {
      state.userId = payload
    },

    // 获取用户信息
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
  },
  actions: {
    // 获取验证码
    async getImgUrl(context, random) {
      const res = await loginImg(random)
      // console.log(res.request.responseURL)
      context.commit('setImgUrl', res.request.responseURL)
    },
    //获取token
    async getToken(context, parmas) {
      const res = await login(parmas)
      // console.log(res)
      context.commit('setToken', res.data.token)
      context.commit('setUserId', res.data.userId)
    },
    // logout 退出方法
    logout(context) {
      context.commit('setToken', '')
    },
    // 获取用户信息
    async getUserInfo(context, parmas) {
      // console.log(parmas)
      // const res = '122gghh'
      const res = await getUserInfo(parmas)
      // console.log(res.data)
      context.commit('setUserInfo', res.data)
    },
  },
}
