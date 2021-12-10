'use strict'

const { app, Menu, Tray } = require('electron')

let tray = null
let dev = false


if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true
}

if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

app.whenReady().then(() => {
  tray = new Tray('./src/assets/icon/icon.png');
  console.log(tray)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Ampoule 1', type: 'normal' },
    { label: 'Ampoule 2', type: 'normal' },
  ]);
  tray.setContextMenu(contextMenu);
});
