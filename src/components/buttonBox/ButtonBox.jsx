import React, { useState } from 'react';
import Button from '../button/Button';
import ControllerBox from '../controllerBox/ControllerBox';
import "./buttonBox.css";

export default function ButtonBox() {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = (text) => {
    setDisplayText(text);
  }

  return (
    <>
    <div id="buttonContainer" className="my-table">
      <div className="table-row">
        <Button id="qButton" className="table-cell" text="Q" audiosrc="./assests/1.mp3" onButtonClick={handleButtonClick} />
        <Button id="aButton" className="table-cell" text="W" audiosrc="./assests/2.mp3" onButtonClick={handleButtonClick} />
        <Button id="zButton" className="table-cell" text="E" audiosrc="./assests/3.mp3" onButtonClick={handleButtonClick} />
      </div>
      <div className="table-row">
        <Button id="wButton" className="table-cell" text="A" audiosrc="./assests/4.mp3" onButtonClick={handleButtonClick} />
        <Button id="sButton" className="table-cell" text="S" audiosrc="./assests/5.mp3" onButtonClick={handleButtonClick} />
        <Button id="xButton" className="table-cell" text="D" audiosrc="./assests/6.mp3" onButtonClick={handleButtonClick} />
      </div>
      <div className="table-row">
        <Button id="eButton" className="table-cell" text="Z" audiosrc="./assests/7.mp3" onButtonClick={handleButtonClick} />
        <Button id="dButton" className="table-cell" text="X" audiosrc="./assests/8.mp3" onButtonClick={handleButtonClick} />
        <Button id="cButton" className="table-cell" text="C" audiosrc="./assests/9.mp3" onButtonClick={handleButtonClick} />
      </div>
    </div>
    <ControllerBox id="controlBox" text={displayText} />
    </>
  )
}
