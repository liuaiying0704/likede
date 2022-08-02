<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <img class="logo-login" src="@/assets/login.png" alt="" />
      <el-form-item prop="admin" class="button-one">
        <span class="svg-container">
          <i class="el-icon-mobile icon" />
        </span>
        <el-input
          ref="admin"
          v-model="loginForm.admin"
          placeholder="请输入用户名"
          name="admin"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock icon" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入验证码"
          name="password"
          tabindex="2"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item prop="yanzheng">
        <span class="svg-container">
          <i class="el-icon-chat-dot-square icon" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.yanzheng"
          placeholder="请输入验证码"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >登陆</el-button
      >

      <img
        class="yanzheng"
        :src="$store.state.user.imgUrl"
        alt=""
        @click="getImg"
      />
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    // //
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('请正确输入用户名'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 5) {
    //     callback(new Error('密码不少于5位数'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      random: '',
      loginForm: {
        admin: 'admin',
        password: 'admin',
        yanzheng: '',
      },
      loginRules: {
        admin: [{ required: true, trigger: 'blur', message: '请输入账号' }],
        password: [
          { required: true, trigger: 'blur', message: '请输入验证码' },
        ],
        yanzheng: [
          { required: true, trigger: 'blur', message: '请输入验证码' },
        ],
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  created() {
    this.getImg()
  },
  methods: {
    // 查看密码
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    //点击图片
    getImg() {
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
      }
      this.random = getRandom(0, 10000)
      this.$store.dispatch('user/getImgUrl', this.random)
    },
    async handleLogin() {
      this.loading = true
      try {
        // 点击按钮，先校验正则
        await this.$refs.loginForm.validate()
        // 传入请求的参数，以及验证码，因此写在这里
        await this.$store.dispatch('user/getToken', {
          loginName: this.loginForm.admin,
          password: this.loginForm.password,
          code: this.loginForm.yanzheng,
          clientToken: this.random,
          loginType: 0,
        })
        this.$router.push('/')
        this.$message.success('登陆成功')
      } finally {
        this.loading = false
      }
      // 登陆完清空
      ;(this.loginForm.admin = 'admin'),
        (this.loginForm.password = 'admin'),
        (this.loginForm.yanzheng = '')
    },
  },
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
// element 字号
.icon {
  font-size: 16px;
}
/* reset element-ui css */
.login-container {
  background-image: url('../../assets/background.be4fae7d.png');
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: none;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-input input {
    color: #999;
  }
  // 输入框背景色
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .button-one {
    margin-top: 76px 0 0 0;
  }
  .el-form-item__content {
    background-color: #fff;
  }
  .yanzheng {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(93px, 40px);
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.logo-login {
  position: absolute;
  top: -48px;
  left: 50%;
  width: 96px;
  height: 96px;
  transform: translateX(-50%);
  z-index: 33;
}

.el-button {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
  opacity: 0.91;
  border-radius: 8px;
  color: #fff;
  text-shadow: 0 7px 22px #cfcfcf;
}
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    width: 518px;
    position: absolute;
    height: 388px;
    padding: 76px 35px 0;
    margin: 0 auto;
    // overflow: hidden;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  .el-form-item {
    margin-bottom: 24px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 47px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
