const { app, BrowserWindow } = require("electron");
function createWindow() {
  let win = new BrowserWindow({
    width: 500,
    height: 500,
    x: 1300,    // 相对于左侧的偏移量
    y: 50,
    // frame: false,
    // focusable: false,  // 一直置顶
    // titleBarStyle: "hidden",
    // transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // win.setIgnoreMouseEvents(true)  点击穿透，可以点到下面你开启的应用的功能
  // win.setIgnoreMouseEvents(true)
  win.loadFile("./bibiliFanTableBar.html");
  // win.loadURL(
  //   "https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=329668874965"
  // );
}

app.whenReady().then(createWindow);
