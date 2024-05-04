import React, { useState } from 'react';
import AppWindow from './AppWindow';
import YTLogo from '../images/youtube.png';
import TodoLogo from '../images/to-do-list.png';
import WeatherLogo from '../images/weather.png';

function MainScreen() {
  const [windows, setWindows] = useState([
    { id: 1, title: 'YouTube', url: 'http://localhost:3000', isOpen: false, isMinimized: false },
    { id: 2, title: 'To-Do List', url: 'http://localhost:3001', isOpen: false, isMinimized: false },
    { id: 3, title: 'Weather', url: 'http://localhost:3002', isOpen: false, isMinimized: false }
  ]);

  const openWindow = (id) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, isOpen: true, isMinimized: false };
      }
      return window;
    }));
  };

  const closeWindow = (id) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, isOpen: false };
      }
      return window;
    }));
  };

  const toggleWindowState = (id) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, isMinimized: !window.isMinimized };
      }
      return window;
    }));
  };

  return (
    <div className="main-screen">
      <div className="app-icons">
        <div className="app-icon" onClick={() => openWindow(1)}>
          <img src={YTLogo} alt="YouTube" />
          <p>YouTube</p>
        </div>
        <div className="app-icon" onClick={() => openWindow(2)}>
          <img src={TodoLogo} alt="To-Do List" />
          <p>To-Do List</p>
        </div>
        <div className="app-icon" onClick={() => openWindow(3)}>
          <img src={WeatherLogo} alt="Weather" />
          <p>Weather</p>
        </div>
      </div>
      <div className="taskbar">
        {windows.map(window => (
          window.isOpen && <img key={window.id} src={getIconForApp(window.title)} alt={window.title} onClick={() => toggleWindowState(window.id)} />
        ))}
      </div>
      {windows.map(window => (
        window.isOpen && !window.isMinimized && <AppWindow key={window.id} title={window.title} url={window.url} onClose={() => closeWindow(window.id)} />
      ))}
    </div>
  );
}

function getIconForApp(appTitle) {
  switch (appTitle) {
    case 'YouTube':
      return YTLogo;
    case 'To-Do List':
      return TodoLogo;
    case 'Weather':
      return WeatherLogo;
    default:
      return null;
  }
}

export default MainScreen;
