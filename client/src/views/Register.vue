<template lang='pug'>
  .register
    .header
      button(@click='$router.go(-1)') 取消
    .container
      .title 注册账户
      .content
        //- 表单
</template>

<script>
export default {
    name: 'register',
    components: {

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
