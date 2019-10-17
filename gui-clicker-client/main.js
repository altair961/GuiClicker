// const { app, BrowserWindow } = require('electron')

// let win;

// function createWindow() {
//     win = new BrowserWindow({
//         width: 600,
//         height: 600,
//         backgroundColor: 'ffffff',
//         icon: `file://${__dirname}/dist/assets/logo.png`
//     })

//     win.loadURL(`file://${__dirname}/dist/index.html`)
//     win.on('closed', function() {
//         win = null
//     })
// }

// app.on('ready', createWindow)

// app.on('window-all-closed', function() {
//     if(process.platform !== 'darwin') {
//         app.quit()
//     }
// })

// app.on('activate', function() {
//     if(win === null) {
//         createWindow()
//     }
// })


//////
// const { app, BrowserWindow } = require('electron')

// let win;

// function createWindow() {
//     win = new BrowserWindow({
//         width: 600,
//         height: 600,
//         backgroundColor: 'ffffff',
//         icon: `file://${__dirname}/dist/assets/logo.png`
//     })

//     win.loadURL(`file://${__dirname}/dist/index.html`)
//     alert(`file://${__dirname}/dist/index.html`)
//     win.on('closed', function() {
//         win = null
//     })
// }

// app.on('ready', createWindow)

// app.on('window-all-closed', function() {
//     if(process.platform !== 'darwin') {
//         app.quit()
//     }
// })

// app.on('activate', function() {
//     if(win === null) {
//         createWindow()
//     }
// })


const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})