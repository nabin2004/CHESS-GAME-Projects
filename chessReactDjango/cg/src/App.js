// App.js

import React, { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="chess">
      <div className="main_container">
        {/* File is a column in chess, and chess players call a column as FILE */}
        {/* This is file A */}
        <div className="file-a files">
          <div className="square"><img src="/images/pieces/black/rook.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/rook.png" alt="" /></div>
        </div>

        {/* This is file B */}
        <div className="file-b files">
          <div className="square"><img src="/images/pieces/black/knight.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/knight.png" alt="" /></div>
        </div>

        {/* This is file C */}
        <div className="file-c files">
          <div className="square"><img src="/images/pieces/black/bishop.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/bishop.png" alt="" /></div>
        </div>

        {/* This is file D */}
        <div className="file-d files">
          <div className="square"><img src="/images/pieces/black/queen.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/queen.png" alt="" /></div>
        </div>

        {/* This is file E */}
        <div className="file-e files">
          <div className="square"><img src="/images/pieces/black/king.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/king.png" alt="" /></div>
        </div>

        {/* This is file F */}
        <div className="file-f files">
          <div className="square"><img src="/images/pieces/black/bishop.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/bishop.png" alt="" /></div>
        </div>

        {/* This is file G */}
        <div className="file-g files">
          <div className="square"><img src="/images/pieces/black/knight.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/knight.png" alt="" /></div>
        </div>

        {/* This is file H */}
        <div className="file-h files">
          <div className="square"><img src="/images/pieces/black/rook.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/black/pawn.png" alt="" /></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"><img src="/images/pieces/white/pawn.png" alt="" /></div>
          <div className="square"><img src="/images/pieces/white/rook.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default App;

