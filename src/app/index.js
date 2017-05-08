const { app, BrowserWindow } = require('electron')

const osMap = {
  win32: 'Windows',
  darwin: 'macOS',
  linux: 'Linux',
}

let mainWindow

/**
 * Create the main application window
 */
function createMainWindow() {
  mainWindow = new BrowserWindow({
		width: 600,
		height: 400
	});

	mainWindow.loadURL(`file://${__dirname}/index.html`);
	mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createMainWindow()
})

app.on('window-all-closed', () => {
  // Consistent MacOS behavior to leave the Application bar open
  // @todo for Debugger, CLOSE IT!!!
  if (process.platform !== 'darwin2') {
    app.quit()
  }
})
