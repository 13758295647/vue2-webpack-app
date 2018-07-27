<template>
    <div class="login">
        <header>
            <a class="iconfont icon-chahao" @click="$router.go(-1)"></a>
            <a href="#/help" class="help">帮助</a>
        </header>
        <div class="login-main">
            <strong>欢迎登录美团</strong>
            <label>+86 > <input type="text" placeholder="请输入手机号" /></label>
            <span>未注册的手机号验证后自动创建美团账户</span>
            <button :class="{'disableBtn':hasValue}">获取短信验证码</button>
        </div>
    </div>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      hasValue: true
    };
  }
};
</script>

<style lang="less">
.login {
  header {
    a {
      margin: 0 1rem;
      float: left;
      color: #45ccba;
      &.help {
        float: right;
      }
    }
  }
  .login-main {
    margin: 4.55rem 2rem;
    text-align: left;
    strong {
      font-size: 2rem;
      line-height: 4rem;
      color: #000;
      width: 100%;
      display: inline-block;
      margin-bottom: 2rem;
    }
    label {
      width: 100%;
      display: inline-block;
      height: 2.6rem;
      border-bottom: 1px solid #ccc;
      line-height: 2.4rem;
      input {
        border: none;
        background: transparent;
        padding-left: 5px;
        outline: none;
        font-size: 1.1rem;
      }
    }
    span {
      font-size: 0.9rem;
      color: #8c8b8b;
      margin: 6px 0;
      float: left;
    }
    button {
      border: none;
      background: #45ccba;
      color: #fff;
      width: 100%;
      font-size: 1.6rem;
      border-radius: 1.6rem;
      line-height: 2.6rem;
      float: left;
      margin-top: 1.5rem;
      outline: none;
      &.disabledBtn {
        background: #c0eae4;
      }
      &:active {
        background: #5ecdbe;
      }
    }
  }
}
</style>


