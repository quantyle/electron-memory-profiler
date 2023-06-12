const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
const { spawn } = require('child_process');

let mainWindow = null;
app.on('ready', () => {
    createWindow();

    const nodeProcess = spawn('node', ['--experimental-modules', './server/main.mjs']);

    // Optional: Capture and log the output from the Node.js program
    nodeProcess.stdout.on('data', (data) => {
      console.log(`Node.js Program Output: ${data}`);
    });
  
    // Optional: Capture and log any errors from the Node.js program
    nodeProcess.stderr.on('data', (data) => {
      console.error(`Node.js Program Error: ${data}`);
    });
  
    // Optional: Handle the exit event of the Node.js program
    nodeProcess.on('exit', (code) => {
      console.log(`Node.js Program Exited with Code: ${code}`);
    });

    // app.on('window-all-closed', () => {
    //     if (process.platform !== 'darwin') {
    //         app.quit();
    //         // Terminate the Python backend process
    //         backendProcess.kill();
    //     }
    // });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 1024,
        title: "Electron Memory Profiler"
    });

    // Open the DevTools.
    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: "right" });
        // win.webContents.openDevTools({ mode: "detach" });
    }

    // maximize window
    mainWindow.maximize();


    // mainWindow.webContents.openDevTools();
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', function () {
        mainWindow = null;
    })
    mainWindow.on('page-title-updated', function (e) {
        e.preventDefault();
    });
}