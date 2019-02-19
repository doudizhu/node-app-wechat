<template lang="pug">
    .address_book
        Header(title='通讯录' btn_icon='user-plus')
        .container
            .content_wrap
                Cell(
                    v-for='(friend,index) in friendsList'
                    :key='friend._id'
                    :user='friend'
                )
</template>

<script>
import Header from '../components/Header'
import Cell from '../components/UserCell'
export default {
    data(){
        return {
            friendsList: [],
        }
    },
    created(){
        this.getFriendsList()
    },
    components: {
        Header,
        Cell,
    },
    methods: {
        getFriendsList(){
            this.$axios.get('/api/users/all')
                .then(res => this.friendsList = res.data)
        }
    },
}
</script>
