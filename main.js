const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');

const customMenu = require('./src/js/menu');

let mainWindow;

app.on('ready', () => {

  // Create new window
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    title: 'A.M.E',
    icon: path.join(__dirname, 'src/icon/app.png'),
    javascript: true
  });


  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));


  // Quit app when closed
  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });


  // Remove default menu, add our custom menu
  mainWindow.setMenu(null);
  customMenu.ameMenu();

});