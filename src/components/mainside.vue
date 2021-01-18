<template>
  <el-row class="tac">
    <!-- side头部 -->
    <el-col >
      <div class="login-image">
        <div class="block" >
            <el-image
            style="width: 100px; height: 60px"
            :src="url"
            fit="contain"
          ></el-image>
        </div>
      </div>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#f2f2f1"
        text-color="#0b0b0b"
        active-text-color="#d20a0a"
      >
      <div class="top">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </div>
        <el-menu-item index="4" class="setting">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
<!-- side底部 -->

  </el-row>
</template>

<script>
export default {
  name: 'mainSide',
  data () {
    return {
      url: require('../assets/img/logo.png')
    }
  }
}
</script>
<style scoped lang="scss">

.login-image{
  background: #f2f2f1 !important;
  -webkit-app-region: drag; //拖窗口用的
  padding:  30px;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #d20a0a !important;
  background: #f2f2f1 !important;
  i {
    color: #d20a0a;
  }
}
.el-menu{
  display:flex;
  flex-direction: column ;
  justify-content: flex-start;
}
.top {
  flex: 1;
}

.setting {
  flex-direction: column ;
  justify-content: flex-end;
  height: 55px !important;
  margin-bottom: 30px;
  flex-shrink: 0;
  flex-grow: 0;
}

.el-menu-item.is-active {
  outline: 0 !important;
  color: #d20a0a !important;
  background: #f1e7e6 !important;
}
.el-menu-vertical-demo {
  height: calc(100vh - 123px)
}
</style>
