<template>
  <div id="app">

    <Head></Head>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from "@/components/Head/Head.vue"
import Foot from "./components/Foot/Foot.vue";
export default {
  name: "App",
  components: {
    Head,
    Foot,
  }
}
</script>

<style scoped lang="less"></style>
