const {BrowserWindow, Menu, shell} = require('electron');
let mainWindow;

exports.ameMenu = () => {

  // Create menu template
  const ameMenu = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New',
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              focusedWindow.webContents.send('file-new');
            }
          },
          accelerator: 'CmdOrCtrl+N'
        },
        {
          type: 'separator'
        },
        {
          label: 'Open',
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              focusedWindow.webContents.send('file-open');
            }
          },
          accelerator: 'CmdOrCtrl+O',
          role: 'open'
        },
        {
          type: 'separator'
        },
        {
          label: 'Save',
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              focusedWindow.webContents.send('file-save');
            }
          },
          accelerator: 'CmdOrCtrl+S',
          role: 'save'
        },
        {
          label: 'Save as',
          click: (item, focusedWindow) => {
            if (focusedWindow) {
              focusedWindow.webContents.send('file-save-as');
            }
          },
          accelerator: 'CmdOrCtrl+Shift+S',
          role: 'save-as'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          click: () => {
            app.quit();
          },
          accelerator: 'CmdOrCtrl+W',
          role: 'quit'
        }
      ]
    },

    {
      label: 'Edit',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    },

    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },

    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },

    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {
            shell.openExternal('https://github.com/naseberry/another-markdown-editor');
          }
        }
      ]
    }
  ];


  // If OSX, add empty object to menu
  if (process.platform == 'darwin') {
    ameMenu.unshift({});
  }

  // Build menu from templates
  const mainMenu = Menu.buildFromTemplate(ameMenu);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);

}
