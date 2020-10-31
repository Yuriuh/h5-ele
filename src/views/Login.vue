<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="logo" />
    </div>

    <base-input
      class="mt-20"
      type="number"
      v-model="phone"
      placeholder="手机号"
      :disabled="disabled"
      :buttonText="buttonText"
      :error="errors.phone"
    />

    <base-input
      class="mt-20"
      type="number"
      v-model="verifyCode"
      placeholder="验证码"
      :error="errors.code"
    />

    <div class="user-agreement mt-20">
      新用户登录即自动注册，表示已经同意
      <span>《用户服务协议》</span>
    </div>

    <div class="login-button mt-20">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
export default {
  data() {
    return {
      phone: '',
      verifyCode: '',
      errors: {
        phone: '',
        code: '',
      },
      buttonText: '获取验证码',
      disabled: false,
    }
  },
  components: {
    BaseInput,
  },
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  padding: 30px;
  background: #fff;
  > .logo {
    text-align: center;
    > img {
      width: 150px;
    }
  }
  > .user-agreement {
    color: #aaa;
    line-height: 22px;
    > span {
      color: #4d90fe;
    }
  }
  > .login-button {
    > button {
      width: 100%;
      height: 40px;
      background-color: #48ca38;
      border-radius: 4px;
      color: white;
      font-size: 14px;
      border: none;
      outline: none;
      &[disabled] {
        background-color: #8bda81;
      }
    }
  }
}
.mt-20 {
  margin-top: 20px;
}
</style>
