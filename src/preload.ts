import { contextBridge, ipcRenderer } from 'electron'

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Example function
  testAPI: () => console.log('API is working'),

  // Add more API functions as needed
  // For example, file operations:
  openFile: () => ipcRenderer.invoke('open-file'),
  saveFile: (content: string, path?: string) =>
    ipcRenderer.invoke('save-file', content, path),
})
