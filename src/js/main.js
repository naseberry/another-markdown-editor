const {app, BrowserWindow, Menu} = require('electron');
const fs = require('fs');
const path = require('path');
const url = require('url');

const customMenu = require('./menu');

let mainWindow;

app.on('ready', () => {

  // Create new window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'A.M.E',
    javascript: true
  });


  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(process.cwd(), 'src/index.html'),
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