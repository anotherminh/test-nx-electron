import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
    log: (...args: any[]) => ipcRenderer.invoke('log', ...args),
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),
    platform: process.platform
});
