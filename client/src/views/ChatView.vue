<template lang="pug">
    .chat
        Header(
            v-if='targetUser'
            :is-left='true'
            :title='targetUser.name'
            btn_icon='ellipsis-h'
        )
</template>

<script>
import Header from '../components/Header'
export default {
    data(){
        return {
            targetUser: null,
        }
    },
    components: {
        Header,
    },
    beforeRouteEnter(to,from,next){
        next(vm => {
            vm.targetUser = to.params.user
        })
    },
}
</script>
