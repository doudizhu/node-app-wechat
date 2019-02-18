<template lang="pug">
    .cell-wrapper(v-if='userInfo')
        .cell-title
            img(:src='userInfo.avatar')
            span {{userInfo.name}}
</template>

<script>
export default {
    props: {
        userInfo: Object,
    }
}
</script>

<style scoped>
.cell-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 80px;
  display: flex;
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
  padding: 0 8px;
  width: 100%;
  line-height: 80px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}
.cell-title {
  flex: 1;
}
.cell-title img {
  width: 4rem;
  height: 4rem;
  vertical-align: middle;
  margin-right: 0.6rem;
}
.cell-title span {
  display: inline-block;
  vertical-align: middle;
}
</style>

