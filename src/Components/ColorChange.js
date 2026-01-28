import React from 'react'
import '../Styles/ColorChange.css'
import { useState } from 'react'

const ColorChange = () => {
  
  const [color, setColor] = useState("black");
  const [textCol, setTextCol] = useState("white");

  const redCol = () => {
    setColor("red");
    setTextCol("white");
  }

  const greenCol = () => {
    setColor("green");
    setTextCol("white");
  }
  
  return (
    <div className='bg-color' style={{backgroundColor: color}}>

      <p className='text' style={{color: textCol}}>Click on the Button to Change the Color...</p>
      <div className='btnBox'>
        <button className='btns' id='red' onClick={redCol}>Red</button>
        <button className='btns' id='Green' onClick={greenCol}>Green</button>
        <button className='btns' id='Blue' onClick={() => {
            setColor("blue");
            setTextCol("white");
              }
                }>Blue</button>
        <button className='btns' id='Olive' onClick={() => {
            setColor("olive");
            setTextCol("white");
              }
                }>Olive</button>
        <button className='btns' id='Gray' onClick={() => {
            setColor("gray");
            setTextCol("white");
              }
                }>Gray</button>
        <button className='btns' id='Yellow' onClick={() => {
            setColor("yellow");
            setTextCol("black")
              } 
                }>Yellow</button>
        <button className='btns' id='Pink' onClick={() => {
            setColor("pink");
            setTextCol("black");
              }
                }>Pink</button>
        <button className='btns' id='Purple' onClick={() => {
            setColor("purple");
            setTextCol("white");
              }
                }>Purple</button>
        <button className='btns' id='Lavender' onClick={() => {
            setColor("lavender");
            setTextCol("black");
              }
                }>Lavender</button>
        <button className='btns' id='White' onClick={() => {
            setColor("white");
            setTextCol("black");
              }
                }>White</button>
        <button className='btns' id='Black' onClick={() => {
            setColor("black");
            setTextCol("white");
              }
                }>Black</button>
                
      </div>
    </div>
  )
}

export default ColorChange