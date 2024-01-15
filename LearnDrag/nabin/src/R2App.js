import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentRookSquare, setRookCurrentSquare] = useState('a11');

  const handleDragEnd = () => {
    console.log('Dragend triggered');
  };

  const handleDragOver = (e, square) => {
    e.preventDefault(); 
    console.log('Drag Over detected');
    setRookCurrentSquare(square);
  };

  const renderPiece = (square,color,alt) => (
    <img
      src= {`./images/pieces/${color}/${alt}.png`}
      alt= {`${alt}`}
      draggable='true'
      className= {`${alt}`}
      onDragEnd={handleDragEnd}
      style={{ visibility: currentRookSquare === square ? 'visible' : 'hidden' }}
    />
  );

  const renderSquares = (file,color,alt) => {
    const squares = [];
    for (let i = 11; i <= 14; i++) {
      const square = `${file}${i}`;
      squares.push(
        <div key={square} className={`square ${square}`} onDragOver={(e) => handleDragOver(e, square)}>
          {renderPiece(square,color,alt)}
        </div>
      );
    }
    return squares;

  };

  return (
    <div className='App'>
<div className="file-a files">
  {renderSquares('a','black','rook')}
  {renderSquares('a','white','rook')}
</div> 
<div className="file-b files">
{renderSquares('a','black','knight')}
{renderSquares('a','white','knight')}
</div> 
<div className="file-c files">
{renderSquares('a','black','bishop')}
{renderSquares('a','white','bishop')}
</div> 
<div className="file-d files">
{renderSquares('a','black','king')}
{renderSquares('a','white','king')}
</div> 
<div className="file-e files">
  {renderSquares('a','black','queen')}
  {renderSquares('a','white','queen')}
</div>
<div className="file-f files">
{renderSquares('a','black','bishop')}
{renderSquares('a','white','bishop')}
</div>
<div className="file-g files">
{renderSquares('a','black','knight')}
{renderSquares('a','white','knight')}
</div>
<div className="file-h files">
{renderSquares('a','black','rook')}
{renderSquares('a','white','rook')}
</div>

    </div>
  );
}

export default App;
