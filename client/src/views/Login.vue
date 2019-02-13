<template lang='pug'>
  .login
    .title 用户登录
    .content
      //- 表单
    .footer_wrap
      | |
      button.register(@click='$router.push("/register")') 注册账号
      | |
</template>

<script>
export default {
    name: 'login',
    components: {

    },
}
</script>

<style scoped>
.login{
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}

.title{
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}

.footer_wrap{
  position: absolute;
  left: 0;
  bottom: 16px;
  text-align: center;
  width: 100%;
  color: #888;
}

.footer_wrap .register{
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #7b8ca9;
}
</style>
