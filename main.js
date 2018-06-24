const electron = require('electron')
const path = require('path')
const url = require('url')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

/** ライフサイクルの定義 */

// メインウィンドウ
let mainWindow

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  if(mainWindow === null) createWindow()
})

// コンテンツ読み込み
function createWindow() {
  mainWindow = 
    new BrowserWindow({
      width: 800,
      height: 600,
    })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }))

  // ウィンドウが閉じる際の処理
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}