<template lang="pug">
    .mine
        Header(title='我')
        .container
            InfoCell(:userInfo='user')
            .btn_wrapper
                Button(@click='loginOut()') 退出登录
</template>

<script>
import Header from '../components/Header'
import InfoCell from '../components/InfoCell'
import Button from '../components/YButton'
export default {
    computed:{
        user(){
            return this.$store.getters.user
        }
    },
    components: {
        Header,
        InfoCell,
        Button,
    },
    methods:{
        loginOut(){
            localStorage.removeItem('wxpyqToken')
        },
    }
}
</script>

<style scoped>
.mine {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
  box-sizing: border-box;
  padding: 16px 0;
  background-color: #f1f1f1;
}

.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>