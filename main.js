const electron = require('electron')
const fs = require('fs')

let scriptToInject = fs.readFileSync('./inject.js').toString()

electron.app.on('ready', () => {
    let win = new electron.BrowserWindow({
        backgroundColor: '#000000',
        width: 1280,
        height: 720,
        minWidth: 800,
        minHeight: 600,
        frame: false
    })
    win.on('closed', () => win = null)
    win.loadURL('https://music.youtube.com')
    win.webContents.openDevTools()
    win.webContents.on('did-finish-load', () => {
        win.webContents.executeJavaScript(scriptToInject)
    })
})