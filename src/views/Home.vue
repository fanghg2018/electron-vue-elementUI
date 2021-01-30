<template>
<el-container>
  <el-aside width="160px"><mainSide></mainSide></el-aside>
  <el-main>
    <main-top-right></main-top-right>
    <router-view/>
    </el-main>
</el-container>

</template>

<script>
import mainSide from '../components/mainside.vue'
import mainTopRight from '../components/mainTopRight.vue'
export default {
  components: { mainSide, mainTopRight }

}
</script>

<style lang="scss" scoped>
main.el-main{
  padding: 0px !important;
  margin-left: 20px;
}
</style>
