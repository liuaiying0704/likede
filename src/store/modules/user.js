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
      // console.log(res)
      context.commit('setImgUrl', res.request.responseURL)
    },
    //获取token
    async getToken(context, parmas) {
      const res = await login(parmas)
      context.commit('setToken', res.data.token)
    },
  },
}
