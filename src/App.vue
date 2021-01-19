<template>
  <div class="app">
    <el-container>
      <el-aside width="160px" class="side"><Mainside></Mainside></el-aside>
      <el-main  >
        <mainTopRight ></mainTopRight>
        <router-view ></router-view>
        </el-main>
    </el-container>
  </div>
</template>

<script >
import Mainside from '@/components/mainSide'
import mainTopRight from '@/components/mainTopRight.vue'
export default {
  name: 'Home',
  components: {
    Mainside,
    mainTopRight
  }
}
</script>

<style >
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  .el-main{
    padding: 0px !important;
  }

</style>
