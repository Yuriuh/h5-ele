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
      @button-click="getVerifyCode"
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
      <button @click="getVerifyCode">登录</button>
    </div>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
import { isMobilePhone } from 'utils/reg.js'
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
  methods: {
    getVerifyCode() {
      if (this.validatePhone()) {
        // 发送网络请求
        this.validateButton()
      }
    },
    validatePhone() {
      // 验证手机号码
      if (!this.phone) {
        this.errors = {
          phone: '手机号码不能为空',
        }
        return false
      } else if (!isMobilePhone(this.phone)) {
        this.errors = {
          phone: '请填写正确的手机号码',
        }
        return false
      } else {
        this.errors = {}
        return true
      }
    },
    validateButton() {
      let time = 60
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.buttonText = '获取验证码'
          this.disabled = false
        } else {
          // 倒计时
          this.buttonText = time + '秒后重试'
          this.disabled = true
          time -= 1
        }
      }, 1000)
    },
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
