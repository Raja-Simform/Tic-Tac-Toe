// import { useState } from "react";
interface GameBoardProps {
  onSelectGrid: (rowIndex: number, colIndex: number) => void;
  //     activePlayerSymbol:string;
  board: string[][];
}

export default function GameBoard({ onSelectGrid, board }: GameBoardProps) {
  // const [gameBoard,setGameBoard]=useState(grid);

  // function handleSelect(row:number,col:number){
  //     setGameBoard((GameBoard)=>
  //     {
  //         // [...GameBoard.map(inner=>[...inner])];
  //         const newBoard=structuredClone(GameBoard);
  //         newBoard[row][col]=activePlayerSymbol;
  //         return newBoard;
  //     });
  //     onSelectGrid();
  // }
  //   const copiedGameBoard = grid.map((row) => [...row]);

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectGrid(rowIndex, colIndex)}
                  disabled={col !== ""}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
