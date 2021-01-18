<template>
  <div class="home">
    <el-container>
      <el-aside width="160px" class="side"><Mainside></Mainside></el-aside>
      <el-main class="main"><mainTopRight></mainTopRight></el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import mainTopRight from '@/components/mainTopRight.vue'
import Mainside from '../components/mainSide'

export default {
  name: 'Home',
  components: {
    mainTopRight,
    Mainside
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding: 0px;
}

</style>
