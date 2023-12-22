// App.js

import React from 'react';
import './App.css';

function Chess() {
  
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
      <div className="file-a files">
        <div className="square a11 roo"><img src="./images/pieces/black/rook.png" alt="" onDragOver={handleOver} onDragStart={handleStart} onDragEnd={handleEnd}/></div>
        <div className="square a12"><img src="./images/pieces/black/pawn.png" alt="" onDragOver={handleOver} onDragStart={handleStart} onDragEnd={handleEnd}/></div>
        <div className="square a13"></div>
        <div className="square a14"></div>
        <div className="square a15"></div>
        <div className="square a16"></div>
        <div className="square a17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square a18"><img src="./images/pieces/white/rook.png" alt="" /></div>
      </div>

      {/* This is file B */}
      <div className="file-b files">
        <div className="square b11"><img src="./images/pieces/black/knight.png" alt="" /></div>
        <div className="square b12"><img src="./images/pieces/black/pawn.png" alt="" /></div>
        <div className="square b13"></div>
        <div className="square b14"></div>
        <div className="square b15"></div>
        <div className="square b16"></div>
        <div className="square b17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square b18"><img src="./images/pieces/white/knight.png" alt="" /></div>
      </div>

      {/* This is file C */}
      <div className="file-c files">
        <div className="square c11"><img src="./images/pieces/black/bishop.png" alt="" /></div>
        <div className="square c12"><img src="./images/pieces/black/pawn.png" alt="" /></div>
        <div className="square c13"></div>
        <div className="square c14"></div>
        <div className="square c15"></div>
        <div className="square c16"></div>
        <div className="square c17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square c18"><img src="./images/pieces/white/bishop.png" alt="" /></div>
      </div>

      {/* This is file D */}
      <div className="file-d files">
        <div className="square d11"><img src="./images/pieces/black/queen.png" alt="" /></div>
        <div className="square d12"><img src="./images/pieces/black/pawn.png" alt="" /></div>
        <div className="square d13"></div>
        <div className="square d14"></div>
        <div className="square d15"></div>
        <div className="square d16"></div>
        <div className="square d17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square d18"><img src="./images/pieces/white/queen.png" alt="" /></div>
      </div>

      {/* This is file E */}
      <div className="file-e files">
        <div className="square e11"><img src="./images/pieces/black/king.png" alt="" /></div>
        <div className="square e12"><img src="./images/pieces/black/pawn.png" alt="" /></div>
        <div className="square e13"></div>
        <div className="square e14"></div>
        <div className="square e15"></div>
        <div className="square e16"></div>
        <div className="square e17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square e18"><img src="./images/pieces/white/king.png" alt="" /></div>
      </div>

      {/* This is file F */}
      <div className="file-f files">
        <div className="square f11"><img src="./images/pieces/black/bishop.png" alt="" /></div>
        <div className="square f12"><img src="./images/pieces/black/pawn.png" alt="" /></div>
        <div className="square f13"></div>
        <div className="square f14"></div>
        <div className="square f15"></div>
        <div className="square f16"></div>
        <div className="square f17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square f18"><img src="./images/pieces/white/bishop.png" alt="" /></div>
      </div>

      {/* This is file G */}
      <div className="file-g files">
        <div className="square g11"><img src="./images/pieces/black/knight.png" alt="" /></div>
        <div className="square g12"><img src="./images/pieces/black/pawn.png" alt="" /></div>
        <div className="square g13"></div>
        <div className="square g14"></div>
        <div className="square g15"></div>
        <div className="square g16"></div>
        <div className="square g17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square g18"><img src="./images/pieces/white/knight.png" alt="" /></div>
      </div>

      {/* This is file H */}
      <div className="file-h files">
        <div className="square h11"><img src="./images/pieces/black/rook.png" alt="" /></div>
        <div className="square h12"><img src="./images/pieces/black/pawn.png" alt="" /></div>
        <div className="square h13"></div>
        <div className="square h14"></div>
        <div className="square h15"></div>
        <div className="square h16"></div>
        <div className="square h17"><img src="./images/pieces/white/pawn.png" alt="" /></div>
        <div className="square h18"><img src="./images/pieces/white/rook.png" alt="" /></div>
      </div>
    </div>
    </div>
  );
}

export default Chess;
