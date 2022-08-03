import { loginImg, login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    // 获取验证码
    imgUrl: '',
    // 获取token
    token: '',
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
  },
  actions: {
    // 获取验证码
    async getImgUrl(context, random) {
      const res = await loginImg(random)
      console.log(res.request.responseURL)
      context.commit('setImgUrl', res.request.responseURL)
    },
    //获取token
    async getToken(context, parmas) {
      const res = await login(parmas)
      console.log(res)
      context.commit('setToken', res.data.token)
    },
    // logout 退出方法
    logout(context) {
      context.commit('setToken', '')
    },
  },
}
