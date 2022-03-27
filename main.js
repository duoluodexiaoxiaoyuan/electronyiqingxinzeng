const { app, BrowserWindow } = require("electron");
function createWindow() {
  let win = new BrowserWindow({
    width: 300,
    height: 220,
    x: 100,
    y: 50,
    // frame: false,
    // titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("./index.html");
  // win.loadURL(
  //   "https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=329668874965"
  // );
}

app.whenReady().then(createWindow);
