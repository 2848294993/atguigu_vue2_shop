<template>
  <div class="home-container">
    <Typenav></Typenav>
    <List></List>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import List from '@/views/Home/List/List.vue';
import Recommend from './Recommend/Recommend.vue';
import Rank from './Rank/Rank.vue';
import Like from './Like/Like.vue';
import Floor from './Floor/Floor.vue';
import Brand from './Brand/Brand.vue';
export default {
  name: "Home",
  components: { List, Recommend, Rank, Like, Floor, Brand }
}
</script>

<style scoped lang="less"></style>