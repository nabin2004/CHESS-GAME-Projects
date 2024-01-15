import React, { useState } from 'react';

const initialChessboard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const ChessGame = () => {
  const [chessboard, setChessboard] = useState(initialChessboard);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquareClick = (row, col) => {
    const clickedPiece = chessboard[row][col];

    if (!selectedPiece && clickedPiece) {
      // Select the piece
      setSelectedPiece({ type: clickedPiece, row, col });
    } else if (selectedPiece) {
      // Move the piece if the move is valid
      if (isValidMove(selectedPiece, row, col)) {
        movePiece(selectedPiece, row, col);
      }

      // Deselect the piece
      setSelectedPiece(null);
    }
  };

  const isValidMove = (piece, toRow, toCol) => {
    // Implement move validation logic based on piece type (e.g., pawn, rook)
    // For simplicity, let's assume all moves are valid for now
    return true;
  };

  const movePiece = (piece, toRow, toCol) => {
    const newChessboard = [...chessboard];
    newChessboard[toRow][toCol] = piece.type;
    newChessboard[piece.row][piece.col] = null;
    setChessboard(newChessboard);
  };

  const renderChessboard = () => {
    return chessboard.map((row, rowIndex) => (
      <div key={rowIndex} className="chessboard-row">
        {row.map((piece, colIndex) => (
          <div
            key={colIndex}
            className="chessboard-square"
            onClick={() => handleSquareClick(rowIndex, colIndex)}
          >
            {piece && <div className="chess-piece">{piece}</div>}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="chess-game">
      <h1>React Chess Game</h1>
      {renderChessboard()}
    </div>
  );
};

export default ChessGame;
