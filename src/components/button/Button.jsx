import React from 'react';
import "./button.css";

export default function Button({text,id,audiosrc,onButtonClick}) {
  

  const handleClick = () => {
    const audio = new Audio(audiosrc);
    audio.play();
    onButtonClick(text);
  }
 
  return (
    <div>
      <button id={id} className="drum-pad" onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}
