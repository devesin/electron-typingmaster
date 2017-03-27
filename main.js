const electron = require("electron");
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
var mainWindow;
app.on('ready',function(){
	mainWindow = new BrowserWindow({width: 800, height: 720, backgroundColor: '#ff0' });
	//mainWindow.loadURL('https://github.com');
	mainWindow.loadURL('file://' + __dirname + '/index.html');
});