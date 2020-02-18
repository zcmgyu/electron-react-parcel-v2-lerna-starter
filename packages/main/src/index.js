const electron = require("electron");
const debug = require('electron-debug');

const app = electron.app;

// TODO: DEBUG
debug();

const { dialog } = electron;

const BrowserWindow = electron.BrowserWindow;

const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 900,
    height: 680
  });

  console.log('DEBUG isDev', isDev);

  const url = `file://${__dirname}/../renderer/index.html`;

  const options = {
    type: 'question',
    buttons: ['Cancel', 'Yes, please', 'No, thanks'],
    defaultId: 2,
    title: 'Question',
    message: 'Do you want to do this?',
    detail: 'URL: ' + url,
    checkboxLabel: 'isDev:' + isDev,
    checkboxChecked: true,
  };

  dialog.showMessageBox(null, options, (response, checkboxChecked) => {
    console.log(response);
    console.log(checkboxChecked);
  });


  mainWindow.loadURL(
    isDev
      ? "http://localhost:8080"
      : url
  );

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});