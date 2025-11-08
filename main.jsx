import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import HireMe from './HireMe.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hire-me" element={<HireMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);