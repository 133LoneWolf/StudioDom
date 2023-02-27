const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        resizable: true

    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
})