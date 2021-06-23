// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { BrowserWindow } = require('@electron/remote')

let currWindow = BrowserWindow.getFocusedWindow();

window.closeCurrentWindow = function(){
    currWindow.close();
}