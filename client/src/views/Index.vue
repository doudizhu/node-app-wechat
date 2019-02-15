<template lang='pug'>
  .index
    TabBar
</template>

<script>
import TabBar from '../components/TabBar'
export default {
    name: 'index',
    components: {
      TabBar,
    },
}
</script>

<style scoped>
.index{
  width: 100%;
  height: 100%;
}
</style>
