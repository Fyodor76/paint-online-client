import React from 'react';

import './styles/app.scss';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import {Toolbar} from './components/Toolbar';
import {SettingBar} from './components/SettingBar';
import {Canvas} from './components/Canvas';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={
          <div className="app">
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
          </div>
        }>
        </Route>
        <Route path="*" element={<Navigate to={`f${(+new Date()).toString(16)}`}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
