/* eslint-disable no-undef */
'use strict'

import { app, protocol, BrowserWindow, Tray, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

let tray = null
let win
// 注册自定义的请求协议
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow () {
// 创建窗口。
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // 如果处于开发模式，则加载开发服务器的url
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // 不是开发模式时加载index.html
    win.loadURL('app://./index.html')
  }
}

// 关闭所有窗口后退出。
app.on('window-all-closed', () => {
// 在macOS上，应用程序及其菜单栏很常见
// 保持活动状态，直到用户使用Cmd + Q明确退出为止
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
// 在macOS上，通常会在应用程序重新创建窗口时
// 单击dock图标，没有其他窗口打开。
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// 当Electron完成时将调用此方法
// 初始化并准备创建浏览器窗口。
// 有些API仅在此事件发生后才能使用。
app.on('ready', async () => {
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   try {
  //     await installExtension(VUEJS_DEVTOOLS)
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString())
  //   }
  // }
  createWindow()

  // 添加托盘
  // __static 对应 public 目录
  const iconUrl = `${__static}\\tb.ico`
  const iconUrl1 = `${__static}\\tb.png`
  tray = new Tray(iconUrl)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示主窗口',
      icon: iconUrl1,
      click: () => {
        win.show()
      }
    },
    // { type: 'separator' }, // 分割线
    {
      label: '退出',
      click: () => {
        if (tray !== undefined) {
          tray.destroy()
          tray = undefined
        }
        win.destroy()
        app.quit()
      }
    }
  ])

  tray.on('click', () => { win.isVisible() ? win.hide() : win.show() })
  tray.setToolTip('测试气泡提示文字')
  tray.setContextMenu(contextMenu)
})

// 限制只能开启一个应用(4.0以上版本)
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到mainWindow这个窗口
    if (win) {
      if (win.isMinimized()) win.restore()
      win.focus()
      win.show()
    }
  })
}

// 在开发模式下，应主进程的要求完全退出。
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
