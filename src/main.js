const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow


const windowSize = { width: 800, height: 600 };

let mainWindow;

app.on('ready', function() {
	mainWindow = new BrowserWindow(windowSize);

	/*
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, './public/index.html'),
		protocol: 'file:',
		slashes: true
	}));
	*/
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '/../build/index.html'),
		protocol: 'file:',
		slashes: true
	});
    mainWindow.loadURL(startUrl);
	// mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});