// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';  // Подключение файла стилей
import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);