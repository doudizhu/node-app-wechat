<template lang="pug">
    .address_book
        Header(title='通讯录' btn_icon='user-plus')
        .container
            //- 上面 搜索框
            .search_wrap
                .sear_content
                    i.fa.fa-search
                    input(placeholder='搜索' v-model='search_value')

            //- 中间
            .content_wrap
                Cell(
                    v-for='(friend,index) in friendsList'
                    :key='friend._id'
                    :user='friend'
                    @click='cellClick(friend)'
                )
            //- 下面
            .count_wrap
                span {{friendsList.length}}位联系人
</template>

<script>
import Header from '../components/Header'
import Cell from '../components/UserCell'
export default {
    data(){
        return {
            friendsList: [],
            allFriends: [],
            search_value: '',
        }
    },
    created(){
        this.getFriendsList()
    },
    components: {
        Header,
        Cell,
    },
    watch: {
        search_value(){
            this.filterData()
        },
    },
    methods: {
        getFriendsList(){
            this.$axios.get('/api/users/all')
                .then(res => {
                    this.friendsList = res.data
                    this.allFriends = res.data
                })
        },
        filterData(){
            this.friendsList = this.allFriends.filter(friend => {
                return friend.name.indexOf(this.search_value) != -1
            })
        },
        cellClick(friend){
            // console.log(friend)
            this.$store.dispatch('setTargetUser',friend)
            this.$router.push('/information')
        },
    },
}
</script>

<style scoped>
.address_book {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
  overflow: auto;
}

.search_wrap {
  background-color: #f1f1f1;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
}
.sear_content {
  height: 40px;
  background: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.sear_content i {
  color: #888;
  margin-right: 10px;
}
.sear_content input {
  height: 36px;
  width: 90%;
  outline: none;
  border: none;
  font-size: 14px;
}

.count_wrap {
  min-height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  color: #888;
  font-size: 16px;
  width: 100%;
  line-height: 50px;
  text-align: center;
}
</style>