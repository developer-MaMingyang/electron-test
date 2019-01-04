import { app, BrowserWindow, Tray, Menu } from 'electron' // eslint-disable-line
const path = require('path');

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow;
let tray;
let menu;
const winURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:9080'
    : `file://${__dirname}/index.html`;

const createWindow = () => {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 750,
        useContentSize: true,
        width: 1100,
    });

    mainWindow.loadURL(winURL);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.on('close', (event) => {
        mainWindow.hide();
        event.preventDefault();
    });

    mainWindow.on('show', () => {
        tray.setHighlightMode('always');
    });

    mainWindow.on('hide', () => {
        tray.setHighlightMode('never');
    });

    tray = new Tray(path.join(__dirname, '../renderer/assets/favicon.png'));
    const contextMenu = Menu.buildFromTemplate([{
        label: '退出',
        click: () => {
            mainWindow.destroy();
        },
    }]);
    tray.setToolTip('马铭扬');
    tray.setContextMenu(contextMenu);
    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
    });

    menu = Menu.buildFromTemplate([{
        label: '菜单1',
        submenu: [{
            label: '敬请期待',
        }],
    }]);
    Menu.setApplicationMenu(menu);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
