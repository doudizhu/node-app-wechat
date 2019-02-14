<template lang='pug'>
  .register
    .header
      button(@click='$router.go(-1)') 取消
    .container
      .title 注册账户
      .content
        //- 表单
        form
          InputGroup(
            label='昵称'
            placeholder='例如：米斯特吴'
            v-model='user.name'
          )
          InputGroup(
            label='邮箱'
            placeholder='请填写邮箱'
            v-model='user.email'
          )
          InputGroup(
            label='密码'
            placeholder='请设置密码'
            v-model='user.password'
            type='password'
          )
          InputGroup(
            label='确认密码'
            placeholder='请确认密码'
            v-model='user.password2'
            type='password'
          )
</template>

<script>
import InputGroup from '../components/InputGroup'
export default {
    name: 'register',
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          password2: '',
        }
      }
    },
    components: {
      InputGroup,
    },
}
</script>

<style scoped>
.register{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.header{
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 50px;
}

.header button{
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: #20af0e;
}

.container{
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.title{
  margin-top: 30px;
  font-size: 22px;
  text-align: center;
}
</style>
