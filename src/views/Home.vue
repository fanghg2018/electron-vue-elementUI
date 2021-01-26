<template>
  <div class="page">
    <div class="main">
      <div class="left">
        <div class="logo">
          <img src="~assets/img/youdao.jpg" alt="" />
          <h1>有道个人版</h1>
        </div>
        <div class="nav">
          <router-link
            tag="div"
            to="/"
            class="item1"
            :class="{ 'router-link-exact-active': $route.path == '/' }"
          >
            <div class="icon"></div>
            <div class="title">词典</div>
          </router-link>
          <router-link tag="div" to="/history" class="item2">
            <div class="icon"></div>
            <div class="title">历史记录</div>
          </router-link>
          <router-link tag="div" to="/collect" class="item4">
            <div class="icon"></div>
            <div class="title">收藏</div>
          </router-link>
          <div class="item3" @click="toGithub">
            <div class="icon"></div>
            <div class="title">Githup</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="left"></div>
          <div class="right">
            <div class="item1" title="最小化" @click="minimize"></div>
            <div class="item2" title="最大化" @click="maximize"></div>
            <div class="item3" title="关闭" @click="close"></div>
          </div>
        </div>
        <div class="view">
          <router-view ></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    toGithub () {
      this.$shell.openExternal('https://github.com/seolhw/youdao')
    },
    maximize () {
      if (this.$win.isMaximized()) {
        this.$win.unmaximize()
      } else {
        this.$win.maximize()
      }
    },
    minimize () {
      this.$win.minimize()
    },
    close () {
      this.$win.hide()
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
}
.main {
  display: flex;
  height: 100%;
  background-color: #f2f2f1;
}
.left {
  width: 160px;
  -webkit-user-select: none; //禁用文本选择
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    -webkit-app-region: drag;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: 16px;
      font-weight: 550;
      margin-top: 5px;
    }
  }
}
.nav {
  padding-top: 25px;
  >div {
    -webkit-app-region: no-drag;
    display: flex;
    align-items: center;
    cursor: default;
    padding: 15px 30px;
    &.item1 {
      .icon {
        background-image: url("../assets/img/t1.png");
      }

      &.router-link-exact-active {
        .icon {
          background-image: url("../assets/img/t2.png");
        }
      }

      &:hover {
        .icon {
          background-image: url("../assets/img/t2.png");
        }
        .title{
          color: red;
        }
      }
    }
    &.item2 {
      .icon {
        background-image: url("../assets/img/time1.png");
      }

      &.router-link-exact-active {
        .icon {
          background-image: url("../assets/img/time2.png");
        }
      }

      &:hover {
        .icon {
          background-image: url("../assets/img/time2.png");
        }
        .title{
          color: red;
        }
      }
    }

    &.item3 {
      position: absolute;
      bottom: 20px;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      .icon {
        background-image: url("../assets/img/github.png");
      }

      &.router-link-exact-active {
        .icon {
          background-image: url("../assets/img/github1.png");
        }
      }

      &:hover {
        .icon {
          background-image: url("../assets/img/github1.png");
        }
        .title{
          color: red;
        }
       }
    }
    &.item4 {
      .icon {
        background-image: url("../assets/img/start1.png");
      }

      &.router-link-exact-active {
        .icon {
          background-image: url("../assets/img/start.png");
        }
      }

      &:hover {
        .icon {
          background-image: url("../assets/img/start.png");
        }
     .title{
          color: red;
        }
     }
    }

    &.router-link-exact-active {
      background-color: rgb(241, 231, 230);
      color: red;
    }

    .icon {
      width: 15px;
      height: 15px;
      background-size: 100% 100%;
    }

    .title {
      padding-left: 10px;
      font-size: 14px;
      line-height: 0;
    }
  }
}
.right {
  flex: 1;
  padding: 10px;
  background-color: #fff;
  .top {
    display: flex;
    -webkit-app-region: drag;
    .right {
      display: flex;
      justify-content: flex-end;
      div {
        width: 18px;
        height: 18px;
        background-size: 100% 100%;
        margin: 0 8px;
        -webkit-app-region: no-drag;
        &.item1 {
          background-image: url("../assets/img/c3.png");

          &:hover {
            background-image: url("../assets/img/c33.png");
          }
        }

        &.item2 {
          background-image: url("../assets/img/c2.png");

          &:hover {
            background-image: url("../assets/img/c22.png");
          }
        }

        &.item3 {
          background-image: url("../assets/img/c1.png");

          &:hover {
            background-image: url("../assets/img/c11.png");
          }
        }
      }

    }

  }
  .view {
    padding: 10px;
  }
}
</style>
