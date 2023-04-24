import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App';

// CSS File Here
import 'swiper/css';
import "aos/dist/aos.css";
import 'react-modal-video/scss/modal-video.scss';
import './assets/scss/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

