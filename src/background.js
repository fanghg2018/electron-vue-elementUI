/* eslint-disable no-undef */
'use strict'

import { app, protocol, BrowserWindow, ipcMain, Tray, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

let tray = null
let win
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
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

// 监听窗口变化  实现修改最大化和还原的图标
app.on('resize', () => {
  if (!win.isMaximized()) {
    BrowserWindow.getFocusedWindow().webContents.send('restoreMaximize', 'restore')
  } else {
    BrowserWindow.getFocusedWindow().webContents.send('restoreMaximize', 'maximize')
  }
})
// 置顶
ipcMain.on('window-top', () => {
  if (win.isAlwaysOnTop()) {
    win.setAlwaysOnTop(false)
    BrowserWindow.getFocusedWindow().webContents.send('alwaysOnTop', 'no')
  } else {
    win.setAlwaysOnTop(true)
    BrowserWindow.getFocusedWindow().webContents.send('alwaysOnTop', 'yes')
  }
})

// 最小化
ipcMain.on('window-min', () => {
  win.minimize()
})

// 最大化
ipcMain.on('window-max', () => {
  if (win.isMaximized()) {
    win.restore()
    // 主进程 个渲染进程 发送数据
    BrowserWindow.getFocusedWindow().webContents.send('restoreMaximize', 'restore')
  } else {
    win.maximize()
    // 主进程 个渲染进程 发送数据
    BrowserWindow.getFocusedWindow().webContents.send('restoreMaximize', 'maximize')
  }
})
// 关闭，隐藏
ipcMain.on('window-close', () => {
  win.hide()
})

// Exit cleanly on request from parent process in development mode.
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
