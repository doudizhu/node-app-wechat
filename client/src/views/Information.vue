<template lang="pug">
    .information
        Header(
            :is-left='true'
            title='详细资料'
            btn_icon='ellipsis-h'
        )
        .container
            InfoCell(
                :userInfo='targetUser'
            )
            .btn_wrapper
                Button(
                    @click='$router.push({name:"chat",params:{user: targetUser}})'
                ) 发消息
</template>

<script>
import Header from '../components/Header'
import InfoCell from '../components/InfoCell'
import Button from '../components/YButton'
export default {
    computed: {
        targetUser(){
            return this.$store.getters.targetUser
        },
    },
    methods: {

    },
    components: {
        Header,
        InfoCell,
        Button,
    },
}
</script>

<style scoped>
.information {
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
