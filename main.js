const electron = require('electron')
const fs = require('fs')

let scriptToInject = fs.readFileSync('./app/js/inject.js').toString()

electron.app.on('ready', () => {
    let win = new electron.BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        transparent: true,
        icon: './app/icons/logo.png'
    })
    win.on('closed', () => win = null)
    win.loadURL('https://music.youtube.com')
    // win.webContents.openDevTools() // Should be removed for release app.
    win.webContents.on('did-finish-load', () => {
        win.webContents.executeJavaScript(scriptToInject)
    })
})