import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSquare, setCurrentSquare] = useState('a11');

  const handleDragEnd = () => {
    console.log('Dragend triggered');
  };

  const handleDragOver = (e, square) => {
    e.preventDefault(); // Prevent default behavior to enable drop
    console.log('Drag Over detected');
    setCurrentSquare(square);
  };

  const renderRook = (square) => (
    <img
      src="./path/rook.png"
      alt="rook"
      draggable='true'
      className='rook'
      onDragEnd={handleDragEnd}
      style={{ visibility: currentSquare === square ? 'visible' : 'hidden' }}
    />
  );

  const renderSquares = (file) => {
    const squares = [];
    for (let i = 11; i <= 19; i++) {
      const square = `${file}${i}`;
      squares.push(
        <div key={square} className={`square ${square}`} onDragOver={(e) => handleDragOver(e, square)}>
          {renderRook(square)}
        </div>
      );
    }
    return squares;
  };

  return (
    <div className='App'>
      <div className="file-a files">
        {renderSquares('a')}
      </div>

      <div className="file-b files">
        {renderSquares('b')}
      </div>

      {/* Add similar blocks for other files if needed */}

    </div>
  );
}

export default App;
