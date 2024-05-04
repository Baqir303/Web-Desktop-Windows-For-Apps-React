import React from 'react';
import YTLogo from '../images/youtube.png';
import TodoLogo from '../images/to-do-list.png';
import WeatherLogo from '../images/weather.png';


function Taskbar({ windows, openWindow }) {
  const handleClick = (id) => {
    const window = windows.find((win) => win.id === id);
    if (window) {
      openWindow(id);
    }
  };

  return (
    <div className="taskbar">
      {windows.map((window) => (
        <div key={window.id} className="taskbar-icon" onClick={() => handleClick(window.id)}>
          {getIconForApp(window.title)}
        </div>
      ))}
    </div>
  );
}

function getIconForApp(appTitle) {
  switch (appTitle) {
    case 'YouTube':
      return <img src={YTLogo} alt="YouTube" />;
    case 'To-Do List':
      return <img src={TodoLogo} alt="To-Do List" />;
    case 'Weather':
      return <img src={WeatherLogo} alt="Weather" />;
    default:
      return null;
  }
}

export default Taskbar;
