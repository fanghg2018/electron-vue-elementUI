<template>
  <div class="app">
        <router-view/>
  </div>
</template>

<script >
export default {
}
</script>

<style >
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
    *{
    margin: 0;
    padding: 0;
    font-family: 'pingFang';
  }
/* Internet Explorer 9, Firefox, Opera,Chrome, 和 Safari支持@font-face 规则.
但是, Internet Explorer 9 只支持 .eot 类型的字体, Firefox, Chrome, Safari, 和 Opera 支持 .ttf 与.otf 两种类型字体.
注意： Internet Explorer 8 及更早IE版本不支持@font-face 规则. */
@font-face {
    font-family: 'pingFang';
    src: url('./assets/pingfangti.ttf');
    font-weight: normal;
    font-style: normal;
  }
</style>
