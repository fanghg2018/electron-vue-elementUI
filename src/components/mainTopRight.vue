<template>
  <div class="top_nav">
    <button
      v-if="top_title === '取消置顶'"
      class="top_btn"
      :title="top_title"
      :style="{ backgroundImage: 'url(' + top_icon + ')' }"
      @click="onTopping"
    ></button>
      <button
      v-if="top_title === '置顶'"
      class="top_btn1"
      :title="top_title"
      :style="{ backgroundImage: 'url(' + top_icon + ')' }"
      @click="onTopping"
    ></button>
    <button class="min_btn" title="最小化" @click="onMinimize"></button>
    <button
      v-if="max_title === '最大化'"
      class="max_btn"
      :title="max_title"
      :style="{ backgroundImage: 'url(' + max_icon + ')' }"
      @click="onMaximize"
    ></button>
    <button
      v-if="max_title === '向下还原'"
      class="max_btn1"
      :title="max_title"
      :style="{ backgroundImage: 'url(' + max_icon + ')' }"
      @click="onMaximize"
    ></button>
    <button class="close_btn" title="关闭" @click="onClose"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top_title: '置顶',
      top_icon: require('../assets/img/取消置顶.png'),
      max_title: '最大化',
      max_icon: require('../assets/img/最大化.png')
    }
  },
  mounted () {
    // 监听窗口变化
    this.$ipcRenderer.on('restoreMaximize', (event, data) => {
      switch (data) {
        case 'restore':
          this.max_title = '最大化'
          this.max_icon = require('../assets/img/最大化.png')
          break
        case 'maximize':
          this.max_title = '向下还原'
          this.max_icon = require('../assets/img/还原.png')
          break
      }
    })

    this.$ipcRenderer.on('alwaysOnTop', (event, data) => {
      switch (data) {
        case 'yes':
          this.top_title = '取消置顶'
          this.top_icon = require('../assets/img/取消置顶.png')
          break
        case 'no':
          this.top_title = '置顶'
          this.top_icon = require('../assets/img/置顶.png')
          break
      }
    })
  },
  methods: {
    // 置顶功能
    onTopping () {
      this.$ipcRenderer.send('window-top')
    },

    // 最小化
    onMinimize () {
      this.$ipcRenderer.send('window-min')
    },
    // 最大化
    onMaximize () {
      this.$ipcRenderer.send('window-max')
    },
    // 关闭
    onClose () {
      this.$ipcRenderer.send('window-close')
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

  .top_btn,
  .top_btn1,
  .min_btn,
  .max_btn,
  .max_btn1,
  .close_btn {
    width: 37px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 35%;
  }

  .top_btn:hover {
    background-image: url("../assets/img/取消置顶-hover.png") !important;
  }
   .top_btn1:hover {
    background-image: url("../assets/img/置顶-hover.png") !important;
  }
    .max_btn:hover {
    background-image: url("../assets/img/最大化-hover.png") !important;
  }
    .max_btn1:hover {
    background-image: url("../assets/img/还原-hover.png") !important;
  }
  .min_btn:hover {
    background-image: url("../assets/img/最小化-hover.png");
  }
  .close_btn:hover {
    background-image: url("../assets/img/关闭-hover.png");
    cursor: pointer;
    background-color: #f10707;
  }

  .min_btn {
    background-image: url("../assets/img/最小化.png");
  }

  .close_btn {
    background-image: url("../assets/img/关闭.png");
  }
}
</style>
