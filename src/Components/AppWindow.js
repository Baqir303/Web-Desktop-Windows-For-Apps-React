import React, { useState } from 'react';
import '../AppWindows.css';

function AppWindow({ title, url, onClose }) {
  const [windowState, setWindowState] = useState('normal');

  const minimizeWindow = () => {
    setWindowState('minimized');
    
  };

  const maximizeWindow = () => {
    setWindowState(windowState === 'maximized' ? 'normal' : 'maximized');
  };

  const closeWindow = () => {
    onClose();
  };

  return (
    <div className={`app-window ${windowState}`}>
      <div className="window-header">
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button className="control-button minimize" onClick={minimizeWindow}>
            <i className="fas fa-window-minimize"></i>
          </button>
          <button className="control-button maximize" onClick={maximizeWindow}>
            <i className={`fas ${windowState === 'maximized' ? 'fa-window-restore' : 'fa-window-maximize'}`}></i>
          </button>
          <button className="control-button close" onClick={closeWindow}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className="window-content">
        <iframe title={title} src={url} frameBorder="0"></iframe>
      </div>
    </div>
  );
}

export default AppWindow;
