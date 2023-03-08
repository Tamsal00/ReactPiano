import React, { useState, useRef } from 'react';
import './controllerBox.css';

export default function ControllerBox({ text }) {

  return (
    <div id="controllerBox">
    
        <div id="innerCompnents">
          <div id="display">{text}
          </div>    
     </div>
     </div>
   
  );
}
