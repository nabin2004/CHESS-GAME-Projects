import { render } from "@testing-library/react";

const renderPiece = (square,color,piece) => (
    const [currentSquare, setCurrentSquare] = useState('a11');
    <img
      src={`./images/pieces/${color}/${piece}.png`}
    // {./images/pieces/black/rook.png}
      alt={piece}
      draggable='true'
      className= {piece}
      onDragEnd={handleDragEnd}
      style={{ visibility: currentSquare === square ? 'visible' : 'hidden' }}
    />
  );

export default renderPiece ;