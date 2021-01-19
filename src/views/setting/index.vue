<template>
    <el-tabs v-model="activeName"  >
      <el-tab-pane label="常规设置" name="first">
        <common></common>
      </el-tab-pane>
      <el-tab-pane label="高级设置" name="second">
        <advanced></advanced>
      </el-tab-pane>
    </el-tabs>
</template>

<script>
import Common from './common'
import Advanced from './advanced.vue'
export default {
  components: {
    Common,
    Advanced
  },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style  lang="scss">
.el-tabs{
      padding: 20px;
      -webkit-user-select: none; //禁用文本选择
    }

.el-tabs__active-bar {
  background-color: #ff4040 !important;
}
.el-tabs__item:hover {
  color: #070000 !important;
  font-weight: bolder !important;
}
.el-tabs__item.is-active {
  color: #070000 !important;
  font-weight: bolder !important;
}

</style>
