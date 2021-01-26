const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 配置路径别名注意，引用别名时如果是HTML中的路径，则需要在别名前面加符号~
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
    // .set("base", resolve("baseConfig"))
    // .set("public", resolve("public"));
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: '星火智慧课堂',
        asar: true,
        // 不需要打包至asar中的文件如数据库文件
        // extraResources: [
        //   {
        //     from: './a/',
        //     to: '../a/'
        //   }],
        mac: {
          icon: './public/tb.ico',
          target: ['zip', 'dmg']
        },
        win: {
          icon: './public/tb.ico', // 图标文件大小为 256*256
          target: ['nsis']
        },
        nsis: {
          oneClick: false, // 一键安装，如果设为true，nsis设置就无意义请直接删除 nsis 配置
          perMachine: true, // true全用户安装【目录为：C:\Program Files (x86)】，false安装到当前用户
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerHeaderIcon: '../public/tb.ico', // 安装时头部图标
          // installerSidebar: '../public/tb.png', // 侧边框图像，图像尺寸164×314像素。
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, //  // 创建开始菜单图标
          shortcutName: 'HX', // 快捷方式的名称,默认为应用程序名称
          license: './LICENSE.txt'
        }
      }
    }
  }
}
