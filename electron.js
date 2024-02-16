import { app, BrowserWindow, Tray, Menu } from "electron";
import path from "path";
import isDev from "electron-is-dev";

let mainWindow;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1511, //
    height: 1196,
    titleBarStyle: "hiddenInset",
    trafficLightPosition: {
      y: "60"
    },
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      devTools: true
    },
  });


  const startURL = isDev
    ? "http://localhost:5173"
    : `file://${path.join(__dirname, "../dist/index.html")}`;

  await mainWindow.loadURL(startURL);

  mainWindow.on("closed", () => {
      console.log(mainWindow.width)
      console.log(mainWindow.height)
      mainWindow = null
  });
}

app.on("ready", createWindow);
let tray = null
app.whenReady().then(() => {
  tray = new Tray('/path/to/my/icon')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})



app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
