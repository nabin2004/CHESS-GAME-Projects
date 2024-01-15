// App.js

import React, { useState } from 'react';
import './App.css';

function Chess() {
  const [clickedSquareId, setClickedSquareId] = useState(null);

  const handleClick = (e) => {
    console.log('Clicked');

    if (clickedSquareId !== null) {
      const previousClickedElement = document.getElementById(clickedSquareId);
      if (previousClickedElement) {
        previousClickedElement.id = '';
      }
    }

    const clickedClassName = e.target.className;
    console.log(clickedClassName);

    // Set 'Sqclicked' as the new ID for the clicked square
    const classes = clickedClassName.split(' ');
    const numberOfClasses = classes.length;

    if (numberOfClasses > 2) {
      e.target.id = 'Sqclicked';
      setClickedSquareId(e.target.id);
    }
    
  };

  const handleStart = (e) => {
      console.log('Start Drag')
      
  }

  const handleEnd = (e) => {
    console.log('Drag End')
  }

  const handleOver = (e) => {
    console.log('Over')
  }


  


  return (
    <div className='chess'>
    <div className="main_container">
      {/* File is a column in chess, and chess players call a column as FILE */}
      {/* This is file A */}
      {/* <img src="./images/pieces/black/rook.png" alt="" onDragOver={handleOver} onDragStart={handleStart} onDragEnd={handleEnd}/> */}
      <div className="file-a files">
        <div className="square a11 Brook" onClick={(e) => handleClick(e)} onDragOver={handleOver} onDragStart={handleStart} onDragEnd={handleEnd}/>
        <div className="square a12 Bpawn" onClick={(e) => handleClick(e)} onDragOver={handleOver} onDragStart={handleStart} onDragEnd={handleEnd}/>
        <div className="square a13" onClick={(e) => handleClick(e)}></div>
        <div className="square a14" onClick={(e) => handleClick(e)}></div>
        <div className="square a15" onClick={(e) => handleClick(e)}></div>
        <div className="square a16" onClick={(e) => handleClick(e)}></div>
        <div className="square a17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square a18 Wrook" onClick={(e) => handleClick(e)}></div>
      </div>

      {/* This is file B */}
      <div className="file-b files">
        <div className="square b11 Bknight" onClick={(e) => handleClick(e)}> </div>
        <div className="square b12 Bpawn" onClick={(e) => handleClick(e)}> </div>
        <div className="square b13" onClick={(e) => handleClick(e)}></div>
        <div className="square b14" onClick={(e) => handleClick(e)}></div>
        <div className="square b15" onClick={(e) => handleClick(e)}></div>
        <div className="square b16" onClick={(e) => handleClick(e)}></div>
        <div className="square b17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square b18 Wknight" onClick={(e) => handleClick(e)}></div>
      </div>

      {/* This is file C */}
      <div className="file-c files">
        <div className="square c11 Bbishop" onClick={(e) => handleClick(e)}></div>
        <div className="square c12 Bpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square c13" onClick={(e) => handleClick(e)}></div>
        <div className="square c14" onClick={(e) => handleClick(e)}></div>
        <div className="square c15" onClick={(e) => handleClick(e)}></div>
        <div className="square c16" onClick={(e) => handleClick(e)}></div>
        <div className="square c17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square c18 Wbishop" onClick={(e) => handleClick(e)}></div>
      </div>

      {/* This is file D */}
      <div className="file-d files">
        <div className="square d11 Bqueen" onClick={(e) => handleClick(e)}></div>
        <div className="square d12 Bpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square d13" onClick={(e) => handleClick(e)}></div>
        <div className="square d14" onClick={(e) => handleClick(e)}></div>
        <div className="square d15" onClick={(e) => handleClick(e)}></div>
        <div className="square d16" onClick={(e) => handleClick(e)}></div>
        <div className="square d17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square d18 Wqueen" onClick={(e) => handleClick(e)}></div>
      </div>

      {/* This is file E */}
      <div className="file-e files">
        <div className="square e11 Bking" onClick={(e) => handleClick(e)}></div>
        <div className="square e12 Bpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square e13" onClick={(e) => handleClick(e)}></div>
        <div className="square e14" onClick={(e) => handleClick(e)}></div>
        <div className="square e15" onClick={(e) => handleClick(e)}></div>
        <div className="square e16" onClick={(e) => handleClick(e)}></div>
        <div className="square e17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square e18 Wking" onClick={(e) => handleClick(e)}></div>
      </div>

      {/* This is file F */}
      <div className="file-f files">
        <div className="square f11 Bbishop" onClick={(e) => handleClick(e)}></div>
        <div className="square f12 Bpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square f13" onClick={(e) => handleClick(e)}></div>
        <div className="square f14" onClick={(e) => handleClick(e)}></div>
        <div className="square f15" onClick={(e) => handleClick(e)}></div>
        <div className="square f16" onClick={(e) => handleClick(e)}></div>
        <div className="square f17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square f18 Wbishop" onClick={(e) => handleClick(e)}></div>
      </div>

      {/* This is file G */}
      <div className="file-g files">
        <div className="square g11 Bknight" onClick={(e) => handleClick(e)}></div>
        <div className="square g12 Bpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square g13" onClick={(e) => handleClick(e)}></div>
        <div className="square g14" onClick={(e) => handleClick(e)}></div>
        <div className="square g15" onClick={(e) => handleClick(e)}></div>
        <div className="square g16" onClick={(e) => handleClick(e)}></div>
        <div className="square g17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square g18 Wknight" onClick={(e) => handleClick(e)}></div>
      </div>

      {/* This is file H */}
      <div className="file-h files">
        <div className="square h11 Brook" onClick={(e) => handleClick(e)}></div>
        <div className="square h12 Bpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square h13" onClick={(e) => handleClick(e)}></div>
        <div className="square h14" onClick={(e) => handleClick(e)}></div>
        <div className="square h15" onClick={(e) => handleClick(e)}></div>
        <div className="square h16" onClick={(e) => handleClick(e)}></div>
        <div className="square h17 Wpawn" onClick={(e) => handleClick(e)}></div>
        <div className="square h18 Wrook" onClick={(e) => handleClick(e)}></div>
      </div>
    </div>
    </div>
  );
}

export default Chess;
