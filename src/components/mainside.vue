<template>
  <el-row class="tac">
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
        default-active="/index"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#f2f2f1"
        text-color="#0b0b0b"
        active-text-color="#d20a0a"
      >
      <div class="top">
        <el-menu-item index="/index">
          <i class="el-icon-location"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-menu-item index="/list">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/msgs">
          <i class="el-icon-document"></i>
          <span slot="title">消息中心</span>
        </el-menu-item>
      </div>
        <el-menu-item index="/setting" class="setting">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>

  </el-row>
</template>

<script>
export default {
  name: 'mainSide',
  data () {
    return {
      url: require('../assets/img/logo.png'),
      activeIndex: this.$route.path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.$router.push(key)
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
  -webkit-user-select: none; //禁用文本选择
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
