import React from 'react';

import '../styles/toolbar.scss';
import toolState from '../store/toolState';

export const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label
        style={{margin: '0 10px'}}
        htmlFor="line-width"
      >
          Толщина линии
      </label>
      <input
        onChange={e => toolState.setLineWidth(e.target.value)}
        id="line-width"
        style={{margin: '0 10px'}}
        type="number"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label
        style={{margin: '0 10px'}}
        htmlFor="stroke-color"
      >
            Цвет обводки
      </label>
      <input
        onChange={e => toolState.setStrokeColor(e.target.value)}
        id="line-width"
        style={{margin: '0 10px'}}
        type="color"
        defaultValue={1}
        min={1}
        max={50}
      />
    </div>
  );
};