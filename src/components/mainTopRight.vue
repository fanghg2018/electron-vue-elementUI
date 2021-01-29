<template>
  <div class="top_nav">
    <button class="min_btn" title="最小化" @click="minimize"></button>
    <button
      v-if="max_title === '最大化'"
      class="max_btn"
      :title="max_title"
      :style="{ backgroundImage: 'url(' + max_icon + ')' }"
      @click="maximize"
    ></button>
    <button
      v-if="max_title === '向下还原'"
      class="max_btn1"
      :title="max_title"
      :style="{ backgroundImage: 'url(' + max_icon + ')' }"
      @click="maximize"
    ></button>
    <button class="close_btn" title="关闭" @click="close"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      max_title: '最大化',
      max_icon: require('../assets/img/c4.png')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.$router.push(key)
    },
    toGithub () {
      this.$shell.openExternal('https://github.com/seolhw/youdao')
    },
    maximize () {
      if (this.$win.isMaximized()) {
        this.$win.unmaximize()
        this.max_title = '最大化'
        this.max_icon = require('../assets/img/c4.png')
      } else {
        this.$win.maximize()
        this.max_title = '向下还原'
        this.max_icon = require('../assets/img/c2.png')
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

<style scoped lang="scss">
.top_nav {
  height: 32px;
  background: #fff;
  -webkit-app-region: drag; //拖窗口用的
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none;
    background: none;
    -webkit-app-region: no-drag;
    outline: none;
  }

  button:focus {
    outline: none;
  }

  /*for IE*/
  button::-moz-focus-inner {
    border-color: transparent;
  }

  /*for mozilla*/
  button:focus {
    border: none;
  }

  .min_btn,
  .max_btn,
  .max_btn1,
  .close_btn {
    width: 40px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 32%;
  }

   .max_btn:hover {
    background-image: url("../assets/img/c44.png") !important;
  }
    .max_btn1:hover {
    background-image: url("../assets/img/c22.png") !important;
  }
  .min_btn:hover {
    background-image: url("../assets/img/c33.png");
  }
  .close_btn:hover {
    background-image: url("../assets/img/c11.png");
    cursor: pointer;
    background-color: #f10707;
  }

  .min_btn {
    background-image: url("../assets/img/c3.png");
  }

  .close_btn {
    background-image: url("../assets/img/c1.png");
  }
}
</style>
