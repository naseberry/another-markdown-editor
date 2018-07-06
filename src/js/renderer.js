const {dialog, ipcRenderer, remote} = require('electron');
// const dialog = require('electron').remote.dialog;
const fs = require('fs');

let editor = document.getElementsByClassName('CodeMirror')[0].CodeMirror;
window.store = {};

function readMarkdownFile(fileName) {
  store.currentFile = fileName;
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      store.currentFile = null;
      console.log(`file read error: ${error}`);
      return false;
    }

    store.currentFile = fileName;
    editor.setValue(data);
    editor.refresh();
    return true;
  });
}


function saveMarkdownFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      store.currentFile = null;
      console.log(`file read error: ${error}`);
      return false;
    }

    store.currentFile = fileName;
    console.log(`saved file: ${fileName}`);
    return true;
  });
}

function fileSaveAs() {
  remote.dialog.showSaveDialog({
    filters: [
      { name: 'Save as', extensions: ['md', 'markdown'] }
    ]
  },
  (fileName) => {
    if (fileName === undefined) {
      return;
    }
    saveMarkdownFile(fileName, editor.getValue());
  });
}


ipcRenderer.on('file-new', () => {
  store.currentFile = '';
  editor.setValue('');
});


ipcRenderer.on('file-open', () => {
  remote.dialog.showOpenDialog({
    filters: [
      { name: 'markdown', extensions: ['md', 'markdown'] }
    ]
  },
  (fileNames) => {
    if (fileNames === undefined) {
      return;
    }
    var fileName = fileNames[0];
    readMarkdownFile(fileName);
  });
});


ipcRenderer.on('file-save', () => {
  if (store.currentFile) {
    var fileName = store.currentFile;
    saveMarkdownFile(fileName, editor.getValue());
    return true;
  } else {
    fileSaveAs();
  }
});


ipcRenderer.on('file-save-as', fileSaveAs);
